/** @type {import('next').NextConfig} */
/** @type {import('next-translate').NextI18nConfig} */
import nextTranslate from 'next-translate-plugin';
 const nextConfig = {};
 //const nextTranslate = require('next-translate-plugin')

export default nextTranslate(nextConfig);

// module.exports = nextTranslate({
//     nextConfig
//   // any additional Next.js config options here
// });
