import { PropertyCard } from "@/components/PropertyCard";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Building2, MessageSquare, Users } from "lucide-react";
import type { Apartment } from "@/types/apartment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PropertyAnalytics } from "@/components/analytics/PropertyAnalytics";

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

const recentApplications = [
  { id: 1, tenant: "Sarah Johnson", property: "123 Main St", status: "Pending Review", date: "2024-03-15" },
  { id: 2, tenant: "Michael Chen", property: "456 Park Ave", status: "Approved", date: "2024-03-14" },
  { id: 3, tenant: "Emma Davis", property: "789 Oak Rd", status: "Under Review", date: "2024-03-13" },
];

const AgencyDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Agency Portal</h1>
          </div>

          {/* Analytics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="flex items-center p-6">
                <Building2 className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Properties</p>
                  <h3 className="text-2xl font-bold">24</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <Users className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Tenants</p>
                  <h3 className="text-2xl font-bold">18</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <MessageSquare className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-600">New Messages</p>
                  <h3 className="text-2xl font-bold">7</h3>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <BarChart className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
                  <h3 className="text-2xl font-bold">75%</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <PropertyAnalytics />
          </div>

          {/* Recent Applications */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.tenant}</TableCell>
                      <TableCell>{application.property}</TableCell>
                      <TableCell>{application.status}</TableCell>
                      <TableCell>{application.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Property Listings */}
          <Card>
            <CardHeader>
              <CardTitle>Property Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AgencyDashboard;
