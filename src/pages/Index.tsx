import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent mb-2">
            GetARent.com
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            RentEasy
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in">
            <Link 
              to="/tenant"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">Tenant</h3>
              <div className="relative">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <ArrowRight className="w-8 h-8 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link 
              to="/landlord"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">Landlord</h3>
              <div className="relative">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <ArrowRight className="w-8 h-8 text-green-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link 
              to="/agency"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">Agency</h3>
              <div className="relative">
                <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <ArrowRight className="w-8 h-8 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-auto py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-blue-600 text-sm">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm">Contact Information</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm">Contact Information</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-blue-600 text-sm">Help Center</Link></li>
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
                {/* SVGs for social icons */}
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                {/* SVGs for social icons */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                {/* SVGs for social icons */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                {/* SVGs for social icons */}
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
