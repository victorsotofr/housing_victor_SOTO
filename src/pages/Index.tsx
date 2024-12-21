import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent mb-6">
            GetARent.com
          </h1>
          <p className="text-lg text-gray-600 mb-12">RentEasy</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/tenant"
              className="bg-white text-gray-800 text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 hover:shadow-md transition-all"
            >
              Tenant
            </Link>
            <Link 
              to="/landlord"
              className="bg-white text-gray-800 text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 hover:shadow-md transition-all"
            >
              Landlord
            </Link>
            <Link 
              to="/agency"
              className="bg-white text-gray-800 text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 hover:shadow-md transition-all"
            >
              Agency
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-auto py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/help" className="text-gray-600 hover:text-blue-600">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact Information</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">General Conditions</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Connect With Us</h3>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.197 24v-9.362H6.5V11.15h2.697V8.725c0-2.673 1.628-4.125 4.005-4.125 1.136 0 2.113.084 2.395.121v2.776l-1.645.001c-1.29 0-1.538.613-1.538 1.51v1.984h3.074l-.4 3.488H12.71V24" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.452 20.452h-3.73v-6.433c0-1.533-.027-3.507-2.14-3.507-2.145 0-2.474 1.675-2.474 3.404v6.536h-3.728V9.75h3.583v1.457h.05c.498-.943 1.715-1.94 3.53-1.94 3.775 0 4.471 2.482 4.471 5.715v6.47zM5.337 8.293c-1.202 0-2.174-.972-2.174-2.174 0-1.202.972-2.175 2.174-2.175s2.174.973 2.174 2.175c0 1.202-.972 2.174-2.174 2.174zM6.667 20.452H3.91V9.75h2.757v10.702zM22.225 0H1.774C.8 0 0 .774 0 1.726v20.548C0 23.226.8 24 1.774 24h20.451c.973 0 1.774-.774 1.774-1.726V1.726C24 .774 23.198 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.5 2C4.465 2 2 4.462 2 7.5v9c0 3.038 2.465 5.5 5.5 5.5h9c3.037 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.537 2 16.5 2h-9zM12 6.572a5.429 5.429 0 110 10.858A5.429 5.429 0 0112 6.572zm0 1.856a3.573 3.573 0 100 7.144 3.573 3.573 0 000-7.144zm4.715-2.286a1.072 1.072 0 110 2.144 1.072 1.072 0 010-2.144z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} GetARent.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
