import React from 'react'

const SiderBar = ({changeModel, data}) => {
  return (
    <div className='sidebar'>
      <div className="bg-overlay" onClick={ changeModel }></div>
      <div className="sidebar-contents">
            <h2>{data?.title}</h2>
            <div className='description-container'>
                <p className='description-title'>{data?.date}</p>
                <p>{data?.explanation}
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
