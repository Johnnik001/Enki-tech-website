# Enki Tech Sales CRM v1

Owner: Enki Tech
Start date: 2026-09-09

## Purpose

This CRM is the operating system for turning website assets, LinkedIn content and targeted outreach into qualified B2B pipeline. It should stay small, current and decision-oriented.

Primary commercial paths:

1. Secure Cloud Remediation: checklist → discovery → bounded remediation sprint → continuous assurance.
2. CRA Incident Reporting Readiness: insight → dry-run checklist → readiness sprint → remediation → continuous assurance.
3. Partner delivery: partner-fit conversation → bounded work package → repeat subcontracted delivery.

## Pipeline stages

- Research — account identified, fit not yet confirmed.
- Ready to contact — target role, trigger and message are prepared.
- Contacted — first touch sent.
- Replied — substantive response received.
- Discovery — discovery call scheduled or completed.
- Qualified — confirmed problem, scope, owner and plausible buying path.
- Proposal — commercial proposal sent.
- Negotiation — scope/commercial terms under discussion.
- Won — paid engagement agreed.
- Nurture — relevant but no current buying window.
- Lost — no fit, no need or opportunity closed elsewhere.

Do not move an account forward because of profile views, likes or generic interest. A stage change requires buyer evidence.

## Core fields

Each row in `pipeline.csv` tracks:

- Company and segment
- Priority tier
- Target contact or target role
- Commercial offer
- Public trigger / reason now
- Current stage
- Last touch and next action
- Reply / discovery / proposal status
- Campaign and landing page attribution
- Commercial notes

## Qualification rule

A prospect becomes **Qualified** only when at least four points are clear:

1. A real backlog, readiness gap or implementation bottleneck exists.
2. The Microsoft / CRA scope matches Enki Tech's actual delivery capability.
3. There is a named owner or decision path.
4. Timing, change constraints or a business/regulatory trigger make action plausible.

## First-wave operating cadence

Daily:
- Send 3–5 highly targeted touches, not mass outreach.
- Update CRM immediately after every substantive reply or call.
- Set a next action and date for every active account.
- Do not leave a contacted prospect without a follow-up date.

Weekly:
- Count new contacts, meaningful replies, discoveries, qualified opportunities, proposals and wins.
- Review objections by offer.
- Update website/offer only when repeated buyer evidence justifies it.
- Review LinkedIn content by conversations and qualified visits, not impressions alone.

## Follow-up timing

- First follow-up: 3 business days after first touch unless the prospect engages earlier.
- Second follow-up: 5–7 business days later, adding a useful asset or a specific observation.
- After two unanswered follow-ups: move to Nurture unless there is a new external trigger.

## Attribution

Use consistent campaign tags for links shared in outbound or LinkedIn.

Recommended examples:

- `utm_source=linkedin&utm_medium=organic&utm_campaign=cra_srp_sep2026&utm_content=company_insight`
- `utm_source=linkedin&utm_medium=outbound&utm_campaign=remediation_wave1&utm_content=direct_buyer`
- `utm_source=linkedin&utm_medium=outbound&utm_campaign=remediation_wave1&utm_content=partner`

Do not create new campaigns for every message. Keep attribution stable enough to compare channels.

## Stage probabilities for internal forecasting

Use only after an opportunity is active; these are internal planning heuristics, not revenue forecasts:

- Contacted: 5%
- Replied: 10%
- Discovery: 20%
- Qualified: 35%
- Proposal: 50%
- Negotiation: 70%
- Won: 100%

Do not assign an expected deal value before a plausible commercial scope exists.

## Decision gate

Do not build another service or automation product until there is either:

- one paid sprint; or
- repeated buyer evidence from at least 3 substantive conversations pointing to the same problem and buying pattern.

The CRM exists to create that evidence.