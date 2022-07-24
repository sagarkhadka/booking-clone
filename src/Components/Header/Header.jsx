import React, { useState } from 'react'
import './Header.css'
import { MdOutlineLocalHotel, MdLocalAirport, MdCarRental, MdAttractions, MdOutlineLocalTaxi, MdBed, MdCalendarToday, MdPerson } from 'react-icons/md'
// Date Picker
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }
    return (
        <div className='header'>
            <div className={ type === "list" ? "headerContainer listMode" : "headerContainer" }>
                {/* Header Top Buttons */}
                <div className="headerList">
                    <div className="headerListItems active">
                        <MdOutlineLocalHotel />
                        <span>Stays</span>
                    </div>

                    <div className="headerListItems">
                        <MdLocalAirport size={20} />
                        <span>Flight</span>
                    </div>

                    <div className="headerListItems">
                        <MdCarRental size={20} />
                        <span>Car Rentals</span>
                    </div>

                    <div className="headerListItems">
                        <MdAttractions size={20} />
                        <span>Attractions</span>
                    </div>

                    <div className="headerListItems">
                        <MdOutlineLocalTaxi size={20} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                { type !== "list" &&
                    <>
                        <h1 className="headerTitle">
                            Find your next stay
                        </h1>
                        <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
                        <button className='headerBtn'>Sign in / Register</button>
                        {/* Header search fields */}
                        <div className="headerSearch">
                        {/* Field to search places */}
                        <div className="headerSearchItem">
                            <MdBed size={25} className='headerIcon' />
                            <input type="text" placeholder='Where are you going' className='headerSearchInput' />
                        </div>
                        {/* Field to select date */}
                        <div className="headerSearchItem">
                            <MdCalendarToday size={21} className='headerIcon calendar' />
                            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>
                                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}
                            </span>
                            {openDate && <DateRange editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />}
                        </div>
                        {/* Field to add person */}
                        <div className="headerSearchItem">
                            <MdPerson size={24} className='headerIcon' />
                            <span onClick={ () => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult | ${options.children} childern | ${options.room} room`}</span>
                            { openOptions && <div className="options">
                                {/* Adult */}
                                <div className="optionsItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button disabled={ options.adult <= 1 } className="btn optionCounterButton" onClick={ () => handleOption ('adult', 'd') }>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="btn optionCounterButton" onClick={ () => handleOption ('adult', 'i') }>+</button>
                                    </div>
                                </div>
                                {/* Children */}
                                <div className="optionsItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button disabled={ options.children <= 1 } className="btn optionCounterButton" onClick={ () => handleOption ('children', 'd') }>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="btn optionCounterButton" onClick={ () => handleOption ('children', 'i') }>+</button>
                                    </div>
                                </div>
                                {/* Room */}
                                <div className="optionsItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button disabled={ options.room<= 1 } className="btn optionCounterButton" onClick={ () => handleOption ('room', 'd') } >-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="btn optionCounterButton" onClick={ () => handleOption ('room', 'i') }>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* Search button */}
                        <div className="headerSerachItem">
                            <button className="headerBtn">Search</button>
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header
