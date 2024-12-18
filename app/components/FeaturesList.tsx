import React from 'react';

const FeaturesList = () => {
  return (
    <div className="w-full px-6 py-20 md:px-12 md:py-32 bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <p className="font-bold text-gray-600 uppercase tracking-widest mb-2">Revolutionize</p>
        <h1 className="font-extrabold text-4xl md:text-5xl text-green-950 leading-snug mb-6">
          Unlock the Power of 3D Web Development
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Experience immersive virtual reality rooms and interactive 3D product visualizers and configurators that will take your online business to the next level.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch mt-12 gap-10 md:gap-16">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center md:w-1/3 px-4">
          <svg className="m-2 w-12 h-12 text-green-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
            <path d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" />
          </svg>
          <h2 className="font-extrabold text-2xl md:text-3xl text-green-950 mt-6 mb-3">
            Boost Engagement and Sales
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Capture your customers&apos; attention with stunning 3D visuals and provide them with an interactive and personalized shopping experience.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center md:w-1/3 px-4">
          <svg className="m-2 w-12 h-12 text-green-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
            <path d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" />
          </svg>
          <h2 className="font-extrabold text-2xl md:text-3xl text-green-950 mt-6 mb-3">
            Enhance User Experience
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Delight your website visitors with seamless navigation and intuitive controls, making it easy for them to explore and interact with your products.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center md:w-1/3 px-4">
          <svg className="m-2 w-12 h-12 text-green-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
            <path d="m896 1629 640-349V644L896 877v752zm-64-865 698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16L67 1392q-31-17-49-47t-18-65V512q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z" />
          </svg>
          <h2 className="font-extrabold text-2xl md:text-3xl text-green-950 mt-6 mb-3">
            Stand Out from the Competition
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Differentiate your brand with cutting-edge 3D web development solutions that will leave a lasting impression on your target audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
