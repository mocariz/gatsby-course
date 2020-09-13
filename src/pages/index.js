import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>

    <Profile />

    <Link to="/about">About page</Link>

  </Layout>
)

export default IndexPage
