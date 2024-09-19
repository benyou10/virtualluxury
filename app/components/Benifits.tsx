import React from 'react'
import ChairConf from './ChairConf'
import VaseContainer from './VaseContainer'

const Benifits = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 gap-7 h-[100vh]'>
        <div className='md:p-4 flex flex-col md:ml-8 justify-center content-center'>
                <div className='mb-16' >
                    <h1 className='text-4xl text-green-950 font-extrabold my-6'>Transforming Your Online Experience with 3D</h1>
                    <p>At luxrooms we specialize in creating immersive VR rooms and stunning 3D visualizers and configurators that bring your products to life.</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                    <svg className='m-2' xmlns="http://www.w3.org/2000/svg" width='60px' viewBox="0 0 1792 1792" id="Cube">
                      <path d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" fill="#000000" class="color000000 svgShape"></path>
                    </svg>
                    <h1 className='text-2xl mb-3 text-green-950 font-extrabold my-6'>VR Solutions</h1>
                    <p className='mr-2'>Step into a virtual world and explore your dream spaces with our VR rooms.</p>
                    </div>
                    <div>
                    <svg className='m-2' xmlns="http://www.w3.org/2000/svg" width='60px' viewBox="0 0 1792 1792" id="Cube">
                      <path d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" fill="#000000" class="color000000 svgShape"></path>
                    </svg>
                    <h1 className='text-2xl mb-3 text-green-950 font-extrabold my-6'>Products Visualization</h1>
                    <p>Engage your customers with visually stunning and interactive 3D visualizers and configurators.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
<ChairConf/>
            </div>
        </div>


    </div>
  )
}

export default Benifits