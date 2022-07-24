import React from 'react'
import Features from '../../Components/Featured/Features'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/NavBar/Navbar'
import Propertylist from '../../Components/propertyList/Propertylist'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <Propertylist />
      </div>
    </div>
  )
}

export default Home
