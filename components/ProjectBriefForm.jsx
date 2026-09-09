'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '../data/site';
import { emptyInquiryAttribution, getOrCreateInquiryAttribution } from '../lib/inquiryAttribution';

const formEndpoint = `https://formsubmit.co/${site.email}`;
const formAjaxEndpoint = `https://formsubmit.co/ajax/${site.email}`;

const areaOptions = [
  'Secure Cloud & Cyber Operational Assurance',
  'Secure Cloud Remediation',
  'Continuous Security Assurance',
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

const formCopy = {
  en: {
    sending: 'Sending your project brief…', sentButton: 'Sending…', submit: 'Send project brief', emailInstead: 'Email instead',
    error: 'The form could not be sent. Please try again or email', honey: 'Leave this field empty',
    prefill: 'Your selected service or engagement has been pre-filled. You can change it below.',
    name: 'Your name', email: 'Business email', company: 'Company', country: 'Country', area: 'Area of interest',
    timeline: 'Expected timeline', timelinePlaceholder: 'e.g. Q4 2026 or within 6 weeks', engagement: 'Engagement model',
    challenge: 'Delivery challenge or message',
    consentBefore: 'I agree that Enki Tech may use these details to respond to my inquiry, as described in the',
    privacy: 'privacy notice',
    privacyText: 'Your details and non-personal source context are securely forwarded to Enki Tech by FormSubmit and used only to respond to and understand your inquiry.',
    privacyHref: '/legal/privacy/',
    areaLabels: {}, engagementLabels: {}
  },
  fr: {
    sending: 'Envoi de votre demande…', sentButton: 'Envoi…', submit: 'Envoyer la demande', emailInstead: 'Envoyer un e-mail',
    error: 'Le formulaire n’a pas pu être envoyé. Réessayez ou écrivez à', honey: 'Laissez ce champ vide',
    prefill: 'Le service ou le mode d’intervention choisi a été présélectionné. Vous pouvez le modifier ci-dessous.',
    name: 'Votre nom', email: 'E-mail professionnel', company: 'Entreprise', country: 'Pays', area: 'Domaine concerné',
    timeline: 'Délai souhaité', timelinePlaceholder: 'p. ex. T4 2026 ou dans les 6 semaines', engagement: 'Mode d’intervention',
    challenge: 'Contexte, risque ou besoin de livraison',
    consentBefore: 'J’accepte qu’Enki Tech utilise ces informations pour répondre à ma demande, comme indiqué dans la',
    privacy: 'politique de confidentialité',
    privacyText: 'Vos coordonnées et les informations non personnelles sur la source de la visite sont transmises de manière sécurisée à Enki Tech par FormSubmit et servent uniquement à comprendre votre demande et à y répondre.',
    privacyHref: '/fr/legal/privacy/',
    areaLabels: {
      'Secure Cloud & Cyber Operational Assurance': 'Assurance opérationnelle Cloud et cybersécurité',
      'Secure Cloud Remediation': 'Remédiation sécurisée du Cloud',
      'Continuous Security Assurance': 'Assurance de sécurité continue',
      'Microsoft Cloud Audit & Risk Review': 'Audit Microsoft Cloud et revue des risques',
      'Secure Cloud Access & Privileged Identity': 'Accès Cloud sécurisé et identités privilégiées',
      'Continuous Secure Cloud Governance': 'Gouvernance continue et sécurisée du Cloud',
      'CRA Incident Readiness': 'Préparation aux incidents CRA',
      'Crypto Agility & PQC Readiness': 'Crypto-agilité et préparation post-quantique',
      'Microsoft 365 & Digital Collaboration': 'Microsoft 365 et collaboration numérique',
      'Azure & Hybrid Infrastructure': 'Azure et infrastructure hybride',
      'Identity, Endpoint & Security': 'Identité, terminaux et sécurité',
      'Automation & IT Operations': 'Automatisation et opérations IT',
      'AI-enhanced IT Operations': 'Opérations IT assistées par l’IA',
      'Partner or subcontracting opportunity': 'Partenariat ou sous-traitance'
    },
    engagementLabels: {
      'Assessment or audit': 'Évaluation ou audit', 'Direct project': 'Projet direct',
      'L2/L3 operational support': 'Support opérationnel L2/L3', 'Partner delivery': 'Livraison en partenariat',
      Subcontracting: 'Sous-traitance', 'Ongoing advisory support': 'Accompagnement continu'
    }
  },
  nl: {
    sending: 'Uw aanvraag wordt verzonden…', sentButton: 'Verzenden…', submit: 'Projectaanvraag verzenden', emailInstead: 'E-mail verzenden',
    error: 'Het formulier kon niet worden verzonden. Probeer opnieuw of mail naar', honey: 'Laat dit veld leeg',
    prefill: 'De gekozen dienst of samenwerkingsvorm is vooraf ingevuld. U kunt dit hieronder wijzigen.',
    name: 'Uw naam', email: 'Zakelijk e-mailadres', company: 'Bedrijf', country: 'Land', area: 'Interessegebied',
    timeline: 'Gewenste timing', timelinePlaceholder: 'bijv. Q4 2026 of binnen 6 weken', engagement: 'Samenwerkingsvorm',
    challenge: 'Context, risico of uitvoeringsvraag',
    consentBefore: 'Ik ga ermee akkoord dat Enki Tech deze gegevens gebruikt om mijn aanvraag te beantwoorden, zoals beschreven in de',
    privacy: 'privacyverklaring',
    privacyText: 'Uw gegevens en niet-persoonlijke herkomstinformatie worden veilig via FormSubmit aan Enki Tech doorgestuurd en uitsluitend gebruikt om uw aanvraag te begrijpen en te beantwoorden.',
    privacyHref: '/nl/legal/privacy/',
    areaLabels: {
      'Secure Cloud & Cyber Operational Assurance': 'Operationele assurance voor Cloud en cybersecurity',
      'Secure Cloud Remediation': 'Beveiligde Cloud-remediatie',
      'Continuous Security Assurance': 'Doorlopende security assurance',
      'Microsoft Cloud Audit & Risk Review': 'Microsoft Cloud-audit en risicoanalyse',
      'Secure Cloud Access & Privileged Identity': 'Beveiligde Cloudtoegang en privileged identity',
      'Continuous Secure Cloud Governance': 'Doorlopend veilig Cloudbeheer',
      'CRA Incident Readiness': 'Voorbereiding op CRA-incidenten',
      'Crypto Agility & PQC Readiness': 'Crypto-agility en PQC-readiness',
      'Microsoft 365 & Digital Collaboration': 'Microsoft 365 en digitale samenwerking',
      'Azure & Hybrid Infrastructure': 'Azure en hybride infrastructuur',
      'Identity, Endpoint & Security': 'Identiteit, endpoints en beveiliging',
      'Automation & IT Operations': 'Automatisering en IT-operations',
      'AI-enhanced IT Operations': 'AI-ondersteunde IT-operations',
      'Partner or subcontracting opportunity': 'Partner- of onderaannemingsopdracht'
    },
    engagementLabels: {
      'Assessment or audit': 'Assessment of audit', 'Direct project': 'Rechtstreeks project',
      'L2/L3 operational support': 'L2/L3 operationele ondersteuning', 'Partner delivery': 'Uitvoering als partner',
      Subcontracting: 'Onderaanneming', 'Ongoing advisory support': 'Doorlopende adviesondersteuning'
    }
  }
};

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

export function ProjectBriefForm({ locale = 'en' }) {
  const copy = formCopy[locale] || formCopy.en;
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
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
    setStatus(copy.sending);
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
          _url: `${site.url}${localePrefix}/contact/`,
          _next: `${site.url}${localePrefix}/contact/thank-you/`,
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
          'Page language': locale.toUpperCase(),
          'Submission page': `${site.url}${localePrefix}/contact/`,
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

      window.location.assign(`${localePrefix}/contact/thank-you/`);
    } catch {
      setStatus(`${copy.error} ${site.email}.`);
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="projectBriefForm" action={formEndpoint} method="POST" onSubmit={submitBrief}>
      <input type="hidden" name="_subject" value="New Enki Tech project inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_url" value={`${site.url}${localePrefix}/contact/`} />
      <input type="hidden" name="_next" value={`${site.url}${localePrefix}/contact/thank-you/`} />
      <label className="formHoney" aria-hidden="true">
        {copy.honey}
        <input name="_honey" value={form._honey} onChange={updateField} tabIndex="-1" autoComplete="off" />
      </label>
      {hasPrefill && (
        <p className="formPrefillNotice">{copy.prefill}</p>
      )}
      <div className="formGrid">
        <label>
          {copy.name}
          <input name="name" value={form.name} onChange={updateField} autoComplete="name" required />
        </label>
        <label>
          {copy.email}
          <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
        </label>
        <label>
          {copy.company}
          <input name="company" value={form.company} onChange={updateField} autoComplete="organization" required />
        </label>
        <label>
          {copy.country}
          <input name="country" value={form.country} onChange={updateField} autoComplete="country-name" required />
        </label>
        <label>
          {copy.area}
          <select name="area" value={form.area} onChange={updateField}>
            {areaOptions.map((option) => <option key={option} value={option}>{copy.areaLabels[option] || option}</option>)}
          </select>
        </label>
        <label>
          {copy.timeline}
          <input name="timeline" value={form.timeline} onChange={updateField} placeholder={copy.timelinePlaceholder} required />
        </label>
        <label className="formWide">
          {copy.engagement}
          <select name="engagement" value={form.engagement} onChange={updateField}>
            {engagementOptions.map((option) => <option key={option} value={option}>{copy.engagementLabels[option] || option}</option>)}
          </select>
        </label>
        <label className="formWide">
          {copy.challenge}
          <textarea name="challenge" value={form.challenge} onChange={updateField} rows="5" required />
        </label>
      </div>
      <label className="formConsent">
        <input type="checkbox" name="consent" checked={form.consent} onChange={updateField} required />
        <span>{copy.consentBefore} <Link href={copy.privacyHref}>{copy.privacy}</Link>.</span>
      </label>
      <div className="formActions">
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? copy.sentButton : copy.submit}
        </button>
        <a className="button buttonGhost dark" href={`mailto:${site.email}`}>{copy.emailInstead}</a>
      </div>
      <p className="formPrivacy">{copy.privacyText}</p>
      <p className="formStatus" data-state={statusType} role="status" aria-live="polite">{status}</p>
    </form>
  );
}
