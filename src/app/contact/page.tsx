import PageHeader from "@/components/organisms/PageHeader";
import ContactForm from "@/components/organisms/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Neckera Studio",
  description:
    "Get in touch with Neckera Studio. Send us a message and we'll get back to you as soon as possible.",
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHeader
        title="Contact"
        description="Have a question or just want to say hello? Drop us a message."
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Intro */}
          <p
            className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-10"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
          >
            We&apos;d love to hear from you
          </p>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
