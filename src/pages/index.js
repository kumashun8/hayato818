import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Styles from "../styles/pages/index.module.scss"
import Profile from "../components/profile"
import Skill from "../components/skill"
import Work from "../components/work"
import Favorite from "../components/favorite"

const IndexPage = () => (
  <Layout>
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
    <SEO title="Hayato OKUMA" />
    <Profile />
    <Skill />
    <Work />
    <Favorite />
  </Layout>
)

export default IndexPage
