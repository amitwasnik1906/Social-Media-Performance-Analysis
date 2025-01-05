"use client"

const Header = () => {
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
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out">
              Chat
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
