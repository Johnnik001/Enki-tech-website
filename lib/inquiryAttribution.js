export const inquiryAttributionStorageKey = 'enki-inquiry-attribution';

const maxValueLength = 120;

export const emptyInquiryAttribution = {
  landingPath: '',
  referrerHost: '',
  utmSource: '',
  utmMedium: '',
  utmCampaign: ''
};

function cleanValue(value) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/[\r\n\t]+/g, ' ').slice(0, maxValueLength);
}

export function sanitizeInquiryAttribution(value = {}) {
  return {
    landingPath: cleanValue(value.landingPath),
    referrerHost: cleanValue(value.referrerHost),
    utmSource: cleanValue(value.utmSource),
    utmMedium: cleanValue(value.utmMedium),
    utmCampaign: cleanValue(value.utmCampaign)
  };
}

function getReferrerHost() {
  if (!document.referrer) return 'Direct / unavailable';

  try {
    const referrerHost = new URL(document.referrer).hostname;
    return referrerHost === window.location.hostname ? 'Internal navigation' : referrerHost;
  } catch {
    return 'Direct / unavailable';
  }
}

export function getOrCreateInquiryAttribution() {
  if (typeof window === 'undefined') return emptyInquiryAttribution;

  try {
    const savedValue = window.sessionStorage.getItem(inquiryAttributionStorageKey);

    if (savedValue) {
      return sanitizeInquiryAttribution(JSON.parse(savedValue));
    }

    const params = new URLSearchParams(window.location.search);
    const attribution = sanitizeInquiryAttribution({
      landingPath: window.location.pathname,
      referrerHost: getReferrerHost(),
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || ''
    });

    window.sessionStorage.setItem(inquiryAttributionStorageKey, JSON.stringify(attribution));
    return attribution;
  } catch {
    return emptyInquiryAttribution;
  }
}
