'use client';

import Script from 'next/script';

export default function LeadDynoScript() {
  return (
    <Script
      src="https://static.leaddyno.com/js"
      onLoad={() => {
        const w = window as any;
        if (w.LeadDyno) {
          w.LeadDyno.key = "1436ca19da13ab3551eb17ecaf4994bba34819e0";
          w.LeadDyno.recordVisit();
          w.LeadDyno.autoWatch();
        }
      }}
    />
  );
}