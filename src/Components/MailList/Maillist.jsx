import React from 'react'
import './Maillist.css'
import { FiSend } from 'react-icons/fi'

const Maillist = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitle">Save Time, Save Money !</h1>
      <span className="mailDesc">Sign up and we'll send</span>
      <div className="mailInputContainer">
        <input type="text" name="" id="" placeholder='Your Email' />
        <button>Send  <FiSend /></button>
      </div>
    </div>
  )
}

export default Maillist
