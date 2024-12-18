import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in mb-8">
          GetARent.com
        </h1>
        <p className="text-xl text-gray-700 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Your one-stop platform for seamless property management and rental solutions
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link 
            to="/tenant"
            className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">Tenant</h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                Find your perfect rental property and manage your tenancy
              </p>
            </div>
          </Link>

          <Link 
            to="/landlord"
            className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">Landlord</h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                Efficiently manage your properties and tenants
              </p>
            </div>
          </Link>

          <Link 
            to="/agency"
            className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">Agency</h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                Streamline your property management business
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;