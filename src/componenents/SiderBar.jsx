import React from 'react'

const SiderBar = ({changeModel}) => {
  return (
    <div className='sidebar'>
      <div className="bg-overlay" onClick={ changeModel }></div>
      <div className="sidebar-contents">
            <h2>The Brutal martial Landscape</h2>
            <div>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                    reiciendis cumque accu
                </p>
            </div>
            <button onClick={changeModel}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>  
    </div>
  )
}

export default SiderBar
