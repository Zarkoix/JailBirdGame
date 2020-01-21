import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import RulesSection from "../components/Rules"
import SEO from "../components/seo"

import "./index.css"
import Testimonial from "../components/testimonial"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero__container">
      <HeroImage className="hero__image" />
      <div className="hero__cta">
        <h1 className="hero__title">
          Play the game everyone is <span className="orange">squawking</span>{" "}
          about
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
    <div className="testimonials">
      <Testimonial
        quote="The art is spectacular, I love the 'eggsposed' card"
        name="Adam"
        title="College Student"
        stars="★★★★☆"
      />
      <Testimonial
        quote="It's a pretty amazing game. Perfect for every game night"
        name="Manesh"
        title="College Student"
        stars="★★★★★"
      />
    </div>
    <RulesSection />
    <div className="finalcta__container">
      <p className="finalcta__desc">
        <span className="orange">JailBird</span> is perfect for your next game
        night!
      </p>
      <a
        className="hero__storeLink"
        href="https://store.jailbirdgame.com/jail-bird-card-game"
      >
        Buy Now
      </a>
    </div>
  </Layout>
)

export default IndexPage
