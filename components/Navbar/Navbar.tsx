import React from 'react'
import NameCard from './NameCard'
import NavTiles from './NavTiles'
import Socials from './Socials'

function Navbar() {
  return (
    <div className=''>
        <NameCard/>
        <NavTiles/>
        <Socials/>
    </div>
  )
}

export default Navbar