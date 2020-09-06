import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>

    <Link to="/about">About page</Link>
    <br />
    <Link activeStyle={{ color: 'red' }} to="/">Home</Link>

  </Layout>
)

export default IndexPage
