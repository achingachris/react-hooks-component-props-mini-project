import React from 'react'

const About = ({ src }) => {
  return (
    <aside>
      <img src={src} alt='blog logo' />
      <p>Linda is a beatiful smart woman who writes cool stuff in Spanish</p>
    </aside>
  )
}

export default About

About.defaultProps = {
  src: 'https://via.placeholder.com/215',
}
