const getSiteUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, '');
  }
  if (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`.replace(/\/+$/, '');
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`.replace(/\/+$/, '');
  }
  return 'https://salikpirzada.dev';
};

export const SITE_URL = getSiteUrl();
export const SITE_NAME = 'Salik Pirzada';
export const SITE_DESCRIPTION = 'Salik Pirzada — Developer, Builder & Computer Science Student at Lovely Professional University.';

