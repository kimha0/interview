// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLinaria = require('next-linaria');

const nextConf = () => {
  const baseConf = {
    i18n: {
      locales: ['ko', 'en'],
      defaultLocale: 'ko',
    },
    images: {
      domains: [''],
    },
    linaria: {
      cacheDirectory: '.next/cache/linaria',
      sourceMap: process.env.NODE_ENV === 'production',
    },
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    poweredByHeader: false,
  };

  return withLinaria(baseConf);
};
module.exports = nextConf();
