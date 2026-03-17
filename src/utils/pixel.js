const isProd = import.meta.env.PROD;

export const trackEvent = (event, params = {}) => {
  if (isProd && window.fbq) {
    window.fbq('track', event, params);
  }
};

export const trackPageView = () => {
  if (isProd && window.fbq) {
    window.fbq('track', 'PageView');
  }
};