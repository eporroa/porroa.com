import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Recent Posts</h2>
    <div class="post">
      <h2>Hi Y'all!</h2>
      <div class="just-text post-body">
        <p>Currently this site is a work-in-progress page based on <a href="http://gatsbyjs.com">Gatsby</a> and <a href="http://strapi.io">Strapi</a></p>
      </div>
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
