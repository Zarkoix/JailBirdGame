import React, { useRef, useLayoutEffect, useState } from "react"
import HeroImage from "./heroImage"
import HeroImageMobile from "./heroImageMobile"

import "./hero.css"
import Buy from "../buybutton"

const Hero = () => {
  const targetRef = useRef()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      })
    }
  }, [])

  let isMobile = false
  console.log(dimensions)
  if (dimensions.width !== 0) {
    isMobile = dimensions.width / dimensions.height <= 2 / 3
  }

  return (
    <div className="hero__container" ref={targetRef}>
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
        <Buy btnid="hero" />
      </div>
    </div>
  )
}

export default Hero
