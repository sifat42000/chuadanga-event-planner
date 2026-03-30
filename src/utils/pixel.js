const isProd = import.meta.env.PROD;

/**
 * Track custom events to Facebook Pixel
 * @param {string} event - Event name (e.g., 'Contact', 'InitiateCheckout', 'Purchase')
 * @param {object} params - Event parameters
 */
export const trackEvent = (event, params = {}) => {
  if (isProd && window.fbq) {
    window.fbq('track', event, params);
  } else if (!isProd) {
    console.log(`[FB Pixel] Event tracked (dev): ${event}`, params);
  }
};

/**
 * Track automatic PageView events on route changes
 * Fires for every page navigation in the SPA
 */
export const trackPageView = () => {
  if (isProd && window.fbq) {
    window.fbq('track', 'PageView');
  } else if (!isProd) {
    console.log('[FB Pixel] PageView tracked (dev)');
  }
};