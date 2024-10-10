import React from 'react'

const Footer = ({changeModel, data}) => {
  return (
    <footer>
        <div className='bg-gradient'></div>
        <div>
            <h1>APOD PROJECT</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={ changeModel }>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer
