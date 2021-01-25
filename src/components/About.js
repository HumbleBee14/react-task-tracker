// import React from 'react'

import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <h4>Version 1.4.0</h4>
      {/* // < a href  REFRESHES the PAGE ! THerefor to prevent that we are using Link */}
      {/* <a href="/"> Go Back</a> */}
      <Link to="/">Go Back</Link>

    </div>
  )
}

export default About
