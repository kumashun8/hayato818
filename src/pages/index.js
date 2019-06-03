import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Styles from "../styles/pages/index.module.scss"
import Profile from "../components/profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Hayato OKUMA" />
    <Profile />
  </Layout>
)

export default IndexPage
