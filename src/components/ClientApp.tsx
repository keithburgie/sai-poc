import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Welcome from '../pages/Welcome';
import FormPage from '../pages/FormPage';
import Completion from '../pages/Completion';
import Header from './Header';
import Footer from './Footer';

const ClientApp: React.FC = () => {
  useTheme();

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <Routes>
                <Route path="welcome" element={<Welcome />} />
                <Route path="survey" element={<FormPage />} />
                <Route path="completion" element={<Completion />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientApp;