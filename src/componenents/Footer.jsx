import React from 'react'

const Footer = ({changeModel}) => {
  return (
    <footer>
        <div className='bg-gradient'></div>
        <div>
            <h2>The Brutal Martial Landscape</h2>
            <h1>APOD PROJECT</h1>
        </div>
        <button onClick={ changeModel }>
            <i class="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer
