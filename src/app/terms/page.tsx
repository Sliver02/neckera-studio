import PageHeader from "@/components/organisms/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Neckera Studio",
  description:
    "Read the terms and conditions governing your use of the Neckera Studio website and its content.",
};

const LAST_UPDATED = "May 12, 2026";

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHeader
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website or engaging with our content."
      />

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Last updated */}
        <p
          className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-16"
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
        >
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-14 text-foreground">
          {/* 1 */}
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Neckera Studio website (the
              &ldquo;Site&rdquo;), you agree to be bound by these Terms and
              Conditions. If you do not agree with any part of these terms,
              please do not use the Site.
            </p>
            <p>
              Neckera Studio reserves the right to update or modify these terms
              at any time without prior notice. Continued use of the Site after
              any changes constitutes your acceptance of the revised terms.
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Use of the Site">
            <p>
              This Site is intended for informational and promotional purposes
              related to Neckera Studio and its games. You agree to use the Site
              only for lawful purposes and in a manner that does not infringe
              the rights of others.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>
                Attempt to gain unauthorized access to any part of the Site or
                its related systems.
              </li>
              <li>
                Use automated tools, scrapers, or bots to collect data from the
                Site without our express written permission.
              </li>
              <li>
                Post or transmit any harmful, offensive, or unlawful content.
              </li>
              <li>Impersonate Neckera Studio or any of its team members.</li>
            </ul>
          </Section>

          {/* 3 */}
          <Section title="3. Intellectual Property">
            <p>
              All content on this Site — including but not limited to logos,
              artwork, game assets, screenshots, written text, and the
              &ldquo;Neckera Studio&rdquo; name — is the exclusive property of
              Neckera Studio or its respective creators, protected under
              applicable copyright and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative
              works of any content from this Site without prior written consent
              from Neckera Studio.
            </p>
          </Section>

          {/* 4 */}
          <Section title="4. Games and Third-Party Platforms">
            <p>
              Neckera Studio distributes games through third-party platforms
              including itch.io and Steam. Access to and use of those platforms
              is governed by their respective terms of service. Neckera Studio
              is not responsible for the policies, practices, or availability of
              these third-party platforms.
            </p>
            <p>
              Game content, pricing, and availability may change at any time.
              Any purchase, download, or in-game transaction made through a
              third-party platform is subject to that platform&rsquo;s own terms
              and refund policy.
            </p>
          </Section>

          {/* 5 */}
          <Section title="5. Privacy">
            <p>
              This Site does not collect personal information beyond what is
              voluntarily provided through contact forms or equivalent means.
              Information you share with us is used solely to respond to your
              inquiry and is not sold or shared with third parties without your
              consent.
            </p>
            <p>
              The Site may use standard web analytics tools that collect
              anonymized usage data (such as page views and session duration) to
              help us understand how visitors interact with the Site.
            </p>
          </Section>

          {/* 6 */}
          <Section title="6. Third-Party Links">
            <p>
              The Site may contain links to external websites such as itch.io,
              YouTube, Instagram, and other platforms. These links are provided
              for convenience only. Neckera Studio has no control over the
              content of those sites and accepts no responsibility for them or
              for any loss or damage that may arise from your use of them.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Disclaimer of Warranties">
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; without any warranties of any kind,
              either express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose,
              or non-infringement.
            </p>
            <p>
              Neckera Studio does not warrant that the Site will be
              uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Neckera Studio and its
              team members shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of or inability to use the Site or any of its content.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Governing Law">
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with applicable laws. Any disputes arising from or
              related to your use of the Site shall be subject to the exclusive
              jurisdiction of the competent courts of the relevant territory.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. Contact">
            <p>
              If you have any questions or concerns about these Terms and
              Conditions, please reach out to us. We&rsquo;re a small team and
              we&rsquo;ll do our best to get back to you.
            </p>
            <p>
              You can contact us via the social links on the homepage or by
              reaching out through our pages on itch.io.
            </p>
          </Section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-50 py-16 px-4 border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div
            className="text-muted-foreground font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NECKERA STUDIO &copy; 2026
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              CONTACT
            </a>
            <a href="/terms" className="text-accent">
              TERMS
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Section heading with accent divider */}
      <div className="flex items-center gap-6 mb-6">
        <h2
          className="text-xl md:text-2xl font-bold text-foreground whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        <div className="h-px bg-border grow" />
      </div>

      {/* Content */}
      <div className="space-y-4 text-muted-foreground leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
