import React, { useState } from 'react'
import './List.css'
import Navbar from '../../Components/NavBar/Navbar.jsx'
import Headers from '../../Components/Header/Header.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import Searchitem from '../../Components/SearchItem/Searchitem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Headers type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
              {openDate && <DateRange onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date}  />}
            </div>
            <div className="lsItems">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" name="" id="" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" name="" id="" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} name="" id="" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} name="" id="" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} name="" id="" placeholder={options.room} />
                </div>
              </div>
            </div>
              <button>Search</button>
          </div>
          <div className="listResult">
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
    
  )
}

export default List
