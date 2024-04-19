import Link from 'next/link'
import React from 'react'

function NavTiles() {
  return (
    <div className='flex flex-col '>
      <Link href={'#about'}>Tile1</Link>
      <Link href={'#projects'}>Tile2</Link>
      <Link href={'#gallery'}>Tile2</Link>
    </div>
  )
}

export default NavTiles