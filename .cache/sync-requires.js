const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/erik/Projects/porroa.com/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/erik/Projects/porroa.com/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/erik/Projects/porroa.com/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/erik/Projects/porroa.com/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/erik/Projects/porroa.com/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/erik/Projects/porroa.com/src/pages/portfolio.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/erik/Projects/porroa.com/src/pages/using-typescript.tsx")))
}

