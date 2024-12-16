import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, User, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const roles = [
    {
      title: "Tenant",
      description: "Manage your rental with ease",
      icon: User,
      path: "/tenant/dashboard",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Landlord",
      description: "Simplify your property management",
      icon: Home,
      path: "/landlord/dashboard",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Agency",
      description: "Efficiently handle all your rentals in one place",
      icon: Building,
      path: "/agency/dashboard",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  const handleRoleSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto pt-20 pb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Welcome to GetARent
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 animate-fade-in">
            Simplifying Your Rental Experience
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400 animate-fade-in">
            Whether you're a tenant, landlord, or agency, we've got you covered!
          </p>
          <Button
            className="mt-8 animate-fade-in hover:scale-105 transition-transform"
            size="lg"
            onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Role Selection */}
        <div id="roles" className="w-full max-w-6xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {roles.map((role) => (
              <Card
                key={role.title}
                className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in cursor-pointer group"
                onClick={() => handleRoleSelect(role.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <CardHeader className="text-center">
                  <role.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    Continue as {role.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <div className="flex space-x-6 md:justify-end">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} GetARent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;