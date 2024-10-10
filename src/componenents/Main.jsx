import React from 'react'
import mars_pic from '../assets/mars.png'

const Main = ({data}) => {
  return (
      <div className='img-container'>
        <img src={data.hdurl} alt='mars-default-picture' className='bg-image'/>
      </div>
  )
}

export default Main
