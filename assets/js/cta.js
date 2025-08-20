document.getElementById('learnMore').addEventListener('click', function() {
    const variant = document.body.dataset.variant;
    const experiment = document.body.dataset.experiment;
    trackEvent("learn_more_click", {
        variant,
        experiment,
        page_path: location.pathname
    });

    // Proceed with the button's default action
    const learnMoreLink = "#learn-more"; // Change this to your desired link
    if (navigator.sendBeacon) {
        navigator.sendBeacon('/track-event', JSON.stringify({
            variant,
            experiment,
            page_path: location.pathname
        }));
    } else {
        setTimeout(() => {
            location.href = learnMoreLink;
        }, 100);
    }
});