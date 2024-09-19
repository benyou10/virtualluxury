'use client'
import { useState } from 'react';

export default function VideoComponent() {
  // State to track the current video index
  const [videoIndex, setVideoIndex] = useState(0);

  // Array of video sources
  const videos = [
    "/videos/2024-03-29 16-43-47.mp4",
    "/videos/2024-03-29 18-02-00.mp4",
    "/videos/2024-06-10 15-31-47.mp4",
  ];

  // Function to go to the next video
  const handleNextVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous video
  const handlePrevVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className='flex flex-col'>
      <video
        className='opacity-90'
        src={videos[videoIndex]}
        autoPlay
        loop
        muted
        typeof="video/mp4"
      />
      <div className='bg-opacity-80 bg-primary-content flex flex-col p-5 justify-center h-full'>
        <h2 className='text-2xl'>Unlock Your Imagination</h2>
        <p>Create interactive 3D experiences that captivate your audience.</p>
        <div className='mt-4 flex justify-end'>
          {/* Button to go to the previous video */}
          <button className="button" onClick={handlePrevVideo}>
            <div className="button-box">
              <span className="button-elem">
                <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                  ></path>
                </svg>
              </span>
            </div>
          </button>

          {/* Button to go to the next video */}
          <button className="button" onClick={handleNextVideo}>
            <div className="button-box">
              <span className="button-elem-right">
                <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                  ></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
