# A/B Test Landing Page

## Setup Instructions
1. Edit `AnalyticsConfig` in `/assets/js/analytics.js`. Set provider to "ga4" and add GA ID (or "plausible" with domain). Leave as "none" to disable analytics.
2. Deploy to Netlify, Vercel, or GitHub Pages.
3. To create new variants, copy `a.html` to `c.html` and update the variant assignment logic if needed.
4. Check events in GA4 or Plausible using the event names: `learn_more_click`, `ab_pageview`.

## URL Parameter Forcing
You can force a variant by appending `?v=a` or `?v=b` to the URL.

## Cookie Persistence
The cookie `ab_variant` lasts for 30 days. If both cookie and localStorage exist but differ, the URL parameter takes precedence.