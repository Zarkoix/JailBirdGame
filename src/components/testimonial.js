import React from "react"

import "./testimonial.css"

const testimonial = ({ name, quote, title, stars }) => {
  const titleContent = title ? (
    <span className="testimonial__title">, {title}</span>
  ) : null

  return (
    <div className="testimonial__container">
      <p className="testimonial__stars">{stars}</p>
      <p className="testimonial__quote">{quote}</p>
      <p className="testimonial__name">
        {name} {titleContent}
      </p>
    </div>
  )
}

export default testimonial
