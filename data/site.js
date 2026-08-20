export const site = {
  name: 'Enki Tech',
  legalName: 'Enki Tech EOOD',
  url: 'https://enki-tech.eu',
  email: 'ytsvetov@hotmail.com',
  linkedin: 'https://www.linkedin.com/company/enki-tech-eood/',
  founderLinkedin: 'https://www.linkedin.com/in/eugene-tsvetov-93741a142/',
  location: 'Bulgaria · Belgium · Europe',
  tagline: 'Secure Microsoft Cloud access, privileged identity, continuous governance and automation-driven operations.',
  description:
    'Enki Tech provides secure Microsoft Cloud assessments, privileged identity review, remediation, continuous governance and senior operational delivery across Europe.',
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
  { label: 'Engagements', href: '/engagements/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' }
];

export const engagements = [
  {
    id: 'assessment',
    slug: 'assessment-improvement-plan',
    label: 'Assess and prioritize',
    title: 'Microsoft Cloud assessment & improvement plan',
    metaTitle: 'Microsoft Cloud Assessment & Improvement Plan',
    metaDescription:
      'A defined Microsoft Cloud assessment engagement that turns operational issues, technical risk and unclear ownership into prioritized findings and an actionable improvement plan.',
    intro:
      'Create a shared, evidence-based view of the current Microsoft Cloud environment before committing budget and delivery capacity to remediation or transformation.',
    bestFor:
      'An environment with recurring incidents, unclear ownership, inconsistent controls or limited documentation.',
    result:
      'A clear view of operational risk, immediate priorities and a practical roadmap for improvement.',
    suitableFor: [
      'IT leaders who need an independent view of recurring operational friction',
      'Teams preparing a Microsoft 365, Azure, identity or endpoint improvement programme',
      'Organizations that need to clarify ownership, dependencies and technical priorities',
      'Partners that need senior discovery and planning capacity before delivery'
    ],
    deliverables: [
      'Focused discovery and stakeholder input',
      'Configuration, operations and dependency review',
      'Prioritized findings and recommended actions',
      'Executive summary and technical improvement plan'
    ],
    process: [
      {
        title: 'Confirm the decision to support',
        text: 'Agree the environment, business concern, stakeholders, available evidence and the decisions the assessment must enable.'
      },
      {
        title: 'Review the current state',
        text: 'Examine relevant configuration, operational practices, dependencies, documentation and recurring service issues.'
      },
      {
        title: 'Prioritize findings',
        text: 'Separate immediate risks, structural improvements and longer-term opportunities by impact, urgency and delivery dependency.'
      },
      {
        title: 'Present the improvement plan',
        text: 'Provide a clear management summary, technical findings and a sequenced roadmap with practical next steps.'
      }
    ],
    clientInputs: [
      'Access to relevant technical owners and service stakeholders',
      'Existing diagrams, procedures, incident themes and configuration evidence',
      'Known constraints, planned changes and target outcomes',
      'A responsible contact for scope decisions and findings review'
    ],
    relatedServices: ['microsoft-cloud-audit', 'secure-cloud-access-privileged-identity', 'continuous-secure-cloud-governance', 'microsoft-365-digital-collaboration', 'azure-hybrid-infrastructure', 'identity-endpoint-security'],
    format: 'Defined assessment',
    contactEngagement: 'Assessment or audit',
    href: '/engagements/assessment-improvement-plan/'
  },
  {
    id: 'project-delivery',
    slug: 'project-migration-remediation',
    label: 'Deliver a defined change',
    title: 'Project, migration or remediation delivery',
    metaTitle: 'Microsoft Cloud Project, Migration & Remediation Delivery',
    metaDescription:
      'Senior Microsoft Cloud delivery for migrations, remediation and defined technical workstreams, including planning, implementation, validation, documentation and handover.',
    intro:
      'Move a defined Microsoft Cloud workstream from scope to a controlled outcome with senior technical ownership, clear dependencies and practical operational handover.',
    bestFor:
      'A Microsoft 365, Azure, identity, endpoint or collaboration initiative that needs senior technical ownership.',
    result:
      'A delivered workstream with controlled implementation, validation, documentation and handover.',
    suitableFor: [
      'A migration or transition with complex Microsoft platform dependencies',
      'A remediation backlog that needs experienced technical ownership',
      'An internal delivery team that needs senior implementation capacity',
      'A partner that needs a dependable specialist for a defined workstream'
    ],
    deliverables: [
      'Scope, dependencies and delivery plan',
      'Hands-on implementation or migration support',
      'Technical validation and risk management',
      'Runbooks, handover notes and next-step backlog'
    ],
    process: [
      {
        title: 'Define the workstream',
        text: 'Confirm scope, target result, responsibilities, dependencies, acceptance criteria and delivery constraints.'
      },
      {
        title: 'Prepare controlled delivery',
        text: 'Build the implementation plan, identify risks, confirm prerequisites and align technical and stakeholder communication.'
      },
      {
        title: 'Implement and validate',
        text: 'Deliver the agreed change with evidence, issue management, validation and clear progress communication.'
      },
      {
        title: 'Handover and stabilize',
        text: 'Complete documentation, knowledge transfer, outstanding-risk review and a practical post-delivery backlog.'
      }
    ],
    clientInputs: [
      'A named business or technical owner for the workstream',
      'Access to relevant platforms, documentation and delivery teams',
      'Defined change, security and approval processes',
      'Availability for decisions, validation and acceptance'
    ],
    relatedServices: ['secure-cloud-access-privileged-identity', 'continuous-secure-cloud-governance', 'microsoft-365-digital-collaboration', 'azure-hybrid-infrastructure', 'identity-endpoint-security', 'automation-it-operations'],
    format: 'Project or workstream',
    contactEngagement: 'Direct project',
    href: '/engagements/project-migration-remediation/'
  },
  {
    id: 'operational-support',
    slug: 'l2-l3-operational-support',
    label: 'Stabilize and improve',
    title: 'L2/L3 operational support & service improvement',
    metaTitle: 'Microsoft Cloud L2/L3 Operational Support',
    metaDescription:
      'Senior L2/L3 Microsoft Cloud support for complex incidents, changes, recurring problems, service improvement, documentation and knowledge transfer.',
    intro:
      'Add senior Microsoft expertise to complex operational work while improving the service practices, documentation and ownership that remain with the internal team.',
    bestFor:
      'An internal IT team that needs senior help with complex incidents, changes, backlog or service reliability.',
    result:
      'Faster resolution, clearer ownership and a more supportable Microsoft Cloud operating environment.',
    suitableFor: [
      'Internal teams facing recurring Microsoft Cloud incidents or escalations',
      'Services with an unresolved technical or operational backlog',
      'Teams that need senior change and risk input without a permanent hire',
      'Operations that require stronger documentation and knowledge transfer'
    ],
    deliverables: [
      'Complex troubleshooting and escalation ownership',
      'Change and risk input for Microsoft services',
      'Recurring problem and improvement backlog',
      'Operational documentation and knowledge transfer'
    ],
    process: [
      {
        title: 'Establish service context',
        text: 'Agree supported services, responsibilities, priorities, escalation interfaces, access and communication routines.'
      },
      {
        title: 'Address complex work',
        text: 'Investigate escalations, support planned change and work through the highest-value operational backlog.'
      },
      {
        title: 'Identify recurring causes',
        text: 'Convert incident evidence and operational friction into structured problem, documentation and improvement actions.'
      },
      {
        title: 'Review and transfer knowledge',
        text: 'Maintain visibility of work completed, unresolved risks, recommendations and knowledge transferred to the team.'
      }
    ],
    clientInputs: [
      'Defined service scope, escalation route and internal responsibilities',
      'Access to platforms, monitoring, tickets and existing documentation',
      'Named service owners and relevant engineering contacts',
      'A shared method for prioritization, change control and progress review'
    ],
    relatedServices: ['continuous-secure-cloud-governance', 'microsoft-365-digital-collaboration', 'azure-hybrid-infrastructure', 'identity-endpoint-security', 'automation-it-operations'],
    format: 'Recurring or retained capacity',
    contactEngagement: 'L2/L3 operational support',
    href: '/engagements/l2-l3-operational-support/'
  },
  {
    id: 'partner-delivery',
    slug: 'partner-delivery-subcontracting',
    label: 'Add delivery capacity',
    title: 'Partner delivery & subcontracting',
    metaTitle: 'Microsoft Cloud Partner Delivery & Subcontracting',
    metaDescription:
      'Flexible senior Microsoft Cloud subcontracting and partner delivery for consultancies, integrators and technology providers across Europe.',
    intro:
      'Add senior Microsoft capability to a partner-led engagement with clear delivery interfaces, discreet client communication and documentation by default.',
    bestFor:
      'A consultancy, integrator or technology partner with a specialist gap, peak workload or complex escalation.',
    result:
      'Dependable senior Microsoft capability integrated into the partner’s delivery structure.',
    suitableFor: [
      'Consultancies that need specialist Microsoft delivery capacity',
      'Integrators covering a temporary workload or capability gap',
      'Partners that need a senior resource for a complex escalation',
      'Delivery teams requiring white-label or NDA-based technical contribution'
    ],
    deliverables: [
      'Defined role, scope and delivery interfaces',
      'Senior technical contribution under NDA',
      'Direct stakeholder and delivery-team communication',
      'Documentation and practical handover by default'
    ],
    process: [
      {
        title: 'Qualify fit and boundaries',
        text: 'Confirm capability need, client context, confidentiality, commercial route, responsibilities and partner ownership.'
      },
      {
        title: 'Agree delivery interfaces',
        text: 'Define who communicates with whom, working cadence, required outputs, escalation paths and acceptance expectations.'
      },
      {
        title: 'Integrate into delivery',
        text: 'Contribute senior technical work under the partner’s delivery model with disciplined communication and documentation.'
      },
      {
        title: 'Handover without friction',
        text: 'Transfer technical context, evidence, documentation and outstanding actions back into the partner or client team.'
      }
    ],
    clientInputs: [
      'Clear partner ownership of the commercial and client relationship',
      'Defined role, scope, confidentiality and communication expectations',
      'Access to the relevant delivery context and technical stakeholders',
      'A named contact for prioritization, escalation and acceptance'
    ],
    relatedServices: ['secure-cloud-access-privileged-identity', 'continuous-secure-cloud-governance', 'microsoft-365-digital-collaboration', 'azure-hybrid-infrastructure', 'identity-endpoint-security', 'automation-it-operations', 'ai-enhanced-it-operations'],
    format: 'Flexible European B2B engagement',
    contactEngagement: 'Partner delivery',
    href: '/engagements/partner-delivery-subcontracting/'
  }
];

