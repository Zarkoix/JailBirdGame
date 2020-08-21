import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MAILCHIMP from "../components/Mailchimp/mailchimp"

import "./index.css"

const SubscribePage = () => (
  <Layout>
    <SEO />
    <MAILCHIMP />
  </Layout>
)

export default SubscribePage
