import React from 'react';
import '../globals.css';
import VideoComponent from './VideoComponent';

const Header = () => {
  return (
    <div className="grid h-[90vh] w-full lg:m-0 mb-52 lg:grid-cols-2 grid-cols-1">
      {/* Left Column: Header Content */}
      <div className="m-3 flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl pr-4">
          Transforming the Web with Stunning 3D Visuals
        </h1>
        <p className="my-4 lg:my-8">
          Experience the power of immersive 3D web development.
        </p>
        <div className="input-group flex flex-col lg:flex-row items-center gap-2">
        <h1 className='font-extrabold text-2xl'>admin@luxurialspace.studio</h1>
        </div>
      </div>

      {/* Right Column: Video Component */}
      <VideoComponent />
    </div>
  );
};

export default Header;
