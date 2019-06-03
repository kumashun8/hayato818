import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Styles from "../styles/pages/index.module.scss"
import Profile from "../components/profile"
import Skill from "../components/skill"

const IndexPage = () => (
  <Layout>
    <SEO title="Hayato OKUMA" />
    <Profile />
    <Skill />
  </Layout>
)

export default IndexPage
