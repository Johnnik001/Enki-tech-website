'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '../data/site';
import { emptyInquiryAttribution, getOrCreateInquiryAttribution } from '../lib/inquiryAttribution';

const formEndpoint = `https://formsubmit.co/${site.email}`;
const formAjaxEndpoint = `https://formsubmit.co/ajax/${site.email}`;

const areaOptions = [
  'Microsoft Cloud Audit & Risk Review',
  'Secure Cloud Access & Privileged Identity',
  'Continuous Secure Cloud Governance',
  'CRA Incident Readiness',
  'Crypto Agility & PQC Readiness',
  'Microsoft 365 & Digital Collaboration',
  'Azure & Hybrid Infrastructure',
  'Identity, Endpoint & Security',
  'Automation & IT Operations',
  'AI-enhanced IT Operations',
  'Partner or subcontracting opportunity'
];

const engagementOptions = [
  'Assessment or audit',
  'Direct project',
  'L2/L3 operational support',
  'Partner delivery',
  'Subcontracting',
  'Ongoing advisory support'
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  area: 'Microsoft 365 & Digital Collaboration',
  timeline: '',
  engagement: 'Direct project',
  challenge: '',
  _honey: '',
  consent: false
};

export function ProjectBriefForm() {
  const [form, setForm] = useState(initialForm);
  const [attribution, setAttribution] = useState(emptyInquiryAttribution);
  const [hasPrefill, setHasPrefill] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setAttribution(getOrCreateInquiryAttribution());

    const params = new URLSearchParams(window.location.search);
    const area = params.get('area');
    const engagement = params.get('engagement');
    const validArea = areaOptions.includes(area) ? area : null;
    const validEngagement = engagementOptions.includes(engagement) ? engagement : null;

    if (validArea || validEngagement) {
      setForm((current) => ({
        ...current,
        ...(validArea ? { area: validArea } : {}),
        ...(validEngagement ? { engagement: validEngagement } : {})
      }));
      setHasPrefill(true);
    }
  }, []);

  function updateField(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setForm((current) => ({ ...current, [event.target.name]: value }));
    setStatus('');
    setStatusType('');
  }

  async function submitBrief(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus('Sending your project brief…');
    setStatusType('pending');

    try {
      const response = await fetch(formAjaxEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Enki Tech project inquiry — ${form.company || form.name}`,
          _template: 'table',
          _url: `${site.url}/contact/`,
          _next: `${site.url}/contact/thank-you/`,
          _honey: form._honey,
          Name: form.name,
          Email: form.email,
          _replyto: form.email,
          Company: form.company,
          Country: form.country,
          'Area of interest': form.area,
          'Expected timeline': form.timeline,
          'Engagement model': form.engagement,
          'Delivery challenge or message': form.challenge,
          'Privacy consent': form.consent ? 'Confirmed' : 'Not confirmed',
          'First landing page': attribution.landingPath || 'Unavailable',
          'Referrer domain': attribution.referrerHost || 'Direct / unavailable',
          'UTM source': attribution.utmSource || 'Not provided',
          'UTM medium': attribution.utmMedium || 'Not provided',
          'UTM campaign': attribution.utmCampaign || 'Not provided'
        })
      });

      const result = await response.json().catch(() => null);
      const wasAccepted = response.ok && result?.success !== false && result?.success !== 'false';

      if (!wasAccepted) {
        throw new Error('The form service did not accept the submission.');
      }

      window.location.assign('/contact/thank-you/');
    } catch {
      setStatus(`The form could not be sent. Please try again or email ${site.email} directly.`);
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="projectBriefForm" action={formEndpoint} method="POST" onSubmit={submitBrief}>
      <input type="hidden" name="_subject" value="New Enki Tech project inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_url" value={`${site.url}/contact/`} />
      <input type="hidden" name="_next" value={`${site.url}/contact/thank-you/`} />
      <label className="formHoney" aria-hidden="true">
        Leave this field empty
        <input name="_honey" value={form._honey} onChange={updateField} tabIndex="-1" autoComplete="off" />
      </label>
      {hasPrefill && (
        <p className="formPrefillNotice">Your selected service or engagement has been pre-filled. You can change it below.</p>
      )}
      <div className="formGrid">
        <label>
          Your name
          <input name="name" value={form.name} onChange={updateField} autoComplete="name" required />
        </label>
        <label>
          Business email
          <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
        </label>
        <label>
          Company
          <input name="company" value={form.company} onChange={updateField} autoComplete="organization" required />
        </label>
        <label>
          Country
          <input name="country" value={form.country} onChange={updateField} autoComplete="country-name" required />
        </label>
        <label>
          Area of interest
          <select name="area" value={form.area} onChange={updateField}>
            {areaOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          Expected timeline
          <input name="timeline" value={form.timeline} onChange={updateField} placeholder="e.g. Q4 2026 or within 6 weeks" required />
        </label>
        <label className="formWide">
          Engagement model
          <select name="engagement" value={form.engagement} onChange={updateField}>
            {engagementOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="formWide">
          Delivery challenge or message
          <textarea name="challenge" value={form.challenge} onChange={updateField} rows="5" required />
        </label>
      </div>
      <label className="formConsent">
        <input type="checkbox" name="consent" checked={form.consent} onChange={updateField} required />
        <span>I agree that Enki Tech may use these details to respond to my inquiry, as described in the <Link href="/legal/privacy/">privacy notice</Link>.</span>
      </label>
      <div className="formActions">
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send project brief'}
        </button>
        <a className="button buttonGhost dark" href={`mailto:${site.email}`}>Email instead</a>
      </div>
      <p className="formPrivacy">Your details and non-personal source context are securely forwarded to Enki Tech by FormSubmit and used only to respond to and understand your inquiry.</p>
      <p className="formStatus" data-state={statusType} role="status" aria-live="polite">{status}</p>
    </form>
  );
}
