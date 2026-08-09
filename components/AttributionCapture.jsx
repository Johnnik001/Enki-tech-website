'use client';

import { useEffect } from 'react';
import { getOrCreateInquiryAttribution } from '../lib/inquiryAttribution';

export function AttributionCapture() {
  useEffect(() => {
    getOrCreateInquiryAttribution();
  }, []);

  return null;
}
