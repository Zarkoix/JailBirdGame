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
    link: "https://www.kickstarter.com/projects/jailbird/jailbird",
    desc: "Kickstarter",
    external: true,
  },
  {
    link: "/howToPlay",
    desc: "How to Play",
    external: false,
  },
]

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="row">
        <div className="footer__list">
          {links.map(l =>
            l.external ? (
              <a
                target="_blank"
                key={l.link}
                href={l.link}
                rel="noreferrer"
                className="footer__link"
              >
                {l.desc}
              </a>
            ) : (
              <Link key={l.link} to={l.link} className="footer__link">
                {l.desc}
              </Link>
            )
          )}
        </div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"
        ></link>
        <div className="social__list">
          <a
            href="https://www.facebook.com/jailbirdcardgame/"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.kickstarter.com/projects/jailbird/jailbird"
            className="hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCE9jFVPYGQg9Wt16z-AYM4Q/featured"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/jailbirdgame/"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@jailbirdgame"
            className="hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tik"></i>
          </a>
        </div>
      </div>
      <span className="footer_copyright">
        © {new Date().getFullYear()}, Made with love in Seattle
      </span>
    </footer>
  )
}

export default Footer
