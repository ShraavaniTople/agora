import LegalLayout, { LegalSection, LegalList } from "@/components/legal/LegalLayout";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "service-definition", label: "Service Definition & Business Model" },
  { id: "business-client-requirements", label: "Business Client Requirements" },
  { id: "agent-requirements", label: "Gig Agent Requirements" },
  { id: "telemarketing-compliance", label: "Telemarketing Compliance" },
  { id: "data-rights", label: "Data Rights & Platform Training" },
  { id: "performance-disclaimers", label: "Performance Disclaimers" },
  { id: "pricing-payment", label: "Pricing & Payment Terms" },
  { id: "liability-limitations", label: "Liability Limitations" },
  { id: "termination-disputes", label: "Termination & Dispute Resolution" },
  { id: "abuse-prevention", label: "Platform Abuse Prevention" },
];

export default function TermsClient() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="September 15, 2025"
      intro="Please read these terms and conditions carefully before using our outbound sales platform. These terms constitute a legal agreement between AGORA AI LLC ('AGORA,' 'we,' or 'us') and the entity or person ('Customer,' 'you,' or 'User') who registers for or uses our outbound sales platform services ('Services'). AGORA facilitates relationships between three parties: AGORA (Platform operator and technology provider), Business Clients (Companies uploading leads and campaigns), and Gig Agents (Independent contractors making outbound calls)."
      sections={sections}
    >
      <LegalSection id="acceptance" title="Acceptance of Terms">
        <p>
          By creating an account, accessing the platform, or using any AGORA
          service, you agree to be bound by these Terms & Conditions and our
          Privacy Policy, which is incorporated herein by reference. If you are
          accepting these terms on behalf of a company or other legal entity,
          you represent that you have the authority to bind that entity.
        </p>
        <p>
          If you do not agree to these terms, you may not use the AGORA
          platform. We reserve the right to modify these terms at any time, with
          notice provided via email or platform notification. Continued use of
          the platform following notice constitutes acceptance of the revised
          terms.
        </p>
      </LegalSection>

      <LegalSection id="service-definition" title="Service Definition & Business Model">
        <p>
          AGORA is a technology platform that connects business clients with
          independent contractor sales agents for the purpose of outbound
          calling, lead follow-up, and sales execution programs. AGORA provides
          the matching technology, coaching infrastructure, reporting
          dashboards, and quality control systems.
        </p>
        <p>
          AGORA is not a staffing agency and does not employ agents directly.
          Agents are independent contractors who set their own schedules and
          work across multiple clients. AGORA does not guarantee any specific
          performance outcome for business clients or any specific earnings level
          for agents.
        </p>
      </LegalSection>

      <LegalSection id="business-client-requirements" title="Business Client Requirements">
        <p>
          Business clients must provide accurate, lawfully-obtained lead data
          and campaign configurations. By uploading leads to the AGORA platform,
          you represent and warrant that:
        </p>
        <LegalList
          items={[
            "You have obtained any required consents for outbound contact from each individual on your lead list",
            "Your lead data complies with the TCPA, TSR, CAN-SPAM, and all applicable federal, state, and local laws",
            "You will not upload data that is fake, invalid, purchased from unlawful brokers, or obtained without proper consent",
            "You will promptly honor opt-out and do-not-contact requests received through the platform",
            "You will not use the platform to request conduct that violates applicable law",
          ]}
        />
        <p className="mt-4">
          Business clients are responsible for obtaining any legally required
          disclosures and consents before engaging AGORA to contact prospects on
          their behalf.
        </p>
      </LegalSection>

      <LegalSection id="agent-requirements" title="Gig Agent Requirements">
        <p>
          Agents must complete AGORA's onboarding and qualification process
          before accessing live campaigns. By accepting campaign assignments,
          agents agree to:
        </p>
        <LegalList
          items={[
            "Adhere to the scripts, talk tracks, and compliance requirements specified for each campaign",
            "Complete required training modules and maintain minimum quality scores",
            "Accurately represent themselves and AGORA to prospects during calls",
            "Refrain from making calls outside of authorized campaign windows",
            "Report any suspected compliance issues or campaign irregularities to AGORA immediately",
            "Maintain the confidentiality of business client information and call recordings",
          ]}
        />
      </LegalSection>

      <LegalSection id="telemarketing-compliance" title="Telemarketing Compliance & Legal Requirements">
        <p>
          Outbound calling activities conducted through the AGORA platform are
          subject to the Telephone Consumer Protection Act (TCPA), the
          Telemarketing Sales Rule (TSR), federal and state Do Not Call
          regulations, and other applicable consumer protection laws.
        </p>
        <p>
          Business clients bear primary responsibility for ensuring their
          campaigns comply with all applicable regulations. AGORA provides
          compliance tools and guidance but is not a law firm and does not
          provide legal advice. Clients with compliance questions are encouraged
          to seek independent legal counsel.
        </p>
        <p>
          Agents are required to complete AGORA's compliance training before
          executing live campaigns. Failure to follow compliance requirements
          may result in immediate suspension and termination from the platform.
        </p>
      </LegalSection>

      <LegalSection id="data-rights" title="Data Rights & Platform Training">
        <p>
          Business clients retain ownership of their lead data and campaign
          configurations. By using the AGORA platform, you grant AGORA a
          limited license to process your data for the purpose of delivering
          platform services, including coaching, reporting, and quality
          scoring.
        </p>
        <p>
          Call data may be used in anonymized, aggregated form to improve
          AGORA's platform. Business clients may opt out of this use by
          contacting our privacy team. Agents' performance data may similarly be
          used for model improvement; agents may request exclusion as described
          in our Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection id="performance-disclaimers" title="Performance Disclaimers & Results">
        <p>
          AGORA makes no guarantee of specific sales outcomes, revenue results,
          conversion rates, or business metrics. Past performance of agents or
          campaigns on the platform does not guarantee future results.
        </p>
        <p>
          Reported statistics (including contact rates, booking rates, and
          conversion lifts) reflect historical platform data and should not be
          construed as guarantees applicable to any specific client engagement.
          Results will vary based on industry, product, lead quality, campaign
          configuration, and market conditions.
        </p>
      </LegalSection>

      <LegalSection id="pricing-payment" title="Pricing & Payment Terms">
        <p>
          AGORA uses custom, performance-aligned pricing structures determined
          on a per-engagement basis. Specific pricing terms are set forth in
          each client's service agreement or order form. Unless otherwise agreed
          in writing:
        </p>
        <LegalList
          items={[
            "Invoices are issued monthly and payable within 30 days of receipt",
            "Late payments are subject to a monthly interest charge of 1.5% or the maximum allowed by law",
            "AGORA reserves the right to suspend services for accounts more than 30 days past due",
            "All fees are non-refundable unless otherwise specified in a written agreement",
          ]}
        />
      </LegalSection>

      <LegalSection id="liability-limitations" title="Liability Limitations">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AGORA'S TOTAL
          LIABILITY TO ANY USER FOR ALL CLAIMS ARISING OUT OF OR RELATING TO
          THESE TERMS OR THE PLATFORM SHALL NOT EXCEED THE TOTAL FEES PAID BY
          THAT USER IN THE THREE MONTHS PRECEDING THE CLAIM.
        </p>
        <p>
          IN NO EVENT SHALL AGORA BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS,
          EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </LegalSection>

      <LegalSection id="termination-disputes" title="Termination & Dispute Resolution">
        <p>
          Either party may terminate their use of the AGORA platform upon
          written notice. AGORA reserves the right to suspend or terminate
          access immediately for material violations of these Terms, including
          abuse, fraud, or compliance failures.
        </p>
        <p>
          These Terms shall be governed by the laws of the State of Georgia.
          Any disputes arising under these Terms shall be resolved by binding
          arbitration administered by the American Arbitration Association,
          except that either party may seek injunctive relief in court for
          intellectual property violations.
        </p>
      </LegalSection>

      <LegalSection id="abuse-prevention" title="Platform Abuse Prevention">
        <p>
          AGORA maintains active monitoring for abuse and policy violations. The
          following activities are strictly prohibited:
        </p>

        <p className="font-semibold text-white/80 mt-4">Prohibited Business Activities</p>
        <LegalList
          items={[
            "Uploading fake, invalid, or non-consented lead data to any campaign",
            "Requesting agents to conduct activities that violate applicable law or AGORA policy",
            "Manipulating or gaming performance metrics to influence agent compensation or platform rankings",
            "Circumventing payment requirements or seeking to reverse legitimate charges",
          ]}
        />

        <p className="font-semibold text-white/80 mt-4">Prohibited Agent Activities</p>
        <LegalList
          items={[
            "Making unauthorized calls outside of assigned campaign windows",
            "Violating script guidelines or required compliance disclosures",
            "Misrepresenting themselves, their credentials, or their affiliation to prospects or clients",
            "Using platform access, lead data, or campaign information for personal benefit outside the platform",
          ]}
        />

        <p className="mt-4">
          Violations may result in warnings, temporary suspension, permanent
          termination, and/or legal action depending on severity. Questions
          about these terms? Contact our legal team at{" "}
          <a
            href="mailto:legal@agoraai.tech"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            legal@agoraai.tech
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
