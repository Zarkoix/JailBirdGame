import React from "react"

import Layout from "../components/layout"
import Hero from "../components/index/Hero"
import RulesSection from "../components/Rules"
import SEO from "../components/seo"
import Banner from "../components/index/Banner"

import "./index.css"
import Testimonial from "../components/testimonial"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner
      title="10% OFF ALL ORDERS TODAY ONLY"
      description="Special for our Open Game Night, get 10% off your copy of JailBird today! Buy one for your mom while you’re at it!"
      link="https://store.jailbirdgame.com/jail-bird-card-game"
      buttonText="Buy Now!"
    />
    <Hero />
    <div className="testimonials">
      <Testimonial
        quote="The art is spectacular, I love the 'eggsposed' card"
        name="Adam"
        title="College Student"
        stars="★★★★★"
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
