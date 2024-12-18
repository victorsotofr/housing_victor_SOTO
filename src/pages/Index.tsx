const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in mb-8">
        GetARent.com
      </h1>
      <p className="text-lg text-gray-700 mb-6">Choose your role to get started:</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="/tenant/dashboard"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center min-w-[140px]"
        >
          Tenant
        </a>
        <a 
          href="/landlord/dashboard"
          className="px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-center min-w-[140px]"
        >
          Landlord
        </a>
        <a 
          href="/agency/dashboard"
          className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 text-center min-w-[140px]"
        >
          Agency
        </a>
      </div>
    </div>
  );
};

export default Index;