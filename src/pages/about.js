import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TEAM from "../components/Team/index"
import Video from "../components/video"

import "./about.css"

const AboutPage = () => (
  <Layout title="about" padding>
    <SEO title="About" />
    <h1>About</h1>
    <h2>Our Story</h2>
    <div className="videoContainer">
      <Video
        videoSrcURL="https://www.youtube.com/embed/2K6SkBZquzs"
        videoTitle="Our Story"
      />
    </div>
    <p>
      JailBird is a startup founded in the Creating a Company series at the
      University of Washington.
    </p>
    <p>
      It took us a while to land on creating a card game company, but we are so
      happy that we did. The experience of going through product design and
      testing, as well as pitching for funding in front of a panel of judges has
      been amazing, and we’ve all become great friends through this process.
    </p>
    <p>
      Our goal is to create a game that’s both casual and strategic at the same
      time, giving you moments of pure enjoyment, while mixing in deception and
      bluffing. We wanted to make winning this game feel worthwhile, and we
      think we've created an experience that will have you squawking for more.
      For those of you who win in our game, you’ll feel extremely satisfied with
      having survived either the luck of the draw, or having eliminated all your
      now former friends through several key plays. For those of you who had
      been sacrificed to the penguin patrol, you’ll come out wanting to try
      again so you can enact revenge against those who betrayed you.
    </p>
    <h2>Meet the Team</h2>
    <TEAM />
  </Layout>
)

export default AboutPage
