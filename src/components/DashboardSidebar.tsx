import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Building2, MessageSquare, Calendar, Users } from "lucide-react";
import { useLocation } from "react-router-dom";

const getTenantMenuItems = () => [
  { title: "Dashboard", icon: Home, url: "/tenant" },
  { title: "Search Properties", icon: Building2, url: "#" },
  { title: "My Applications", icon: Users, url: "#" },
  { title: "Messages", icon: MessageSquare, url: "#" },
];

const getLandlordMenuItems = () => [
  { title: "Dashboard", icon: Home, url: "/landlord" },
  { title: "My Properties", icon: Building2, url: "#" },
  { title: "Tenants", icon: Users, url: "#" },
  { title: "Messages", icon: MessageSquare, url: "#" },
  { title: "Calendar", icon: Calendar, url: "#" },
];

const getAgencyMenuItems = () => [
  { title: "Dashboard", icon: Home, url: "/agency" },
  { title: "Properties", icon: Building2, url: "#" },
  { title: "Clients", icon: Users, url: "#" },
  { title: "Messages", icon: MessageSquare, url: "#" },
  { title: "Calendar", icon: Calendar, url: "#" },
];

export function DashboardSidebar() {
  const location = useLocation();
  
  let menuItems = getTenantMenuItems();
  let roleLabel = "Tenant Portal";
  
  if (location.pathname.includes('landlord')) {
    menuItems = getLandlordMenuItems();
    roleLabel = "Landlord Portal";
  } else if (location.pathname.includes('agency')) {
    menuItems = getAgencyMenuItems();
    roleLabel = "Agency Portal";
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{roleLabel}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}