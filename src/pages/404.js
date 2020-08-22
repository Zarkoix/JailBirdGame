import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "../components/video.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <h3 className="videoText">How 'bout a video instead?</h3>
    <div className="videoContainer">
      <Video
        videoSrcURL="https://www.youtube.com/embed/2aafcTYbS2Y"
        videoTitle="The JailBird is Back"
      />
    </div>
  </Layout>
)

export default NotFoundPage
