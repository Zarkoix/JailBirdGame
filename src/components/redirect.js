/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import "./layout.css"

const Redirect = () => {
  return (
    <>
      <head>
        window.location.replace('https://www.kickstarter.com/projects/jailbird/jailbird/');
      </head>
    </>
  )
}

export default Redirect
