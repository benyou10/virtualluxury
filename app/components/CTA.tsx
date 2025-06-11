import React from 'react';
import '../globals.css';

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Header Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-950 mb-6 leading-tight">
          Transforming your web experience with 3D
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Immerse yourself in stunning 3D visuals that bring your ideas and art to life.
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="relative w-full sm:w-auto">
           <h1 className='font-extrabold text-2xl'>admin@luxurialspace.studio</h1>
          </div>
          
        </div>

       
      </div>

      {/* Tools Section */}
      <div className="mt-16 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
          {[
            'three.js',
            'Next.js',
            'WebGL',
            'blender',
            'html/css',
            'react',
            'R3F',
          ].map((tool, index) => (
            <div key={index} className="text-green-950 font-extrabold text-2xl sm:text-3xl hover:scale-105 transition-transform duration-300">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTA;
