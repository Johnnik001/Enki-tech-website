export const site = {
  name: 'Enki Tech',
  legalName: 'Enki Tech EOOD',
  url: 'https://enki-tech.eu',
  email: 'ytsvetov@hotmail.com',
  linkedin: 'https://www.linkedin.com/company/enki-tech-eood/',
  founderLinkedin: 'https://www.linkedin.com/in/eugene-tsvetov-93741a142/',
  location: 'Bulgaria · Belgium · Europe',
  tagline: 'Secure Microsoft Cloud, Digital Collaboration and automation-driven IT operations.',
  description:
    'Enki Tech is an independent European IT consulting company helping organizations modernize Microsoft 365, Azure, Digital Collaboration, identity, endpoint and IT operations environments.',
  founder: 'Evgeniy Tsvetov',
  founderRole: 'Founder & Lead Microsoft Cloud Consultant'
};

export const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    issued: 'June 2024',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/EvgeniyTsvetov-7841/F8C7B175333EAC8A'
  },
  {
    title: 'Azure Infrastructure as Code with ARM, Bicep, Terraform, and Pulumi',
    issuer: 'LinkedIn Learning',
    issued: 'December 2024',
    href: 'https://www.linkedin.com/learning/certificates/2db855f9e1303650b582355a56fc922cbcbe7b54c75b7b57df62b794a5b70292/'
  },
  {
    title: 'Introduction to Terraform on Azure',
    issuer: 'LinkedIn Learning',
    issued: 'November 2024',
    href: 'https://www.linkedin.com/learning/certificates/b558b91b219abfa925d8d69f61c1463bcff974d9463b5065a07206c8af7e2e47/'
  }
];

export const navigation = [
  { label: 'Services', href: '/services/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' }
];

