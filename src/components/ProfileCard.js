import React from 'react'
import './Card.css'
import Pic from '../image/profile.jpg'

function ProfileCard ({name,job,about}) { 
  return (
    <div className='Card'>
        <div className='top-container'>
            <div className='image-container'>
                <img src={Pic} alt='' height='100px' width='100px' /> 
            </div>
        </div>
        <div className='botton-container'>
            <h3> {name} </h3>
            <h4> {job} </h4>
            <p> {about} </p>
            <button className="message">
                Message
            </button>
            <button className="follow">
                Follow Me
            </button>
        </div>
    </div>
  )
}

export default ProfileCard