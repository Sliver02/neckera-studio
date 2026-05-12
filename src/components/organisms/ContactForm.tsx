"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { renderToStaticMarkup } from "react-dom/server";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import ContactTemplate, {
  type ContactFormValues,
} from "@/lib/emailTemplates/ContactTemplate";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type AlertState = { type: "success" | "error"; message: string } | null;

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

const inputClass = cn(
  "w-full rounded-lg border border-border bg-input/30 px-4 py-3",
  "text-foreground placeholder:text-muted-foreground",
  "transition-colors duration-200",
  "focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring",
  "disabled:opacity-50 disabled:cursor-not-allowed",
);

const errorClass = "mt-1.5 text-xs text-destructive";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);
      setAlert(null);

      const htmlContent = renderToStaticMarkup(<ContactTemplate {...data} />);

      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          email: data.email,
          subject: data.subject,
          message_html: htmlContent,
        },
        publicKey,
      );

      if (res.text === "OK") {
        setAlert({
          type: "success",
          message: "Message sent! We'll get back to you soon.",
        });
        reset();
      } else {
        setAlert({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setAlert({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2"
        >
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          className={inputClass}
          disabled={loading}
          {...register("email")}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2"
        >
          Subject <span className="text-accent">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What's this about?"
          className={inputClass}
          disabled={loading}
          {...register("subject")}
        />
        {errors.subject && (
          <p className={errorClass}>{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={7}
          placeholder="Tell us what's on your mind..."
          className={cn(inputClass, "resize-none")}
          disabled={loading}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {/* Alert */}
      {alert && (
        <div
          role="alert"
          className={cn(
            "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
            alert.type === "success"
              ? "border-primary/40 bg-primary/10 text-foreground"
              : "border-destructive/40 bg-destructive/10 text-destructive",
          )}
        >
          {alert.type === "success" ? (
            <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
          ) : (
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
          )}
          {alert.message}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3",
          "bg-primary text-primary-foreground font-semibold tracking-wide",
          "transition-all duration-200 hover:bg-primary/80 active:translate-y-px",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        )}
      >
        <Send className="size-4" />
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
