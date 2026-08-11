import LegalLayout, { LegalSection, LegalList } from "@/components/legal/LegalLayout";
import Link from "next/link";

const sections = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "data-processing", label: "Data Processing" },
  { id: "information-sharing", label: "Information Sharing" },
  { id: "data-security", label: "Data Security & Retention" },
  { id: "your-rights", label: "Your Rights & Controls" },
  { id: "compliance", label: "Compliance & Regulatory" },
  { id: "abuse-prevention", label: "Platform Abuse Prevention" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "ethics", label: "Ethics & Responsible Use" },
];

export default function PrivacyClient() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="September 15, 2025"
      intro="This Privacy Policy explains how AGORA AI LLC collects, uses, discloses, and protects your personal data when you access our outbound sales platform, including our website, mobile applications, and related services. As a platform connecting businesses with gig agents through coaching technology, we process data for multiple user types: business clients uploading leads, freelance agents making calls, and prospects receiving outbound communications."
      sections={sections}
    >
      <LegalSection id="information-we-collect" title="Information We Collect">
        <p>
          AGORA collects information in three broad categories depending on your
          relationship with the platform. The type of data we collect is
          proportionate to the services you use and the role you hold on the
          platform.
        </p>

        <p className="font-semibold text-white/80 mt-4">Business Client Data</p>
        <LegalList
          items={[
            "Account information and billing details, including company name, billing address, and payment method",
            "Lead data and campaign configurations uploaded by your organization",
            "Call recordings and campaign analytics generated through platform activity",
            "CRM integration credentials and API usage data",
          ]}
        />

        <p className="font-semibold text-white/80 mt-4">Gig Agent Data</p>
        <LegalList
          items={[
            "Performance metrics and earnings history tied to completed campaigns",
            "Training progress and skill assessments completed on the platform",
            "Call quality scores and coaching interaction data",
            "Schedule preferences, availability windows, and capacity settings",
          ]}
        />

        <p className="font-semibold text-white/80 mt-4">Platform Training Data</p>
        <LegalList
          items={[
            "Anonymized call transcripts and outcome labels (booking rate, conversion, objection type)",
            "Performance patterns and success metrics derived from platform activity",
            "Script effectiveness and optimization signal data",
            "Coaching interactions and agent improvement trajectories",
          ]}
        />
      </LegalSection>

      <LegalSection id="how-we-use" title="How We Use Your Information">
        <p>
          We use the information we collect to operate, improve, and protect the
          AGORA platform and to deliver the services described in our Terms &
          Conditions. Specifically, we use your data to:
        </p>
        <LegalList
          items={[
            "Provision and maintain your account and associated campaigns",
            "Match business clients with qualified agents based on campaign requirements",
            "Deliver coaching and quality scoring to improve agent performance",
            "Generate analytics and reporting dashboards for business clients",
            "Detect, investigate, and prevent fraudulent, abusive, or illegal activity",
            "Comply with applicable legal obligations and respond to lawful requests",
            "Send operational communications, including account and campaign updates",
            "Improve our platform using anonymized, aggregated training data",
          ]}
        />
        <p className="mt-4">
          We do not sell your personal information to third parties. We do not
          use personal data for advertising purposes unrelated to the AGORA
          platform.
        </p>
      </LegalSection>

      <LegalSection id="data-processing" title="Data Processing and Training">
        <p>
          AGORA uses automated systems to power call coaching, script
          optimization, objection analysis, and performance scoring. These
          systems are trained on data derived from platform activity, and their
          outputs influence how agents are matched, coached, and compensated.
        </p>
        <p>
          Before using any call data for training purposes, we apply
          anonymization and aggregation processes to remove personally
          identifiable information from underlying records. Training data is
          stored separately from operational data and subject to additional
          access controls.
        </p>
        <p>
          Business clients may request that their campaign data be excluded from
          platform training by contacting our privacy team. This election does not
          affect access to platform services or reporting.
        </p>
      </LegalSection>

      <LegalSection id="information-sharing" title="Information Sharing and Disclosure">
        <p>
          AGORA does not sell, rent, or trade your personal information. We may
          share data in the following limited circumstances:
        </p>
        <LegalList
          items={[
            "Service providers: Infrastructure, hosting, and analytics vendors who process data on our behalf under confidentiality agreements",
            "Business clients and agents: Performance data and campaign results are shared between matched parties to fulfill the platform's core function",
            "Legal compliance: When required by law, court order, or to protect the rights, property, or safety of AGORA, our users, or the public",
            "Business transfers: In the event of a merger, acquisition, or asset sale, subject to standard confidentiality protections",
          ]}
        />
      </LegalSection>

      <LegalSection id="data-security" title="Data Security and Retention">
        <p>
          We implement industry-standard technical and organizational controls
          to protect the data stored on our platform. This includes encryption
          of data in transit (TLS 1.2+) and at rest (AES-256), role-based
          access controls, and regular security reviews.
        </p>
        <p>
          Call recordings are retained for a default period of 90 days from
          campaign end. Business clients may request extended retention for
          compliance or audit purposes. Personal data is deleted or anonymized
          upon account termination, subject to any applicable legal hold
          requirements.
        </p>
        <p>
          Despite our controls, no system is completely secure. We encourage
          users to report suspected security incidents promptly (see our{" "}
          <Link
            href="/security-policy"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            Security Policy
          </Link>
          ).
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="Your Rights and Controls">
        <p>
          Depending on your jurisdiction, you may have rights regarding your
          personal data, including the right to access, correct, delete, or
          restrict processing of your information. You may also have the right
          to data portability or to object to certain processing activities.
        </p>
        <LegalList
          items={[
            "Access: Request a copy of the personal data we hold about you",
            "Correction: Update inaccurate or incomplete data in your account settings",
            "Deletion: Request removal of your personal data, subject to legal retention obligations",
            "Portability: Receive your data in a structured, machine-readable format",
            "Opt-out: Withdraw consent for platform training use of your data at any time",
          ]}
        />
        <p className="mt-4">
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:privacy@agoraai.tech"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            privacy@agoraai.tech
          </a>
          . We will respond to verified requests within 30 days.
        </p>
      </LegalSection>

      <LegalSection id="compliance" title="Compliance and Regulatory Framework">
        <p>
          AGORA's platform involves outbound calling activities, which are
          subject to a range of telemarketing and consumer protection
          regulations, including the Telephone Consumer Protection Act (TCPA),
          the Telemarketing Sales Rule (TSR), and state-level Do Not Call
          statutes. Business clients are responsible for ensuring their lead
          data and campaign configurations comply with applicable law.
        </p>
        <p>
          For users in the European Economic Area, our data processing
          activities are governed by the General Data Protection Regulation
          (GDPR). For California residents, your rights under the California
          Consumer Privacy Act (CCPA) are described in the "Your Rights and
          Controls" section above.
        </p>
      </LegalSection>

      <LegalSection id="abuse-prevention" title="Platform Abuse Prevention">
        <p>
          We monitor platform activity for signs of abuse, fraud, and policy
          violations. Detected abuse may result in suspension or termination of
          access. For a full description of prohibited activities and
          enforcement procedures, see our{" "}
          <Link
            href="/abuse-policy"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            Abuse Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="Cookies and Tracking Technologies">
        <p>
          Our website uses cookies and similar tracking technologies for session
          management, analytics, and performance monitoring. We use
          first-party analytics tools and do not deploy third-party advertising
          trackers on our platform.
        </p>
        <p>
          You can control cookie preferences through your browser settings.
          Disabling certain cookies may affect the functionality of the AGORA
          platform.
        </p>
      </LegalSection>

      <LegalSection
        id="international-transfers"
        title="International Data Transfers and Storage"
      >
        <p>
          AGORA is headquartered in the United States, and data collected
          through the platform is primarily stored and processed in the U.S. If
          you are accessing the platform from outside the United States, you
          acknowledge that your data may be transferred to and processed in the
          U.S. under the legal frameworks applicable at the time of transfer.
        </p>
      </LegalSection>

      <LegalSection id="ethics" title="Ethics and Responsible Use">
        <p>
          Our privacy practices are guided by a commitment to transparency,
          fairness, and respect for human autonomy. We build our platform to
          give people meaningful control over how their data is used.
        </p>

        <p className="font-semibold text-white/80 mt-4">Our Principles</p>
        <LegalList
          items={[
            "Human oversight in all automated decisions. No consequential action is taken without a person in the loop.",
            "Bias detection and mitigation systems applied to coaching models and agent scoring",
            "Transparent scoring processes. Agents can review their performance scores and understand how they were calculated.",
            "Regular auditing and continuous improvement of model fairness and accuracy",
          ]}
        />

        <p className="font-semibold text-white/80 mt-4">Data Protection Commitments</p>
        <LegalList
          items={[
            "Anonymization of all training data before platform ingestion",
            "Minimal data collection. We collect only what is necessary for platform function.",
            "User control over data processing, including opt-out rights for training use",
            "Secure, encrypted data storage with access limited to authorized personnel",
          ]}
        />

        <p className="mt-4">
          Questions about this Privacy Policy or your data rights? Contact our
          privacy team.
        </p>
        <div className="mt-4">
          <a
            href="mailto:privacy@agoraai.tech"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6321EE]/15 border border-[#6321EE]/30 text-[#7FFFD4] text-sm font-medium hover:bg-[#6321EE]/25 transition-all duration-200"
          >
            Email Privacy Team
          </a>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
