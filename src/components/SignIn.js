import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Sign In</h2>
        <p className="text-gray-600 mb-8">Select your role to access the dashboard.</p>

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
    </div>
  );
};

export default SignIn;
