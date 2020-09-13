import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO  from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>about</h1>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About