export const services = [
  {
    slug: 'microsoft-365-digital-collaboration',
    title: 'Microsoft 365 & Digital Collaboration',
    metaTitle: 'Microsoft 365 & Digital Collaboration Consulting',
    metaDescription:
      'Senior Microsoft 365 consulting for Exchange Online, Teams, SharePoint, OneDrive, hybrid collaboration, migrations and service improvement across Europe.',
    summary:
      'Operational consulting for Exchange Online, Microsoft Teams, SharePoint, OneDrive and hybrid collaboration environments.',
    intro:
      'Improve the reliability, governance and day-to-day operation of Microsoft 365 collaboration services with senior support spanning cloud and hybrid environments.',
    bullets: ['Exchange and mail flow operations', 'Microsoft Teams governance', 'Hybrid collaboration support', 'Migration and transition assistance'],
    outcomes: ['More reliable collaboration services', 'Clearer governance and operational ownership', 'Lower support friction across hybrid environments', 'Safer migrations and service transitions'],
    capabilities: [
      {
        title: 'Exchange Online and hybrid mail',
        text: 'Troubleshooting, mail flow, coexistence, operational improvement and transition support across Exchange Online and hybrid Exchange environments.'
      },
      {
        title: 'Microsoft Teams operations',
        text: 'Governance, lifecycle considerations, service support and practical improvement of Teams-based collaboration.'
      },
      {
        title: 'SharePoint and OneDrive collaboration',
        text: 'Operational guidance for document collaboration, ownership, access patterns and supportability.'
      },
      {
        title: 'Migration and transition support',
        text: 'Senior technical capacity for discovery, planning, migration workstreams, validation, handover and post-transition stabilization.'
      }
    ],
    engagementSignals: ['Recurring Exchange Online or Teams incidents', 'Unclear ownership or governance across collaboration services', 'Hybrid dependencies that make changes difficult', 'A migration or transition that needs senior delivery support'],
    deliverables: ['Operational assessment and prioritized findings', 'Remediation or migration roadmap', 'Configuration and implementation support', 'Runbooks, handover notes and support documentation'],
    proof: {
      eyebrow: 'Relevant experience',
      title: 'L2/L3 collaboration operations',
      text: 'Senior operational responsibility across Exchange, Exchange Online and Microsoft Teams in security-conscious on-premise and cloud environments.'
    }
  },
  {
    slug: 'azure-hybrid-infrastructure',
    title: 'Azure & Hybrid Infrastructure',
    metaTitle: 'Azure & Hybrid Infrastructure Consulting',
    metaDescription:
      'Azure and hybrid infrastructure consulting for cloud operations, Windows Server, Active Directory, Entra Connect, reliability and service improvement.',
    summary:
      'Design, administration and operational improvement for Azure, Windows Server and hybrid infrastructure platforms.',
    intro:
      'Strengthen Azure and hybrid infrastructure operations with practical senior support across cloud administration, Windows platforms, identity dependencies and service reliability.',
    bullets: ['Azure administration', 'Hybrid identity', 'Active Directory and Entra Connect', 'Cloud operations and reliability'],
    outcomes: ['More dependable cloud and hybrid operations', 'Better visibility of technical dependencies', 'Clearer operational standards and ownership', 'Reduced risk during infrastructure change'],
    capabilities: [
      {
        title: 'Azure administration and operations',
        text: 'Operational support for Azure resources, access, monitoring, configuration review and recurring administration.'
      },
      {
        title: 'Windows Server and hybrid platforms',
        text: 'Support for infrastructure that spans Azure, Windows Server and on-premise services with interconnected operational dependencies.'
      },
      {
        title: 'Active Directory and Entra Connect',
        text: 'Review and troubleshooting of directory synchronization, hybrid identity flows and supporting infrastructure.'
      },
      {
        title: 'Reliability and service improvement',
        text: 'Assessment of operational gaps, monitoring, documentation, recurring incidents and improvement opportunities.'
      }
    ],
    engagementSignals: ['Recurring cloud or hybrid infrastructure incidents', 'Limited documentation of dependencies and ownership', 'Identity synchronization or connectivity concerns', 'A transition that needs stronger operational readiness'],
    deliverables: ['Infrastructure and operations assessment', 'Risk and dependency overview', 'Prioritized reliability improvement plan', 'Implementation support and operating documentation'],
    proof: {
      eyebrow: 'Operating model',
      title: 'Cloud expertise grounded in operations',
      text: 'The focus is not only architecture: recommendations are shaped around supportability, documentation, escalation paths and the realities of day-to-day service ownership.'
    }
  },
  {
    slug: 'identity-endpoint-security',
    title: 'Identity, Endpoint & Security',
    metaTitle: 'Entra ID, Intune & Endpoint Security Consulting',
    metaDescription:
      'Practical Entra ID, Conditional Access, Intune, Windows 365 and Microsoft security consulting for secure identity and endpoint operations.',
    summary:
      'Practical implementation support for Entra ID, Conditional Access, Intune, Windows 365 Cloud PC and security baselines.',
    intro:
      'Build more secure and manageable identity and endpoint services with implementation-focused support across Entra ID, Intune, Windows 365 and Microsoft security controls.',
    bullets: ['Entra ID and Conditional Access', 'Intune endpoint management', 'Windows 365 Cloud PC', 'Microsoft Defender alignment'],
    outcomes: ['Stronger identity and access controls', 'More consistent endpoint management', 'Better operational readiness for Cloud PC environments', 'Security improvements that remain supportable'],
    capabilities: [
      {
        title: 'Entra ID and Conditional Access',
        text: 'Policy review, implementation support, access-control alignment and operational consideration of identity risks and exceptions.'
      },
      {
        title: 'Microsoft Intune',
        text: 'Endpoint enrollment, configuration, compliance, application deployment and operational improvement for managed devices.'
      },
      {
        title: 'Windows 365 Cloud PC',
        text: 'Migration, provisioning, operational support and service improvement for enterprise Cloud PC environments.'
      },
      {
        title: 'Security baseline alignment',
        text: 'Practical alignment of endpoint and identity controls with Microsoft security capabilities and operational requirements.'
      }
    ],
    engagementSignals: ['Conditional Access policies have grown difficult to govern', 'Endpoint compliance or application delivery is inconsistent', 'Windows 365 requires migration or operational expertise', 'Security controls need implementation without disrupting operations'],
    deliverables: ['Identity and endpoint configuration review', 'Prioritized security and manageability recommendations', 'Policy or platform implementation support', 'Operational handover and support guidance'],
    proof: {
      eyebrow: 'Relevant experience',
      title: '12,000+ user Cloud PC migration',
      text: 'Technical leadership and senior delivery support for a large-scale transition from Citrix to Windows 365 Cloud PC across hybrid production and development environments.'
    }
  },
  {
    slug: 'automation-it-operations',
    title: 'Automation & IT Operations',
    metaTitle: 'PowerShell Automation & IT Operations Consulting',
    metaDescription:
      'PowerShell automation and IT operations consulting for provisioning, reporting, mailbox administration, compliance workflows and service improvement.',
    summary:
      'Automation-first service improvement for repetitive IT operations, reporting, provisioning and documentation workflows.',
    intro:
      'Reduce repetitive work and operational inconsistency with maintainable PowerShell automation, clearer workflows and documentation designed for real support teams.',
    bullets: ['PowerShell automation', 'Operational reporting', 'Provisioning workflows', 'ITIL-aligned service improvement'],
    outcomes: ['Less repetitive manual administration', 'Faster and more consistent execution', 'Improved traceability and audit readiness', 'Automation that support teams can operate and maintain'],
    capabilities: [
      {
        title: 'PowerShell automation',
        text: 'Maintainable scripts and tooling for Microsoft Cloud, identity, mailbox, endpoint and infrastructure administration.'
      },
      {
        title: 'Provisioning workflows',
        text: 'Standardized account, access, mailbox and service provisioning with validation and documented operating steps.'
      },
      {
        title: 'Operational reporting',
        text: 'Repeatable data collection and reporting for service health, configuration, compliance and management visibility.'
      },
      {
        title: 'Service improvement',
        text: 'Identification of recurring work, handoff gaps and opportunities to improve ITIL-aligned operational processes.'
      }
    ],
    engagementSignals: ['Administrators repeat the same manual work every week', 'Provisioning results vary between operators', 'Reporting requires extensive manual consolidation', 'Existing scripts are undocumented or difficult to support'],
    deliverables: ['Automation opportunity assessment', 'Prioritized automation backlog', 'Implemented and tested PowerShell workflows', 'Documentation, error handling and operational handover'],
    proof: {
      eyebrow: 'Relevant experience',
      title: 'Provisioning, mailbox, backup and compliance automation',
      text: 'Hands-on automation of recurring administrative workflows to reduce manual workload, improve consistency and strengthen audit readiness.'
    }
  },
  {
    slug: 'ai-enhanced-it-operations',
    title: 'AI-enhanced IT Operations',
    metaTitle: 'AI-enhanced IT Operations Consulting',
    metaDescription:
      'Practical AI consulting for IT documentation, incident summaries, knowledge workflows and internal assistants with human review and operational governance.',
    summary:
      'Use AI where it creates measurable operational leverage: documentation, incident summaries, knowledge base workflows and proposal support.',
    intro:
      'Apply AI to focused operational workflows where it can improve speed and consistency without removing human review, security controls or accountable service ownership.',
    bullets: ['AI-assisted documentation', 'Incident summary automation', 'Knowledge base support', 'Internal IT assistant concepts'],
    outcomes: ['Faster creation of useful operational documentation', 'More consistent incident and service summaries', 'Better reuse of existing technical knowledge', 'Controlled experimentation with clear human oversight'],
    capabilities: [
      {
        title: 'AI-assisted documentation',
        text: 'Structured workflows for drafting runbooks, technical summaries, handover notes and repeatable service documentation.'
      },
      {
        title: 'Incident and change summaries',
        text: 'Assisted transformation of operational inputs into concise summaries for review, communication and knowledge capture.'
      },
      {
        title: 'Knowledge base workflows',
        text: 'Improved discovery, drafting and maintenance of support knowledge while retaining validation by responsible specialists.'
      },
      {
        title: 'Internal assistant concepts',
        text: 'Focused prototypes and operating concepts for assistants grounded in approved internal IT information and defined use cases.'
      }
    ],
    engagementSignals: ['Operational knowledge is scattered across tickets and documents', 'Incident summaries take too long to prepare', 'Teams want to test AI without exposing sensitive information', 'An AI idea needs a measurable use case and governance boundaries'],
    deliverables: ['Use-case and data-flow assessment', 'Prioritized pilot recommendation', 'Workflow or prototype implementation', 'Human-review controls and operating guidance'],
    proof: {
      eyebrow: 'Delivery principle',
      title: 'AI where it creates operational leverage',
      text: 'The approach starts with a specific workflow, measurable value and clear review responsibility—not with AI adoption for its own sake.'
    }
  }
];

