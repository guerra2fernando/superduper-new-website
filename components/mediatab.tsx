// ./components/mediatab.tsx
"use client";

import React, { useState } from 'react';

const listItems = [
  {
    title: 'Install any AI model',
    image: '/images/code-1.png',
    content: 'Easily install and apply any AI model to your database.',
  },
  {
    title: 'Install any AI API',
    image: '/images/code-2.png',
    content: 'Integrate and use AI models from external API providers.',
  },
  {
    title: 'Forget manually setting up pipelines',
    image: '/images/code-3.png',
    content: 'Automatically create and apply data processing pipelines.',
  },
  {
    title: 'Outputs are stored directly in your database',
    image: '/images/code-4.png',
    content: 'Seamlessly store and retrieve model outputs in your database.',
  },
  {
    title: 'Enable and leverage vector-search over your own data',
    image: '/images/code-5.png',
    content: 'Implement vector-search capabilities to enhance data querying.',
  },
  {
    title: 'Outputs are calculated whenever new data is added to your data-backend',
    image: '/images/code-6.png',
    content: 'Ensure model outputs are updated in real-time as new data arrives.',
  },
  {
    title: 'Self-host your models to retain full control',
    image: '/images/code-7.png',
    content: 'Host your AI models locally to maintain complete control.',
  },
  {
    title: 'Train your models directly on the data in your database',
    image: '/images/code-8.png',
    content: 'Train AI models using the data stored in your database.',
  },
  {
    title: 'Support for any data-type',
    image: '/images/code-9.png',
    content: 'Easily define and work with custom data types.',
  },
];

const MediaTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-[1300px] w-4/5 mx-auto mt-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 flex items-center">
          <img src={listItems[activeTab].image} alt="Media content" className="w-full h-auto" />
        </div>
        <div className="col-span-4 flex flex-col justify-center">
          {listItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full px-4 py-2 mb-1 text-left font-medium text-slate-50 ${activeTab === index ? 'bg-blue-500' : 'bg-gray-800'}`}
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </button>
              {activeTab === index && (
                <div className="bg-gray-900 bg-opacity-75 p-4 text-sm text-slate-400">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaTabs;
