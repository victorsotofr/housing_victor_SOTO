import { useState } from "react";
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
import { Plus, Edit, Trash2, AlertCircle } from "lucide-react";
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
    const newProperty: Apartment = {
      id: (properties.length + 1).toString(),
      address: propertyData.title,
      status: "vacant" as const,
      rentAmount: Number(propertyData.price),
      imageUrl: propertyData.images[0] || "https://images.unsplash.com/photo-1560449752-09cfece3660b?w=800&auto=format&fit=crop&q=60",
    };
    setProperties([...properties, newProperty]);
    setIsAddPropertyOpen(false);
  };

  const handleDeleteProperty = (id: string) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Landlord Portal</h1>
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
          <table className="w-full table-auto bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left py-3 px-4">Address</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Rent</th>
                <th className="text-left py-3 px-4">Tenant</th>
                <th className="text-left py-3 px-4">Lease End</th>
                <th className="text-left py-3 px-4">Notifications</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{property.address}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        property.status === "occupied"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {property.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">${property.rentAmount}</td>
                  <td className="py-3 px-4">
                    {property.tenantName || "N/A"}
                  </td>
                  <td className="py-3 px-4">
                    {property.leaseEnd || "N/A"}
                  </td>
                  <td className="py-3 px-4">
                    {property.leaseEnd &&
                      new Date(property.leaseEnd) < new Date() && (
                        <span className="flex items-center text-red-600">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Lease expired
                        </span>
                      )}
                    {!property.leaseEnd && (
                      <span className="text-gray-500">No notifications</span>
                    )}
                  </td>
                  <td className="py-3 px-4 flex space-x-4">
                    <Button
                      variant="ghost"
                      className="p-1 text-blue-600 hover:bg-blue-100"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="p-1 text-red-600 hover:bg-red-100"
                      onClick={() => handleDeleteProperty(property.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default LandlordDashboard;
