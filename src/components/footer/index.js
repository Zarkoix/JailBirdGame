import React from "react"
import { Link } from "gatsby"

import "./footer.css"

const links = [
  // {
  //   link: "https://store.jailbirdgame.com",
  //   desc: "Store",
  //   external: true,
  // },
  {
    link: "/about",
    desc: "About",
    external: false,
  },
  {
    link: "/subscribe",
    desc: "Kickstarter",
    external: false,
  },
]

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__list">
        {links.map(l =>
          l.external ? (
            <a key={l.link} href={l.link} className="footer__link">
              {l.desc}
            </a>
          ) : (
            <Link key={l.link} to={l.link} className="footer__link">
              {l.desc}
            </Link>
          )
        )}
      </div>
      <span className="footer_copyright">
        © {new Date().getFullYear()}, Made with love in Seattle
      </span>
    </footer>
  )
}

export default Footer
