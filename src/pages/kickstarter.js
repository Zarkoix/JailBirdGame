import React from "react"
// import Pixel from "../components/pixel"

import { Helmet } from "react-helmet"

const RedirectPage = ({ pathname }) => {
  return (
    <Helmet defer={false}>
      <script>
        window.location.replace('https://www.kickstarter.com/projects/jailbird/jailbird/');
      </script>
    </Helmet>
  )
}
export default RedirectPage
