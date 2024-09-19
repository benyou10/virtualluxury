import React from 'react'
import '../globals.css'
const CTA = () => {
  return (
    <div>
        <div className='flex  content-center align-middle   justify-center '>
        <div className='flex text-center flex-col content-center align-middle justify-center '>
            <h1 className='text-6xl text-center  mb-6 line-clamp-2  text-green-950 font-extrabold mt-20'>Transforming your web experience with 3D</h1>
            <p className='mb-5  line-clamp-2'>Immerse yourself in stunning 3D visuals that bring your ideas and art to life.</p>
            <div className="input-group flex my-4 justify-center">
            <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="contact@virtualluxury.studio" />
</label>    <input className="btn " value="contact" type="submit"/>
</div>
            <p>By clicking Sign Up you will recieve our latests offers</p>
            <div className="flex justify-center mt-20">
  <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
    <h1 className="text-green-950 font-extrabold text-3xl lg:text-4xl">three.js</h1>
    <h1 className="text-green-950 font-extrabold text-3xl lg:text-4xl">Next.js</h1>
    <h1 className="text-green-950 font-extrabold text-3xl lg:text-4xl">WebGL</h1>
    <h1 className="text-green-950 font-extrabold text-3xl lg:text-4xl">blender</h1>
    <h1 className="text-green-950 font-extrabold text-3xl lg:text-4xl">html/css</h1>
    <h1 className="text-green-950 font-extrabold text-3xl lg:text-4xl">react</h1>
    <h1 className="text-green-950 font-extrabold text-3xl lg:text-4xl">R3F</h1>
  </div>
</div>

            </div>
        </div>
    </div>
  )
}

export default CTA