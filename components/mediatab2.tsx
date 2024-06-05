// ./components/mediatab.tsx
"use client";

import React, { useState } from 'react';

const listItems = [
  {
    title: 'Deployment System',
    image: '../../../../images/deployment-system.png',
    content: 'A scalable deployment model using best-in-class distributed compute and deployment technologies ensuring that SuperDuper is deployed efficiently and securely with full production readiness to Kubernetes, Ray, Grafana, Vector-search service, Change data capture, Rest API interface, Jupyter Hub integration',
  },
  {
    title: 'Prebuilt AI Apps',
    image: '../../../../images/prebuilt.png',
    content:
      'Preconfigured AI apps templates including inhouse models on different data science disciplines to be enabled with proprietary data.',
  },
  {
    title: 'SuperDuper Core',
    image: '../../../../images/sddbcore.png',
    content:
      'framework that integrates self-hosted AI models as well as APIs directly with existing databases, simplifying AI development and deployment by transforming databases into AI environments, including inference, model training and vector search. For installation and use-cases see here on GitHub.',
  },
  {
    title: 'Admin User Interface',
    image: '../../../../images/adminui.png',
    content:
      ' GUI allowing the user/developer to manage and supervise their SuperDuper environment including: SuperDuper provisioning wizard for Kubernetes, Jupyter Hub interface, Monitoring interface via Grafana, Jobs dashboard, SuperDuperDB model monitoring',
  },
  {
    title: 'Low-Code Configurator',
    image: '../../../../images/lowcode.png',
    content:
      'GUI for applying, configuring and developing AI applications, use-cases/workflows in SuperDuper',
  },
  
];


const MediaTabs2 = () => {
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

export default MediaTabs2;
