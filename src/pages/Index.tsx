import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignInDialog from "@/components/SignInDialog";
import { useState } from "react";

const Index = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInClick = () => {
    console.log("Opening sign in dialog");
    setIsSignInOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="flex justify-end items-center p-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="flex gap-4">
          <button
            onClick={handleSignInClick}
            className="text-black hover:text-purple-500 transition-all"
          >
            Create an Account
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-purple-500 font-bold hover:text-purple-600 transition-all">
              Sign In
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuItem onSelect={handleSignInClick}>
                <span className="w-full">Tenant</span>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleSignInClick}>
                <span className="w-full">Landlord</span>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleSignInClick}>
                <span className="w-full">Agency</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent mb-6">
            getarent.com
          </h1>
          <p className="text-lg text-gray-600">Rent. Reward.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-auto py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          {/* Logo */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
              getarent.com
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
            © {new Date().getFullYear()} getarent.com. All rights reserved.
          </p>
        </div>
      </footer>

      <SignInDialog
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </div>
  );
};

export default Index;