export const experience = [
  {
    slug: 'windows-365-cloud-pc-migration',
    label: 'Enterprise transformation',
    proof: '12,000+ users',
    title: 'Large-scale Windows 365 Cloud PC migration',
    metaTitle: 'Windows 365 Cloud PC Migration Case Study',
    metaDescription:
      'A sanitized case study of technical leadership for a 12,000+ user migration from Citrix to Windows 365 Cloud PC across hybrid environments.',
    detail:
      'Technical leadership in a migration from Citrix to Windows 365 Cloud PC for 12,000+ users across hybrid production and development environments.',
    context:
      'The programme involved a large business-critical user population and a transition between established virtual desktop services and a modern Cloud PC platform. Delivery had to account for hybrid infrastructure, production and development use cases, operational readiness and multiple stakeholder groups.',
    challenge: 'Move a large, business-critical user base to a modern Cloud PC platform while maintaining operational control across hybrid environments.',
    role: 'Technical leadership and senior delivery support across migration, operations and stakeholder-facing workstreams.',
    approach: [
      {
        title: 'Technical discovery and dependencies',
        text: 'Support the identification of platform, identity, endpoint and operational dependencies that could affect migration readiness.'
      },
      {
        title: 'Migration workstream leadership',
        text: 'Provide senior technical direction across transition planning, issue resolution, validation and delivery coordination.'
      },
      {
        title: 'Operational readiness',
        text: 'Keep supportability, ownership, escalation paths and post-migration operations visible throughout the programme.'
      },
      {
        title: 'Stakeholder communication',
        text: 'Translate technical risks, decisions and progress into clear input for delivery teams and business stakeholders.'
      }
    ],
    impact: ['Improved endpoint manageability', 'Greater operational flexibility', 'Enhanced user experience', 'Cost-optimization support'],
    relatedServices: ['identity-endpoint-security', 'azure-hybrid-infrastructure'],
    keywords: ['Windows 365', 'Cloud PC migration', 'Citrix migration', 'Microsoft Intune', 'hybrid infrastructure']
  },
  {
    slug: 'secure-digital-collaboration-operations',
    label: 'Secure collaboration',
    proof: 'L2/L3 operations',
    title: 'Digital collaboration operations in secure environments',
    metaTitle: 'Secure Microsoft 365 Collaboration Operations Case Study',
    metaDescription:
      'A sanitized case study of L2/L3 operational responsibility across Exchange, Exchange Online and Microsoft Teams in secure hybrid environments.',
    detail:
      'Support for collaboration services across on-premise and cloud environments, including Exchange, Teams and Exchange Online, with L2/L3 operational responsibility.',
    context:
      'Collaboration services operated across cloud and on-premise platforms with demanding security and reliability expectations. The work required senior troubleshooting, disciplined incident ownership and practical input into risk and service-improvement decisions.',
    challenge: 'Keep collaboration services dependable and supportable in a security-conscious environment with high operational expectations.',
    role: 'L2/L3 operational responsibility, troubleshooting, risk-assessment input and subject-matter expertise.',
    approach: [
      {
        title: 'L2/L3 incident ownership',
        text: 'Investigate complex service issues, coordinate resolution and provide clear technical escalation when broader expertise is required.'
      },
      {
        title: 'Hybrid service troubleshooting',
        text: 'Work across Exchange, Exchange Online, Microsoft Teams and their supporting identity and infrastructure dependencies.'
      },
      {
        title: 'Risk and change input',
        text: 'Contribute operational evidence and subject-matter expertise to risk assessment, planned change and service decisions.'
      },
      {
        title: 'Operational improvement',
        text: 'Identify recurring friction, documentation gaps and support practices that can strengthen day-to-day service reliability.'
      }
    ],
    impact: ['Service reliability', 'Incident and request management', 'Risk assessment input', 'Security-related SME support'],
    relatedServices: ['microsoft-365-digital-collaboration', 'identity-endpoint-security'],
    keywords: ['Microsoft 365 operations', 'Exchange Online', 'Microsoft Teams', 'L2/L3 support', 'secure collaboration']
  },
  {
    slug: 'powershell-it-operations-automation',
    label: 'Automation',
    proof: 'Provisioning · mailbox · backup · compliance',
    title: 'PowerShell automation for IT operations',
    metaTitle: 'PowerShell IT Operations Automation Case Study',
    metaDescription:
      'A sanitized case study of PowerShell automation for provisioning, mailbox administration, backup routines and compliance reporting.',
    detail:
      'Automation of administrative and operational tasks including account provisioning, mailbox configuration, backup routines and compliance reporting.',
    context:
      'Recurring administration created avoidable manual effort and variation between operators. The opportunity was to standardize repeatable tasks while preserving validation, traceability, documentation and appropriate human oversight.',
    challenge: 'Reduce repeatable manual work without compromising consistency, traceability or audit readiness.',
    role: 'Automation design and implementation for operational teams and recurring service workflows.',
    approach: [
      {
        title: 'Workflow discovery',
        text: 'Identify repetitive tasks, decision points, inputs, exceptions and operational risks before selecting automation candidates.'
      },
      {
        title: 'PowerShell implementation',
        text: 'Build maintainable automation for provisioning, mailbox administration, backup workflows and compliance reporting.'
      },
      {
        title: 'Validation and traceability',
        text: 'Include predictable input checks, error handling and logging so operational teams can understand and support each workflow.'
      },
      {
        title: 'Documentation and handover',
        text: 'Provide operating guidance that makes automation usable beyond the original implementation and reduces single-person dependency.'
      }
    ],
    impact: ['Lower manual workload', 'Better consistency', 'Faster execution', 'Improved audit readiness'],
    relatedServices: ['automation-it-operations'],
    keywords: ['PowerShell automation', 'IT operations', 'provisioning automation', 'compliance reporting', 'mailbox automation']
  }
];

export const principles = [
  'Senior-level delivery, not generic support.',
  'Security, reliability and documentation by default.',
  'Automation where it creates measurable business value.',
  'Clear communication with technical and business stakeholders.',
  'Long-term partnership over short-term transactional delivery.'
];
