import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className="header__container">
      <Link
        className="header__brand"
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Img
          className="header__logo"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
        <h1 className="header__wordMark">JailBird</h1>
      </Link>

      <div className="header__links">
        <a
          className="header__link"
          href="https://store.jailbirdgame.com/jail-bird-card-game"
        >
          Store
        </a>
        <Link className="header__link" to="about">
          About
        </Link>
      </div>
    </header>
  )
}

export default Header
