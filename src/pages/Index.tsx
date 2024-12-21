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
            <ul className="space-y-1">
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@getarent.com" 
                  className="text-gray-600 hover:text-blue-600"
                >
                  Mail
                </a>
              </li>
            </ul>
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
