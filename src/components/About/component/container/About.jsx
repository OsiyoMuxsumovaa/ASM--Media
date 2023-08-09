import React from 'react'
import "./About.css"
import MainCard from '../MainCard/MainCard'
import ServiceComponent from '../ServiceComponent/ServiceComponen'

const About = () => {
  return (
    <div className='about-container'>
        <MainCard/>
        <ServiceComponent/>
    </div>
  )
}

export default About