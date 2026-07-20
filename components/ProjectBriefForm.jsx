'use client';

import { useMemo, useState } from 'react';
import { site } from '../data/site';

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  area: 'Microsoft 365 & Digital Collaboration',
  timeline: '',
  engagement: 'Direct project',
  challenge: ''
};

function createBrief(form) {
  return `Hello Enki Tech,

I would like to discuss a potential project or partnership.

Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Country: ${form.country}
Area of interest: ${form.area}
Expected timeline: ${form.timeline}
Engagement model: ${form.engagement}
Delivery challenge / message:
${form.challenge}`;
}

export function ProjectBriefForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const brief = useMemo(() => createBrief(form), [form]);
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry from ${form.company || form.name || 'website visitor'}`)}&body=${encodeURIComponent(brief)}`;

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setStatus('');
  }

  async function copyBrief(event) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(brief);
      setStatus(`Project brief copied. Paste it into your preferred email service and send it to ${site.email}.`);
    } catch {
      setStatus('Copying was blocked by the browser. Select the preview below and copy it manually.');
    }
  }

  return (
    <form className="projectBriefForm" onSubmit={copyBrief}>
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
            <option>Microsoft 365 & Digital Collaboration</option>
            <option>Azure & Hybrid Infrastructure</option>
            <option>Identity, Endpoint & Security</option>
            <option>Automation & IT Operations</option>
            <option>AI-enhanced IT Operations</option>
            <option>Partner or subcontracting opportunity</option>
          </select>
        </label>
        <label>
          Expected timeline
          <input name="timeline" value={form.timeline} onChange={updateField} placeholder="e.g. Q4 2026 or within 6 weeks" required />
        </label>
        <label className="formWide">
          Engagement model
          <select name="engagement" value={form.engagement} onChange={updateField}>
            <option>Direct project</option>
            <option>Partner delivery</option>
            <option>Subcontracting</option>
            <option>Ongoing advisory support</option>
          </select>
        </label>
        <label className="formWide">
          Delivery challenge or message
          <textarea name="challenge" value={form.challenge} onChange={updateField} rows="5" required />
        </label>
      </div>
      <div className="briefPreviewBlock">
        <label htmlFor="brief-preview">Project brief preview</label>
        <textarea id="brief-preview" className="briefPreview" value={brief} readOnly rows="11" />
      </div>
      <div className="formActions">
        <button className="button" type="submit">Copy project brief</button>
        <a className="button buttonGhost dark" href={mailto}>Open completed email</a>
      </div>
      <p className="formPrivacy">Nothing is sent or stored by this website. Copy the brief into any webmail service, or open it in your configured email app.</p>
      <p className="formStatus" aria-live="polite">{status}</p>
    </form>
  );
}
