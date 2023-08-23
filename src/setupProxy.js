// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     proxy('/v1/api', {
//       target:
//         process.env.NODE_ENV === 'development'
//           ? process.env.REACT_APP_DEAHWA_URL_DEV
//           : process.env.REACT_APP_DEAHWA_URL_PROD,
//       changeOrigin: true,
//       pathRewrite: { '^/v1/api': '/v1/api' },
//     }),
//   );
// };
