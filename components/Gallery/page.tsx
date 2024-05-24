import React from 'react'
import Fetch from './fetch'
function page() {
  return (
    <div className='flex flex-col gap-5 mt-5'>
      <div className='font-semibold text-xl'>Photo Gallery</div>
      <Fetch/>
    </div>
    )
}

export default page