import LegalLayout, { LegalSection, LegalList } from "@/components/legal/LegalLayout";

const sections = [
  { id: "purpose", label: "Purpose" },
  { id: "prohibited-business", label: "Prohibited Business Activities" },
  { id: "prohibited-agent", label: "Prohibited Agent Activities" },
  { id: "investigation", label: "How Reports Are Investigated" },
  { id: "enforcement", label: "Consequences & Enforcement" },
  { id: "reporting", label: "How to Report Abuse" },
];

export default function AbusePolicyClient() {
  return (
    <LegalLayout
      title="Abuse Policy"
      lastUpdated="September 15, 2025"
      intro="AGORA is a two-sided marketplace connecting companies with sales agents. The integrity of that marketplace depends on both sides operating honestly, within the law, and within the rules of the platform. This Abuse Policy defines what constitutes abusive behavior, how we investigate it, and what happens when violations are confirmed."
      sections={sections}
    >
      <LegalSection id="purpose" title="Purpose">
        <p>
          This policy exists to protect all participants on the AGORA platform —
          business clients, agents, and the prospects they contact, from
          behavior that would undermine the fairness, safety, or legal
          compliance of our marketplace. Abuse can come from either side of the
          platform, and we take reports from both seriously.
        </p>
        <p>
          This policy should be read alongside our{" "}
          <a
            href="/terms-conditions"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            Privacy Policy
          </a>
          , which set out the legal framework governing your use of the platform.
        </p>
      </LegalSection>

      <LegalSection id="prohibited-business" title="Prohibited Business Activities">
        <p>
          Business clients who engage in any of the following behaviors are in
          violation of this policy and may have their accounts suspended or
          terminated:
        </p>
        <LegalList
          items={[
            "Uploading fake, invalid, or non-consented lead data to any campaign on the AGORA platform",
            "Directing agents to conduct activities that violate federal, state, or local law, including TCPA, TSR, or Do Not Call regulations",
            "Manipulating performance metrics, call outcomes, or reporting data to game platform rankings or influence agent compensation",
            "Attempting to circumvent payment requirements, dispute legitimate charges in bad faith, or withhold payment for completed work",
            "Using the platform to contact prospects for purposes unrelated to the campaign scope agreed upon at onboarding",
            "Misrepresenting your company, product, or industry during the signup or campaign configuration process",
          ]}
        />
      </LegalSection>

      <LegalSection id="prohibited-agent" title="Prohibited Agent Activities">
        <p>
          Agents who engage in any of the following behaviors are in violation
          of this policy and may face immediate suspension or permanent removal
          from the AGORA network:
        </p>
        <LegalList
          items={[
            "Making calls or conducting outreach outside of authorized campaign windows assigned by AGORA",
            "Violating campaign-specific script guidelines, compliance disclosures, or quality requirements",
            "Misrepresenting themselves, their identity, credentials, or affiliation to prospects, clients, or AGORA",
            "Using platform access, lead data, campaign information, or call recordings for personal benefit outside the scope of assigned work",
            "Submitting false call logs, outcome reports, or activity data to inflate performance metrics or earnings",
            "Sharing platform access credentials, campaign data, or prospect information with unauthorized parties",
          ]}
        />
      </LegalSection>

      <LegalSection id="investigation" title="How Reports Are Investigated">
        <p>
          When AGORA receives a report of suspected abuse from a
          business client, an agent, a prospect, or an automated system flag,
          we take the following steps:
        </p>
        <LegalList
          items={[
            "Acknowledgment: We acknowledge receipt of the report within 2 business days",
            "Initial review: Our trust and safety team reviews the report and any available platform data",
            "Evidence gathering: We may pull call recordings, activity logs, campaign configurations, and communication records relevant to the report",
            "Interview: We may contact the reporting party and the subject of the report to gather additional context",
            "Determination: A decision is made based on available evidence, applying the standards in this policy",
            "Notification: Both parties are informed of the outcome, subject to confidentiality constraints",
          ]}
        />
        <p className="mt-4">
          We do not share the identity of a reporting party without their
          consent, except where required by law.
        </p>
      </LegalSection>

      <LegalSection id="enforcement" title="Consequences & Enforcement">
        <p>
          Confirmed violations of this policy result in enforcement actions
          calibrated to the severity, intent, and impact of the violation:
        </p>
        <LegalList
          items={[
            "Warning: For first-time, lower-severity violations with no prior history, we may issue a formal written warning with remediation requirements",
            "Temporary suspension: For more serious violations or repeat offenses, we may suspend access to the platform pending investigation or remediation",
            "Permanent termination: For severe violations, including legal non-compliance, fraud, data misuse, and material misrepresentation, we will permanently terminate platform access without refund or compensation",
            "Legal action: For violations that expose AGORA or third parties to legal liability, we reserve the right to pursue civil or criminal remedies",
          ]}
        />
        <p className="mt-4">
          AGORA may share evidence of legal violations with regulators, law
          enforcement, or affected third parties as required by law or in
          protection of legitimate interests.
        </p>
      </LegalSection>

      <LegalSection id="reporting" title="How to Report Abuse">
        <p>
          If you believe someone on the AGORA platform, a business client,
          agent, or any other party who is engaged in abusive, fraudulent, or
          non-compliant behavior, please report it promptly.
        </p>
        <p>
          Reports can be submitted via email to{" "}
          <a
            href="mailto:abuse@agoraai.tech"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            abuse@agoraai.tech
          </a>
          . Please include as much detail as possible: the nature of the
          concern, dates and times of relevant events, and any supporting
          evidence you have.
        </p>
        <p>
          Prospects who believe they were contacted unlawfully or in violation
          of a Do Not Call registration may also submit reports to the above
          address. We take these reports seriously and will investigate promptly.
        </p>
        <div className="mt-6">
          <a
            href="mailto:abuse@agoraai.tech"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6321EE]/15 border border-[#6321EE]/30 text-[#7FFFD4] text-sm font-medium hover:bg-[#6321EE]/25 transition-all duration-200"
          >
            Report Abuse →
          </a>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
