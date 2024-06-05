import React, { useState } from 'react';

const MediaTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const mediaContent = [
    {
      type: 'image',
      src: 'path-to-image1.jpg',
      description: 'This is the description for the first image.',
    },
    {
      type: 'video',
      src: 'path-to-video1.mp4',
      description: 'This is the description for the first video.',
    },
    // Add more media items as needed
  ];

  return (
    <div className="flex">
      <div className="w-1/2">
        {mediaContent[activeTab].type === 'image' ? (
          <img src={mediaContent[activeTab].src} alt="Media content" className="w-full h-auto" />
        ) : (
          <video src={mediaContent[activeTab].src} controls className="w-full h-auto"></video>
        )}
      </div>
      <div className="w-1/2 p-4">
        <div className="flex mb-4">
          {mediaContent.map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 mr-2 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab(index)}
            >
              Tab {index + 1}
            </button>
          ))}
        </div>
        <div>
          <p>{mediaContent[activeTab].description}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaTabs;
