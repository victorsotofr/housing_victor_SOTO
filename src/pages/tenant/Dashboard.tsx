import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import {
  Bell,
  FileText,
  CreditCard,
  MessageSquare,
  Wrench,
  Info,
  CheckCircle,
  Clock,
} from "lucide-react";

const TenantDashboard = () => {
  const { toast } = useToast();
  const [rentProgress] = useState(75);

  const quickActions = [
    { icon: CreditCard, label: "Pay Rent", action: () => toast({ title: "Redirecting to payment portal..." }) },
    { icon: Wrench, label: "Report Issue", action: () => toast({ title: "Opening maintenance request form..." }) },
    { icon: FileText, label: "View Lease", action: () => toast({ title: "Opening lease document..." }) },
  ];

  const recentNotifications = [
    { icon: Bell, message: "Rent due in 5 days", type: "warning" },
    { icon: Wrench, message: "Maintenance request updated", type: "info" },
    { icon: MessageSquare, message: "New message from landlord", type: "message" },
  ];

  const maintenanceRequests = [
    { id: 1, issue: "Plumbing repair", status: "In Progress", date: "2024-03-15" },
    { id: 2, issue: "HVAC maintenance", status: "Completed", date: "2024-03-10" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Tenant Portal</h1>
              </div>
              <Button variant="outline" className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Button
                      variant="ghost"
                      className="w-full h-full flex flex-col items-center gap-3 py-6"
                      onClick={action.action}
                    >
                      <action.icon className="h-8 w-8" />
                      <span className="font-medium">{action.label}</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Rent Status */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Rent Status</h3>
                    <span className="text-sm text-gray-500">Due in 5 days</span>
                  </div>
                  <Progress value={rentProgress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Monthly Rent: $2,500</span>
                    <span className="text-green-600">Paid: $1,875</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Notifications */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Recent Updates</h3>
                  <div className="space-y-3">
                    {recentNotifications.map((notification, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <notification.icon className="h-4 w-4 text-primary" />
                        <span>{notification.message}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Maintenance Requests */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Maintenance Requests</h3>
                  <div className="space-y-3">
                    {maintenanceRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {request.status === "Completed" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Clock className="h-4 w-4 text-yellow-500" />
                          )}
                          <span>{request.issue}</span>
                        </div>
                        <span className="text-sm text-gray-500">{request.status}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tips Section */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Helpful Tips</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Set up automatic rent payments to avoid late fees</p>
                    <p>• Document any maintenance issues with photos</p>
                    <p>• Keep your contact information up to date</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default TenantDashboard;
