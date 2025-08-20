window.AnalyticsConfig = {
    provider: "none",
    experimentName: "landing_ab_v1",
    gaMeasurementId: "G-XXXXXXX",
    plausibleDomain: "example.com"
};

function trackEvent(name, params) {
    if (AnalyticsConfig.provider === "ga4" && AnalyticsConfig.gaMeasurementId) {
        gtag('event', name, params);
    } else if (AnalyticsConfig.provider === "plausible" && AnalyticsConfig.plausibleDomain) {
        plausible(name, { props: params });
    } else {
        console.info(`Event: ${name}`, params);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const variant = document.body.dataset.variant;
    const experiment = AnalyticsConfig.experimentName;
    trackEvent('ab_pageview', {
        variant,
        experiment,
        page_path: location.pathname
    });
});