export const services = [
  {
    slug: 'microsoft-cloud-audit',
    title: 'Microsoft Cloud Audit & Risk Review',
    metaTitle: 'Microsoft Cloud Audit & Risk Review',
    metaDescription:
      'Independent Microsoft Cloud audit covering configuration risk, operational readiness, identity and security controls, dependencies, documentation and prioritized remediation.',
    summary:
      'An evidence-based review of Microsoft Cloud configuration, operational risk, ownership and support readiness with prioritized remediation actions.',
    intro:
      'Gain an independent senior view of Microsoft Cloud risk and supportability across relevant Microsoft 365, Azure, identity, endpoint and collaboration services.',
    bullets: ['Configuration and control review', 'Operational readiness', 'Risk and dependency analysis', 'Prioritized remediation roadmap'],
    outcomes: [
      'Clear visibility of material technical and operational risks',
      'Priorities separated by urgency, impact and delivery dependency',
      'Better evidence for budget, remediation and governance decisions',
      'A practical roadmap that internal teams or partners can execute'
    ],
    capabilities: [
      {
        title: 'Configuration and control review',
        text: 'Targeted review of relevant Microsoft Cloud configuration, administrative controls, exceptions and operationally significant settings.'
      },
      {
        title: 'Identity and security risk',
        text: 'Assessment of identity dependencies, privileged access, Conditional Access, endpoint posture and control gaps within the agreed scope.'
      },
      {
        title: 'Operational readiness',
        text: 'Review of ownership, monitoring, incident patterns, change practices, documentation, escalation paths and support dependencies.'
      },
      {
        title: 'Risk-based remediation planning',
        text: 'Prioritized findings with business context, recommended actions, dependencies and a sequenced path from immediate risk reduction to structural improvement.'
      }
    ],
    engagementSignals: [
      'The environment has grown without a recent independent review',
      'Recurring incidents suggest deeper configuration or ownership problems',
      'A migration, acquisition or leadership change requires a reliable baseline',
      'Security or compliance stakeholders need evidence and a remediation plan'
    ],
    deliverables: [
      'Agreed audit scope and evidence request',
      'Risk register with severity, context and recommended action',
      'Executive summary for decision-makers',
      'Technical findings and prioritized remediation roadmap'
    ],
    modules: [
      {
        title: 'Secure Cloud Access & Privileged Identity',
        text: 'Map the paths through which administrators, users, external identities and workloads can reach critical cloud resources, then assess the controls and evidence around those paths.',
        deliverables: ['End-to-end trust-path map', 'Conditional Access and PIM findings', 'Privileged, workload and external identity review', 'Prioritized access-control remediation']
      },
      {
        title: 'Crypto Agility & PQC Readiness',
        text: 'Establish an initial inventory of cryptographic dependencies and identify where long-lived data, certificates, keys, signing or legacy algorithms require earlier transition planning.',
        deliverables: ['Cryptographic asset inventory', 'PKI, certificate and key dependencies', 'Crypto-agility and long-lived data exposure review', '12–36 month PQC readiness roadmap']
      }
    ],
    proof: {
      eyebrow: 'Audit principle',
      title: 'Actionable evidence, not a generic checklist',
      text: 'The review connects technical findings to operational impact, ownership and practical remediation so the output can support real delivery decisions.'
    }
  },
  {
    slug: 'secure-cloud-access-privileged-identity',
    title: 'Secure Cloud Access & Privileged Identity',
    metaTitle: 'Secure Cloud Access & Privileged Identity Assessment',
    metaDescription:
      'Map and assess user, administrator, external and workload access paths to critical Microsoft Cloud resources, including Conditional Access, PIM and evidence-based remediation.',
    summary:
      'An end-to-end assessment of how identities reach critical cloud resources, which controls govern each path and where exposure or missing evidence requires remediation.',
    intro:
      'Understand who and what can reach critical Microsoft Cloud resources, how privileged access is granted and whether the controls can be demonstrated with reliable evidence.',
    bullets: ['End-to-end trust-path mapping', 'Conditional Access and PIM review', 'Workload and external identities', 'Evidence-based remediation plan'],
    outcomes: [
      'A shared view of access paths to critical cloud resources',
      'Clear visibility of standing privilege, exceptions and control gaps',
      'Evidence that supports security, audit and management decisions',
      'A prioritized remediation plan shaped around operational impact'
    ],
    capabilities: [
      {
        title: 'Trust-path discovery',
        text: 'Trace the path from identity and device through authentication, Conditional Access, privilege elevation, workload access, data access and security logging.'
      },
      {
        title: 'Privileged identity review',
        text: 'Assess privileged roles, permanent assignments, PIM activation, emergency access, administrative separation and ownership of elevated access.'
      },
      {
        title: 'Workload and external access',
        text: 'Review service principals, managed identities, application permissions, guest access and other non-employee paths into the agreed cloud scope.'
      },
      {
        title: 'Control evidence and remediation',
        text: 'Connect each material risk to a technical control, validation evidence, responsible owner and sequenced remediation action.'
      }
    ],
    engagementSignals: [
      'Privileged assignments and exceptions have accumulated over time',
      'Conditional Access policies are difficult to explain or validate end to end',
      'Service principals, guests or workload identities lack clear ownership',
      'Security stakeholders need evidence rather than a configuration export'
    ],
    deliverables: [
      'Critical-resource and access-path scope',
      'Trust-path architecture and identity inventory',
      'Control and evidence matrix',
      'Risk-ranked remediation roadmap and management summary'
    ],
    proof: {
      eyebrow: 'Assessment method',
      title: 'Follow the complete path, not isolated settings',
      text: 'The assessment connects identity, device, authentication, privilege, workload, data and logging so control gaps can be understood in operational context.'
    }
  },
  {
    slug: 'continuous-secure-cloud-governance',
    title: 'Continuous Secure Cloud Governance',
    metaTitle: 'Continuous Secure Cloud Governance',
    metaDescription:
      'Recurring Microsoft Cloud governance for configuration drift, privileged access, control evidence and a prioritized remediation backlog without positioning as a full SOC.',
    summary:
      'A recurring governance service that checks whether agreed Microsoft Cloud security controls remain effective as identities, privileges, workloads and configurations change.',
    intro:
      'Move beyond the one-time security review with repeatable validation of cloud controls, privileged access, configuration drift and remediation progress.',
    bullets: ['Configuration drift review', 'Privileged-access governance', 'Monthly control evidence', 'Remediation backlog'],
    outcomes: [
      'Earlier visibility of control drift and unmanaged exceptions',
      'Stronger ownership of privileged access and remediation actions',
      'Consistent evidence for management and assurance conversations',
      'A practical recurring governance layer without claiming 24/7 SOC coverage'
    ],
    capabilities: [
      {
        title: 'Configuration drift validation',
        text: 'Repeat agreed tests for material Microsoft Cloud controls and identify changes, exceptions or missing evidence that require review.'
      },
      {
        title: 'Privileged-access governance',
        text: 'Review privileged assignments, PIM usage, stale access, emergency accounts and ownership of elevated permissions on a recurring basis.'
      },
      {
        title: 'Monthly evidence pack',
        text: 'Maintain concise evidence of control status, changes, open risk, decisions and remediation progress for technical and management stakeholders.'
      },
      {
        title: 'Remediation coordination',
        text: 'Translate failed checks and material drift into an owned, prioritized backlog that internal teams, Enki Tech or a delivery partner can execute.'
      }
    ],
    engagementSignals: [
      'A recent cloud or security project has ended without ongoing control ownership',
      'Privileged access and policy exceptions change faster than periodic audits',
      'Evidence is recreated manually whenever management or auditors ask for it',
      'The team needs governance and improvement without outsourcing a complete SOC'
    ],
    deliverables: [
      'Agreed control baseline and validation schedule',
      'Recurring drift and privileged-access review',
      'Monthly control evidence and risk summary',
      'Owned remediation backlog and governance meeting'
    ],
    proof: {
      eyebrow: 'Operating principle',
      title: 'Security is a maintained state, not a project milestone',
      text: 'The service focuses on repeatable control validation, accountable remediation and usable evidence as the environment changes over time.'
    }
  },
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

export const insights = [
  {
    slug: 'eu-defence-cyber-funding-delivery-partners',
    label: 'European cyber market',
    title: 'Defence funding is moving into delivery—what this means for secure cloud partners',
    metaTitle: 'EU Defence Cyber Funding & Secure Cloud Delivery Partners',
    metaDescription:
      'What SAFE funding and the NCIA Cybersecurity Dynamic Marketplace signal for secure cloud, privileged identity and assurance specialists entering partner supply chains.',
    datePublished: '2026-08-20',
    displayDate: '20 August 2026',
    intro:
      'European defence and cyber programmes are moving from policy into funded procurement. The realistic opportunity for a specialist consultancy is not to chase headline budgets directly, but to become a repeatable capability inside qualified delivery chains.',
    signal:
      'SAFE provides up to €150 billion in loans for joint defence procurement and explicitly includes cyber and critical-infrastructure protection. Separately, NCIA has launched a €500 million Cybersecurity Dynamic Marketplace whose first lot includes identity, endpoint, cloud security, detection and professional services.',
    sections: [
      {
        title: 'The capital signal is real—but the headline is not a cyber budget',
        paragraphs: [
          'The Council made SAFE assistance available to Belgium up to €8.34 billion and Bulgaria up to €3.26 billion, with pre-financing identified in the first wave. These amounts cover broad national defence investment plans; they must not be presented as money reserved for cloud security or as directly accessible funding for Enki Tech.',
          'The useful conclusion is narrower: cyber and critical-infrastructure protection are recognised procurement categories, and participating states are moving into multi-year implementation. That expands the delivery ecosystem in which specialised suppliers may be needed.'
        ]
      },
      {
        title: 'The likely entry route is through qualified delivery chains',
        paragraphs: [
          'The NCIA marketplace demonstrates the structure of the opportunity. More than 90 industry partners were selected for the first lot, and work is issued through individual task orders. A boutique consultancy outside such a framework should assume that its near-term route is through primes, systems integrators, cyber specialists and existing framework members—not a direct claim on the total envelope.'
        ],
        bullets: [
          'provide a narrow capability that a larger supplier can scope and reuse',
          'show delivery evidence, boundaries and handover outputs',
          'support NDA, partner-led and white-label delivery models',
          'avoid unsupported claims of accreditation, clearance or NATO affiliation'
        ]
      },
      {
        title: 'A credible specialist capability: privileged identity and secure cloud assurance',
        paragraphs: [
          'Identity, Credential and Access Management and Cloud Security are both named capability areas in the NCIA marketplace. This aligns with Enki Tech’s existing Microsoft Cloud experience without requiring a speculative new practice.',
          'The commercial unit should be a defined assurance package: trace privileged access to critical resources, identify threats and preventive controls, specify detective checks, collect evidence and maintain an owned remediation backlog.'
        ],
        bullets: [
          'high-assurance cloud access reference architecture',
          'control and evidence matrix',
          'privileged identity assessment methodology',
          'remediation and continuous-validation patterns',
          'partner-ready statement of work and handover structure'
        ]
      },
      {
        title: 'The strategic decision: build reusable IP before expanding the claim',
        paragraphs: [
          'Enki Tech can begin building a capability pack now because the underlying controls are applicable to regulated enterprises as well as defence supply chains. Market validation should come from partner conversations and paid assessments before investment in a larger defence-specific practice.',
          'The first public component is the High-Assurance Cloud Access Reference Architecture. It demonstrates the method while making clear that the pattern is not a certification, accreditation or claim of compliance for a specific environment.'
        ]
      }
    ],
    relatedService: 'secure-cloud-access-privileged-identity',
    relatedServiceLabel: 'Explore the Secure Cloud Access Assessment',
    resourceHref: '/resources/high-assurance-cloud-access-architecture/',
    resourceLabel: 'Open the reference architecture',
    sources: [
      {
        label: 'European Commission — SAFE programme, allocations and disbursements',
        href: 'https://defence-industry-space.ec.europa.eu/eu-defence-industry/safe-security-action-europe_en'
      },
      {
        label: 'Council of the EU — first wave of SAFE financial assistance',
        href: 'https://www.consilium.europa.eu/en/press/press-releases/2026/02/11/safe-council-clears-path-for-financial-assistance-to-eight-member-states-and-concluding-the-canada-agreement/'
      },
      {
        label: 'EUR-Lex — Council Regulation (EU) 2025/1106',
        href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32025R1106'
      },
      {
        label: 'NCIA — Cybersecurity Dynamic Marketplace',
        href: 'https://www.ncia.nato.int/newsroom/news/ncia-boosts-cyber-delivery-through-industry-marketplace'
      }
    ]
  },
  {
    slug: 'continuous-secure-cloud-governance',
    label: 'Secure cloud operations',
    title: 'Why secure cloud controls need continuous validation after the project ends',
    metaTitle: 'Continuous Secure Cloud Governance After Project Delivery',
    metaDescription:
      'Why Microsoft Cloud security controls require recurring validation as identities, privileges, workloads and configurations change after project handover.',
    datePublished: '2026-08-18',
    displayDate: '18 August 2026',
    intro:
      'A cloud project can deliver a secure baseline, but it cannot freeze the environment. Identities change, privileges accumulate, policies gain exceptions and workloads create new access paths.',
    signal:
      'Current secure-cloud programmes increasingly describe value as an operated outcome: the environment must remain secure, measurable and supportable over time—not only pass a handover review.',
    sections: [
      {
        title: 'The control gap appears after handover',
        paragraphs: [
          'Conditional Access, PIM, workload identities and security logging can all be correctly designed at launch and still drift as administrators respond to incidents, projects and business exceptions.',
          'The expensive problem is therefore not only implementing a control. It is maintaining ownership, validation evidence and a reliable path from a failed check to remediation.'
        ]
      },
      {
        title: 'A practical recurring governance layer',
        paragraphs: [
          'A focused governance service does not need to claim full SOC coverage. It can start with a small library of material controls and a disciplined monthly operating rhythm.'
        ],
        bullets: [
          'configuration-drift validation',
          'privileged-access and exception review',
          'monthly evidence and risk summary',
          'owned remediation backlog'
        ]
      },
      {
        title: 'The management question to ask',
        paragraphs: [
          'After the cloud or security project is complete, who is responsible for demonstrating each month that the original controls still work? If the answer depends on a future audit or an individual administrator, the operating model has a governance gap.'
        ]
      }
    ],
    relatedService: 'continuous-secure-cloud-governance',
    relatedServiceLabel: 'Explore Continuous Secure Cloud Governance',
    sources: [
      {
        label: 'NCIA — Operational Network Extension (ON-X)',
        href: 'https://www.ncia.nato.int/business/procurement/current-opportunities/provision--operation-and-continuous-evolution-of-the-operational-network-extension-onx'
      },
      {
        label: 'NCIA — Protected Business Network programme',
        href: 'https://www.ncia.nato.int/newsroom/news/nato-advances-towards-more-agile-and-resilient-digital-infrastructure-through-200meur-contract-with-industry'
      }
    ]
  },
  {
    slug: 'secure-cloud-access-privileged-identity',
    label: 'Identity and access',
    title: 'Map the complete trust path before calling a cloud resource secure',
    metaTitle: 'Secure Cloud Access & Privileged Identity Trust Paths',
    metaDescription:
      'A practical method for tracing identity, device, authentication, privilege, workload, data and logging controls across Microsoft Cloud access paths.',
    datePublished: '2026-08-18',
    displayDate: '18 August 2026',
    intro:
      'Security reviews often inspect individual policies. Attackers and operational failures follow paths: from an identity and device, through authentication and privilege, to a workload and its data.',
    signal:
      'The shift to protected cloud-enabled workplaces makes end-to-end access control more valuable than a list of isolated Microsoft configuration recommendations.',
    sections: [
      {
        title: 'Start with the resource and work backwards',
        paragraphs: [
          'Choose a critical resource and identify every human, external and workload identity that can reach it. Then trace the device, authentication, Conditional Access, PIM, application permission and logging dependencies for each route.'
        ]
      },
      {
        title: 'Record threat, control, evidence and failure',
        paragraphs: [
          'A useful trust-path review does not stop at the intended design. For every step, it records the threat, expected control, validation evidence, owner and failure scenario.'
        ],
        bullets: [
          'standing administrative privilege',
          'policy exclusions and emergency access',
          'service principals and application permissions',
          'guest and partner access',
          'missing or unreviewed security evidence'
        ]
      },
      {
        title: 'Turn architecture into remediation',
        paragraphs: [
          'The output should help a CTO or CISO decide what to fix first, who owns it and which evidence will demonstrate improvement. A diagram without a risk-ranked action plan is documentation, not an assessment result.'
        ]
      }
    ],
    relatedService: 'secure-cloud-access-privileged-identity',
    relatedServiceLabel: 'Explore the Secure Cloud Access Assessment',
    sources: [
      {
        label: 'NCIA — Protected Business Network Wireless LAN',
        href: 'https://www.ncia.nato.int/business/procurement/current-opportunities/424346'
      },
      {
        label: 'NCIA — Current procurement opportunities',
        href: 'https://www.ncia.nato.int/business/procurement/current-opportunities'
      }
    ]
  },
  {
    slug: 'crypto-agility-pqc-readiness',
    label: 'Crypto agility',
    title: 'PQC readiness starts with finding cryptographic dependencies, not choosing algorithms',
    metaTitle: 'Crypto Agility & Post-Quantum Cryptography Readiness',
    metaDescription:
      'How organisations can begin post-quantum readiness with a cryptographic asset inventory, dependency mapping and a risk-based migration roadmap.',
    datePublished: '2026-08-18',
    displayDate: '18 August 2026',
    intro:
      'Post-quantum migration becomes an operational problem long before an organisation replaces an algorithm. Teams first need to know where certificates, keys, signing, encryption and trust dependencies exist.',
    signal:
      'The EU roadmap asks Member States to begin the transition by the end of 2026 and prioritise quantum-resistant protection for critical infrastructure no later than the end of 2030.',
    sections: [
      {
        title: 'Inventory before migration',
        paragraphs: [
          'The first useful deliverable is a cryptographic asset inventory. It should connect each dependency to an owner, business use, algorithm, key or certificate lifetime, data sensitivity, replaceability and migration priority.'
        ],
        bullets: [
          'PKI and TLS certificates',
          'VPN and service-to-service authentication',
          'workload identities and application signing',
          'Key Vault, secrets and storage encryption',
          'legacy systems and long-lived encrypted data'
        ]
      },
      {
        title: 'Crypto agility is the immediate objective',
        paragraphs: [
          'Most organisations do not need a dramatic quantum programme today. They need to understand whether algorithms, certificates, keys and trust anchors can be replaced without redesigning every dependent service.'
        ]
      },
      {
        title: 'Keep the first engagement evidence-based',
        paragraphs: [
          'A readiness module should produce a dependency inventory, exposure view, crypto-agility score and sequenced 12–36 month roadmap. Implementation promises should follow only after the environment and vendor support are understood.'
        ]
      }
    ],
    relatedService: 'microsoft-cloud-audit',
    relatedServiceLabel: 'Explore the Microsoft Cloud Audit modules',
    sources: [
      {
        label: 'European Commission — coordinated PQC roadmap',
        href: 'https://digital-strategy.ec.europa.eu/en/library/coordinated-implementation-roadmap-transition-post-quantum-cryptography'
      },
      {
        label: 'European Commission — PQC transition timeline',
        href: 'https://digital-strategy.ec.europa.eu/en/news/eu-reinforces-its-cybersecurity-post-quantum-cryptography'
      },
      {
        label: 'ENISA — Secure by Design and Default Playbook',
        href: 'https://www.enisa.europa.eu/publications/enisa-secure-by-design-and-default-playbook'
      }
    ]
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
