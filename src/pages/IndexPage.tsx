import React from 'react';
import { Link } from 'react-router-dom';
import { clientConfigs } from '../data/clientConfigs';
import { themes } from '../styles/themes';

const IndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to the SAI Estimator</h1>
      <p className="text-xl mb-8 text-center text-gray-600">Please select a client to begin:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(clientConfigs).map(([clientId, config]) => {
          const theme = themes[config.theme as keyof typeof themes] || themes.default;
          
          return (
            <Link 
              key={clientId}
              to={`/${clientId}/welcome`} 
              className="block text-center hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div 
                className="border rounded-lg overflow-hidden h-full"
                style={{ borderColor: theme.primary }}
              >
                <div 
                  className="p-4 text-white font-semibold"
                  style={{ backgroundColor: theme.primary }}
                >
                  {config.name}
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600">Start Application</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default IndexPage;