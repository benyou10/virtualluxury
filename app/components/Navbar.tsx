import Link from 'next/link'
import React from 'react'
import '../globals.css'
const Navbar = () => {
  return (
    <div>
      <div className='flex text-xl justify-between fixed z-50 bg-base-100/70 backdrop-blur-lg w-full border-b-2   p-2   '>
<div className='flex w-[45%] justify-between'>
    <Link href="/" className='text-3xl text-green-950  font-extrabold'>VirtualLuxury</Link>
    <div className='my-2 md:visible invisible'>
      <Link className='mx-3 text-green-950 text-base' href="#">Testimonials</Link>
      <Link className='mx-3 text-green-950 text-base' href="#">Team</Link>
      <Link className='mx-3 text-green-950  text-base' href="#">Timeline</Link>
      <Link className='mx-3 text-green-950  text-base' href="blogs">Blogs</Link>

  
    </div>
</div>
<input className="btn mr-12 " value="contact" type="submit"/>
      </div>
    </div>
  )
}

export default Navbar