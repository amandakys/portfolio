import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BeforeAfterSlider from "../components/slider"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout page={"about"} title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <BeforeAfterSlider />
          <h3 id="dynamic-styles">hi! i'm amanda</h3>
          <p align="center">
            I'm a designer/developer based in London, UK. I moved here from
            Sydney, Australia 8 years ago. I currently work as a Technical UX
            Designer at
            <a
              href="https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              QuantumBlack
            </a>
            .
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
