import LegalLayout, { LegalSection, LegalList } from "@/components/legal/LegalLayout";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "encryption", label: "Encryption" },
  { id: "access-controls", label: "Access Controls" },
  { id: "call-recording-storage", label: "Call Recording Storage" },
  { id: "infrastructure", label: "Infrastructure & Vendor Security" },
  { id: "incident-response", label: "Incident Response" },
  { id: "report-a-vulnerability", label: "Report a Security Concern" },
];

export default function SecurityPolicyClient() {
  return (
    <LegalLayout
      title="Security Policy"
      lastUpdated="September 15, 2025"
      intro="AGORA AI LLC takes the security of our platform, our clients' data, and the individuals whose information we process seriously. This page describes the technical and organizational controls we use to protect data, how we respond to security incidents, and how to report a concern."
      sections={sections}
    >
      <LegalSection id="overview" title="Overview">
        <p>
          AGORA is built on a security-first foundation. We follow SOC
          2-aligned practices for data protection, access control, and incident
          management. While we do not currently hold a formal SOC 2
          certification, our operational controls, logging practices, and vendor
          requirements are designed to meet or exceed those standards.
        </p>
        <p>
          We conduct regular internal security reviews and work with trusted
          infrastructure partners who maintain their own compliance
          certifications. Our security posture is an ongoing commitment, not a
          checkbox — we continuously review and improve controls as the platform
          evolves.
        </p>
      </LegalSection>

      <LegalSection id="encryption" title="Data Encryption">
        <p>
          All data transmitted between users, agents, and the AGORA platform is
          encrypted in transit using TLS 1.2 or higher. We enforce HTTPS across
          all platform endpoints and reject unencrypted connections.
        </p>
        <p>Data at rest is encrypted using AES-256 encryption. This includes:</p>
        <LegalList
          items={[
            "User account data, campaign configurations, and lead records stored in our databases",
            "Call recordings stored in cloud object storage",
            "AI training datasets and model artifacts",
            "Backup copies of all production data",
          ]}
        />
        <p className="mt-4">
          Encryption keys are managed through our cloud provider's key
          management services with role-based access and automatic rotation
          schedules.
        </p>
      </LegalSection>

      <LegalSection id="access-controls" title="Access Controls & Least Privilege">
        <p>
          Access to AGORA systems and customer data is governed by a
          least-privilege model. Employees and systems are granted the minimum
          access required to perform their function — not broad administrative
          access by default.
        </p>
        <LegalList
          items={[
            "Multi-factor authentication (MFA) is required for all internal systems and infrastructure access",
            "Access to production systems is restricted to engineering personnel with a documented need",
            "All privileged access is logged, reviewed, and subject to automated alerting on anomalous activity",
            "Access is revoked promptly upon employee offboarding",
            "Third-party vendors and integrations are reviewed for data access scope and are granted the minimum permissions necessary",
          ]}
        />
      </LegalSection>

      <LegalSection id="call-recording-storage" title="Call Recording Storage & Retention">
        <p>
          Call recordings processed through the AGORA platform are stored in
          encrypted cloud object storage with access restricted to authorized
          platform services and relevant business client accounts. Recordings
          are not accessible by agents after a call is completed unless
          explicitly shared by the business client for coaching purposes.
        </p>
        <p>
          Default retention for call recordings is 90 days from campaign end.
          Business clients may request extended retention for compliance,
          audit, or training purposes. All recordings are deleted on schedule
          unless a retention hold is in place.
        </p>
        <p>
          We do not share call recordings with third parties except as required
          by law, in response to lawful legal process, or as specified in a
          business client's service agreement.
        </p>
      </LegalSection>

      <LegalSection id="infrastructure" title="Infrastructure & Vendor Security Posture">
        <p>
          AGORA's infrastructure runs on major cloud providers (including Google
          Cloud Platform and AWS) that maintain their own rigorous security
          certifications, including SOC 2 Type II, ISO 27001, and FedRAMP. We
          benefit from their physical data center security, network isolation,
          and infrastructure redundancy.
        </p>
        <p>
          We regularly review the security posture of third-party vendors with
          access to platform data. Vendors are evaluated against criteria
          including data handling practices, encryption standards, incident
          response procedures, and regulatory compliance posture.
        </p>
        <p>
          Our platform undergoes routine dependency scanning and vulnerability
          assessment as part of our development workflow. Critical
          vulnerabilities are addressed on a priority basis, with patches
          deployed within defined SLA windows.
        </p>
      </LegalSection>

      <LegalSection id="incident-response" title="Incident Response">
        <p>
          AGORA maintains an incident response plan that governs how we detect,
          contain, investigate, and communicate security events. Our process
          follows these phases:
        </p>
        <LegalList
          items={[
            "Detection & triage: Automated monitoring and alerting systems flag anomalous activity; our on-call team triages alerts 24/7",
            "Containment: Affected systems or accounts are isolated or suspended to prevent further impact while investigation is underway",
            "Investigation: We gather logs, identify root cause, and assess the scope of affected data",
            "Notification: Affected users and clients are notified in accordance with applicable breach notification laws — typically within 72 hours of a confirmed breach",
            "Remediation: Root cause is addressed, controls are updated, and a post-incident review is conducted",
          ]}
        />
        <p className="mt-4">
          For breaches involving personal data subject to GDPR, we comply with
          Article 33 notification requirements. For U.S.-based clients, we
          follow applicable state breach notification statutes.
        </p>
      </LegalSection>

      <LegalSection id="report-a-vulnerability" title="Report a Security Concern">
        <p>
          If you believe you have discovered a security vulnerability, data
          exposure, or other security concern related to the AGORA platform,
          please report it to us promptly. We take all reports seriously and
          will investigate every credible submission.
        </p>
        <p>
          Please do not publicly disclose a vulnerability before giving us a
          reasonable opportunity to investigate and remediate. We commit to
          acknowledging receipt of your report within 2 business days and
          providing a status update within 10 business days.
        </p>
        <p>
          Security concerns can be reported to{" "}
          <a
            href="mailto:security@agoraai.tech"
            className="text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
          >
            security@agoraai.tech
          </a>
          . For sensitive disclosures, we can arrange encrypted communication
          upon request.
        </p>
        <div className="mt-6">
          <a
            href="mailto:security@agoraai.tech"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6321EE]/15 border border-[#6321EE]/30 text-[#7FFFD4] text-sm font-medium hover:bg-[#6321EE]/25 transition-all duration-200"
          >
            Report a Security Issue →
          </a>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
