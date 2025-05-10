export const GA_TRACKING_ID = 'G-SEQN87N0TP'; // Replace with your GA ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
