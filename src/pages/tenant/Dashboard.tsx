import { useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { MapPin, Search, Sliders } from "lucide-react";
import Map from "@/components/Map";
import type { Apartment } from "@/types/apartment";

const mockProperties: Apartment[] = [
  {
    id: "1",
    address: "123 Main St, Suite 4B",
    status: "vacant",
    rentAmount: 2500,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60",
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: "2",
    address: "456 Park Ave, Apt 7A",
    status: "vacant",
    rentAmount: 3000,
    imageUrl: "https://images.unsplash.com/photo-1560449752-09cfece3660b?w=800&auto=format&fit=crop&q=60",
    location: { lat: 40.7589, lng: -73.9851 }
  },
];

const TenantDashboard = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = mockProperties.filter(property => {
    const matchesPrice = property.rentAmount >= minPrice && property.rentAmount <= maxPrice;
    const matchesSearch = property.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPrice && matchesSearch;
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold">Find Your Next Home</h1>
            
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Sliders className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="p-4 bg-white rounded-lg shadow space-y-4">
                <h3 className="font-semibold">Price Range</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[minPrice, maxPrice]}
                    max={10000}
                    step={100}
                    onValueChange={([min, max]) => {
                      setMinPrice(min);
                      setMaxPrice(max);
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="h-[400px] rounded-lg overflow-hidden">
                <Map properties={filteredProperties} />
              </div>
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default TenantDashboard;