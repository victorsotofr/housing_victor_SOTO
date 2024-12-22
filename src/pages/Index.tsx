import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header with Auth Buttons */}
      <header className="w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-end gap-4">
          <button className="text-[#9b87f5] hover:bg-purple-50 px-4 py-2 rounded-md transition-colors">
            Create an Account
          </button>
          <button className="text-[#9b87f5] hover:bg-purple-50 px-4 py-2 rounded-md transition-colors">
            Sign in
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent mb-6">
            GetARent.com
          </h1>
          <p className="text-lg text-gray-600 mb-12">RentEasy</p>

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

      {/* New Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
              GetARent.com
            </h2>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Product Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-black text-lg">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Documentation</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-black text-lg">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Careers</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-black text-lg">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">License</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;