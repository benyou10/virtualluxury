import React from 'react';
import '../globals.css';
import VaseContainer from './VaseContainer';

const Features = () => {
  return (
    <div className="grid h-[100vh] mb-20 lg:grid-cols-2 grid-cols-1">
    {/* First Column - Large screens */}
    <div className="lg:order-1 order-2 flex justify-center">
      <VaseContainer />
    </div>

      {/* Right Column - Text Content */}
      <div className="p-8 lg:p-16 flex flex-col justify-center lg:order-2 order-1">
        {/* Title and Description */}
        <div className="text-center lg:text-left mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-green-900 mb-6">
            Transforming Your Online Experience with 3D
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At luxrooms we specialize in creating immersive VR rooms and stunning
            3D visualizers and configurators that bring your products to life.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* VR Solutions */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <svg
              className="w-14 h-14 mb-4 text-green-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              fill="currentColor"
            >
              <path d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" />
            </svg>
            <h2 className="text-2xl font-extrabold text-green-950 mb-2">
              VR Solutions
            </h2>
            <p className="text-gray-600">
              Step into a virtual world and explore your dream spaces with our VR
              rooms.
            </p>
          </div>

          {/* Products Visualization */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <svg
              className="w-14 h-14 mb-4 text-green-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              fill="currentColor"
            >
              <path d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" />
            </svg>
            <h2 className="text-2xl font-extrabold text-green-950 mb-2">
              Products Visualization
            </h2>
            <p className="text-gray-600">
              Engage your customers with visually stunning and interactive 3D
              visualizers and configurators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
