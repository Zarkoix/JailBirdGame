import React, { useState } from "react"

import "./banner.css"

const Banner = ({ title, description, link }) => {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <a href={link} className="banner">
      <div className="banner__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="banner__learnMore">Learn More →</div>
      </div>
      <button
        className="banner__dismiss"
        aria-label="dismiss banner"
        onClick={e => {
          e.preventDefault()
          setOpen(false)
        }}
      >
        ✗
      </button>
    </a>
  )
}

export default Banner
