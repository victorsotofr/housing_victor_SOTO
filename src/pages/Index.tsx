import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="flex justify-end items-center p-4 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="flex gap-4">
          <Link 
            to="/signup"
            className="text-black font-bold hover:text-purple-500 transition-all"
          >
            Create an Account
          </Link>
          <Link 
            to="/signin"
            className="text-black font-bold hover:text-purple-500 transition-all"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent mb-6">
            GetARent.com
          </h1>
          <p className="text-lg text-gray-600">RentEasy</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-auto py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          {/* Logo */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
              GetARent.com
            </div>
          </div>

          {/* Product Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-black">Product</h3>
            <ul className="space-y-1">
              <li><Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/documentation" className="text-gray-600 hover:text-blue-600">Documentation</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-black">Company</h3>
            <ul className="space-y-1">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-2">
            <h3 className="font-semibold text-black">Legal</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link></li>
              <li><Link to="/license" className="text-gray-600 hover:text-blue-600">License</Link></li>
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
