import Image from 'next/image'
import React from 'react'

const TimeLine = () => {
  return (
    <div>


<div>
        <div className='flex  content-center justify-center '>
        <div className='flex timeline text-center flex-col content-center align-middle justify-center '>
            <h1 className=' text-center  mb-6 max-w-[900px] text-green-950 font-extrabold mt-20 '>Innovative</h1>
            <h1 className='text-6xl text-center  mb-6 max-w-[900px] text-green-950 font-extrabold my-3'>Transforming the Way You Experience the Web</h1>
            <p className='mb-5 max-w-[900px]'>At 3dluxery, we specialize in creating immersive 3D web experiences that bring your products to life. Our cutting-edge technology and expert team will revolutionize the way you engage with your customers.</p>
        
            
            <div className='flex justify-center mt-20  p-10'>
            <ul className="timeline md:timeline-horizontal timeline-vertical">
  <li>
  <Image alt="design" className='timeline-start  timeline-box' src="/Screenshot 2024-09-11 at 15-58-22 Relume Site Builder.png" width={150} height={150}/>

    <div className="timeline-end timeline-box">design</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <Image alt="design" className='timeline-start  timeline-box' src="/Screenshot at 2024-09-11 16-28-20.png" width={150} height={150}/>
    <div className="timeline-end timeline-box">3d modeling</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <Image alt="design" className='timeline-start  timeline-box' src="/Screenshot at 2024-09-11 16-32-00.png" width={150} height={150}/>
    <div className="timeline-end timeline-box">coding</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
 
  <li>
    <hr />
    <Image alt="design" className='timeline-start  timeline-box' src="/Screenshot 2024-09-11 at 20-09-47 Create Next App.png" width={150} height={150}/>

    <div className="timeline-end timeline-box">results</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
  </li>
</ul>            
              
            </div>
            
            </div>
            
            
        </div>
        
    </div>

    </div>
  )
}

export default TimeLine