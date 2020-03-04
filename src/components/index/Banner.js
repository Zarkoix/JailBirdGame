import React, { useState } from "react"

import "./banner.scss"

const Banner = ({ title, description, link }) => {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <a href={link} className="banner">
      <div className="banner__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a className="banner__learnMore" href={link}>
          Learn More →
        </a>
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
