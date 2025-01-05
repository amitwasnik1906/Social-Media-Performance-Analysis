"use client"
import { useState } from 'react';
import Chatbox from './Chatbox';

const Header = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-center">
            {/* <p className="text-sm">Team</p> */}
            <span className="text-2xl font-bold text-gray-800">Axios</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#analysis"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Analysis
              </a>
              <a
                href="#insights"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Insights
              </a>
              <a
                href="#recommendations"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Recommendations
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>

            </div>
          </div>

          {/* Chat Button */}
          <div>
            <button 
              onClick={() => setShowChat(true)}
              className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              Chat
            </button>
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      {showChat && (
        <div className="fixed inset-y-0 right-0 w-[440px] bg-white shadow-xl z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-2xl font-semibold" style={{ background: 'linear-gradient(to right, #9f9f9f, #818181 20%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Chat</h2>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <Chatbox />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
