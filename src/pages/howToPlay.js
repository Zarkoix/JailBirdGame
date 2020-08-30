import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "./index.css"
import "../components/video.css"

const HowToPlayPage = () => (
  <Layout title="How to Play" padding>
    <SEO title="How to Play" description="Learn how to play the game!" />
    <h1>How to Play</h1>
    <h3 className="videoText">
      Don't be a birdbrain! Learn how to play the whimsical game of JailBird.
    </h3>
    <div className="videoContainer">
      <Video
        videoSrcURL="https://www.youtube.com/embed/xsH-G_kDXzI"
        videoTitle="JailBird: How to Play"
      />
    </div>
  </Layout>
)

export default HowToPlayPage
