import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, User, ArrowRight, Facebook, Twitter, Linkedin, ChevronDown, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Tenant",
      description: "Manage your rental with ease",
      icon: User,
      path: "/tenant",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Landlord",
      description: "Simplify your property management",
      icon: Home,
      path: "/landlord",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Agency",
      description: "Efficiently handle all your rentals in one place",
      icon: Building,
      path: "/agency",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  const handleRoleSelect = (path: string) => {
    navigate(path);
  };

  const scrollToRoles = () => {
    document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Welcome to GetARent
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 animate-fade-in">
            Simplifying Your Rental Experience
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 animate-fade-in">
            Whether you're a tenant, landlord, or agency, we've got you covered!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              className="animate-fade-in hover:scale-105 transition-transform"
              size="lg"
              onClick={scrollToRoles}
            >
              Get Started
              <ChevronDown className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="animate-fade-in hover:scale-105 transition-transform"
              size="lg"
            >
              Learn More
              <ExternalLink className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Role Selection */}
        <div id="roles" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role) => (
              <Card
                key={role.title}
                className="relative overflow-hidden cursor-pointer group animate-fade-in hover:shadow-lg transition-shadow"
                onClick={() => handleRoleSelect(role.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardHeader>
                  <role.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                    Get Started
                    <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Connect With Us</h3>
              <div className="flex space-x-6 mt-4">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;