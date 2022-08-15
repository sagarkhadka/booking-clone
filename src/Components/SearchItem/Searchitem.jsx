import React from 'react'
import './Searchitem.css'

const Searchitem = () => {
  return (
    <div className='searchItem'>
      <img className='siImg' src='https://images.unsplash.com/photo-1600612294445-5e1153e3e4a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' ></img>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
            Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">
            Entire studio | 1 bathroom | 21msq. 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today !
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$444</span>
            <span className="siTaxOp">Includes tax & fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default Searchitem
