import React from 'react';
import '../globals.css';
import VaseContainer from './VaseContainer';

const Features = () => {
  return (
    <div>
      <div className="grid h-[100vh] mb-20 lg:grid-cols-2 grid-cols-1">
        {/* First Column - Large screens */}
        <div className="lg:order-1 order-2 flex justify-center">
          <VaseContainer />
        </div>
        {/* Second Column */}
        <div className="p-4 flex flex-col justify-center content-center text-center lg:text-left lg:order-2 order-1">
          <div className="mb-16">
            <h1 className="text-4xl text-green-950 font-extrabold my-6">
              Transforming Your Online Experience with 3D
            </h1>
            <p>At luxrooms we specialize in creating immersive VR rooms and stunning 3D visualizers and configurators that bring your products to life.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <svg
                className="m-2"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                viewBox="0 0 1792 1792"
                id="Cube"
              >
                <path
                  d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z"
                  fill="#000000"
                  className="color000000 svgShape"
                />
              </svg>
              <h1 className="text-2xl text-green-950 font-extrabold my-6">
                VR Solutions
              </h1>
              <p>Step into a virtual world and explore your dream spaces with our VR rooms.</p>
            </div>
            <div>
              <svg
                className="m-2"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                viewBox="0 0 1792 1792"
                id="Cube"
              >
                <path
                  d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z"
                  fill="#000000"
                  className="color000000 svgShape"
                />
              </svg>
              <h1 className="text-2xl text-green-950 font-extrabold my-6">
                Products Visualization
              </h1>
              <p>Engage your customers with visually stunning and interactive 3D visualizers and configurators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
