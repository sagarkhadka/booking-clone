import React from 'react'
import Features from '../../Components/Featured/Features'
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Maillist from '../../Components/MailList/Maillist'
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
        <h1 className="homeTitle">Browse guests love</h1>
        <FeaturedProperties />
        <Maillist />
        <Footer />
      </div>
    </div>
  )
}

export default Home
