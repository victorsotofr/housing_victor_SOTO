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
              className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-blue-700 transition"
            >
              Tenant
            </Link>
            <Link 
              to="/landlord"
              className="bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-green-700 transition"
            >
              Landlord
            </Link>
            <Link 
              to="/agency"
              className="bg-purple-600 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-purple-700 transition"
            >
              Agency
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-auto py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-blue-600 text-sm">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm">Contact Information</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600 text-sm">General Conditions</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                {/* Twitter Icon */}
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                {/* Facebook Icon */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                {/* LinkedIn Icon */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                {/* Instagram Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} GetARent.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
