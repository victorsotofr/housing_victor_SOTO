import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { PropertyCard } from "@/components/PropertyCard";
import type { Apartment } from "@/types/apartment";

// Mock data for initial display
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
  {
    id: "3",
    address: "789 Broadway, Unit 12C",
    status: "maintenance",
    rentAmount: 2800,
    imageUrl: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&auto=format&fit=crop&q=60",
  },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Property Dashboard</h1>
            <p className="text-gray-600">Manage your rental properties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;