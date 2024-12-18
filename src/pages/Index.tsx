const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in mb-8">
        GetARent.com
      </h1>
      <p className="text-lg text-gray-700 mb-6">Choose your role to get started:</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition duration-300">
          Tenant
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded shadow-md hover:bg-green-700 transition duration-300">
          Landlord
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded shadow-md hover:bg-purple-700 transition duration-300">
          Agency
        </button>
      </div>
    </div>
  );
};

export default Index;
