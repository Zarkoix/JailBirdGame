import React from "react"
import HeroImage from "./heroImage"
import HeroImageMobile from "./heroImageMobile"

import "./hero.css"

const Hero = () => {
  const isMobile = window.matchMedia("(max-aspect-ratio: 2/3)").matches
  console.log(isMobile)
  return (
    <div className="hero__container">
      {!isMobile ? (
        <HeroImage className="hero__image" />
      ) : (
        <HeroImageMobile className="hero__image hero__image__mobile" />
      )}
      <div className="hero__cta">
        <h1 className="hero__title">
          Play the card game everyone is{" "}
          <span className="orange">squawking</span> about
        </h1>
        <p className="hero__text">
          Frame your avian accomplices for crimes in order to escape the penguin
          police in this deception filled party card game
        </p>
        <a
          className="hero__storeLink"
          href="https://store.jailbirdgame.com/jail-bird-card-game"
        >
          Buy Now
        </a>
      </div>
    </div>
  )
}

export default Hero
