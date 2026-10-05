import React from 'react'
import Hero from '../Components/Hero'
import Browserrange from '../Components/Browserrange'
// import RoomInspiration from '../Components/RoomInspiration'
import Gallery from '../Components/Gallery'
import Products from '../Components/Products'
import "../App.css"

export default function Home() {
  return (
    <div>
      <Hero />
      <Browserrange />
      <Products />
      {/* <RoomInspiration /> */}
      <Gallery />
    </div>
  )
}
