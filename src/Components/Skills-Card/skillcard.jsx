import React from 'react'
import './skillcard.css'

 
const skillcard = ({image, hovertitle, hoverdetail, button}) => {
  return (
    <div className='skill-card'>
      <img src={image} alt="image" className='card-img'/>
      <div className='card-body'>
        <h1 className='card-title'>
          {hovertitle}
        </h1>
        <spane className='card-info'>
          {hoverdetail}
        </spane>
       <a href="#" target='_blank'><button className='c-button'>Read More{button} </button></a>
      </div>
    </div>
  )
}

export default skillcard
