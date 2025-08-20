function getVariant() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('v')) {
        const variant = urlParams.get('v');
        if (variant === 'a' || variant === 'b') {
            persistVariant(variant);
            return variant;
        }
    }
    const cookieVariant = document.cookie.split('; ').find(row => row.startsWith('ab_variant='));
    if (cookieVariant) {
        return cookieVariant.split('=')[1];
    }
    const localStorageVariant = localStorage.getItem('ab_variant');
    if (localStorageVariant) {
        return localStorageVariant;
    }
    const randomVariant = Math.random() < 0.5 ? 'a' : 'b';
    persistVariant(randomVariant);
    return randomVariant;
}

function persistVariant(variant) {
    document.cookie = `ab_variant=${variant}; max-age=2592000; path=/; SameSite=Lax`;
    localStorage.setItem('ab_variant', variant);
}

function currentVariant() {
    return getVariant();
}

window.ABTest = {
    getVariant,
    persistVariant,
    currentVariant
};