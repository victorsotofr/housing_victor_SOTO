import { useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PropertyForm } from "@/components/PropertyForm";
import { Plus } from "lucide-react";
import type { Apartment } from "@/types/apartment";

const mockProperties: Apartment[] = [
  {
    id: "1",
    address: "123 Main St, Suite 4B",
    status: "occupied",
    rentAmount: 2500,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60",
    tenantName: "John Doe",
    leaseEnd: "2024-12-31",
  },
  {
    id: "2",
    address: "456 Park Ave, Apt 7A",
    status: "vacant",
    rentAmount: 3000,
    imageUrl: "https://images.unsplash.com/photo-1560449752-09cfece3660b?w=800&auto=format&fit=crop&q=60",
  },
];

const LandlordDashboard = () => {
  const [properties, setProperties] = useState(mockProperties);
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false);

  const handleAddProperty = (propertyData: any) => {
    const newProperty = {
      id: (properties.length + 1).toString(),
      address: propertyData.title,
      status: "vacant",
      rentAmount: Number(propertyData.price),
      imageUrl: propertyData.images[0] || "https://images.unsplash.com/photo-1560449752-09cfece3660b?w=800&auto=format&fit=crop&q=60",
    };
    setProperties([...properties, newProperty]);
    setIsAddPropertyOpen(false);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">My Properties</h1>
              <p className="text-gray-600">Manage your rental properties</p>
            </div>
            <Dialog open={isAddPropertyOpen} onOpenChange={setIsAddPropertyOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Property
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Add New Property</DialogTitle>
                </DialogHeader>
                <PropertyForm onSubmit={handleAddProperty} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default LandlordDashboard;