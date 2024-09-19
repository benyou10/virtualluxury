import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 gap-7 px-16 py-9'>
           <div className='flex flex-col'>
            <p className='font-extrabold'>Talent</p>
            <h1 className='font-extrabold text-6xl text-green-950 my-4'>Our Team</h1>
            <p>Passionate about creating immersive 3D experiences for our clients.</p>

           </div>
           <div className='flex flex-col'>
            <div className='flex mb-10'>
<Image src='/IMG_20230520_170007~2cccc.jpg' alt='avatar' width={100} height={100}/>
<div className=' mx-5 flex flex-col'>
    <h1 className='font-extrabold'>youcef benziane</h1>
    <p>Lead Developer</p>

</div>
            </div>
            <div className='flex'>
<Image src='/IMG_20230520_170007~2cccc.jpg' alt='avatar' width={100} height={100}/>
<div className=' mx-5 flex flex-col'>
    <h1 className='font-extrabold'>youcef benziane</h1>
    <p>Lead Developer</p>

</div>
            </div>

           </div>

        </div>
    </div>
  )
}

export default Team