import React from 'react'

function About({ about, image }) {
  return (
    <aside>
      <img src={image} alt='blog logo' />
      <p>{about}</p>
    </aside>
  )
}

export default About

About.defaultProps = {
  about: 'This blog is written by Linda.',
  image: 'https://via.placeholder.com/215',
}
