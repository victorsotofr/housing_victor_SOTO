import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Apartment } from "@/types/apartment";

interface PropertyCardProps {
  property: Apartment;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-green-500";
      case "vacant":
        return "bg-yellow-500";
      case "maintenance":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.address}
          className="w-full h-full object-cover"
        />
        <Badge
          className={`absolute top-2 right-2 ${getStatusColor(property.status)}`}
        >
          {property.status}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <h3 className="font-semibold text-lg">{property.address}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">${property.rentAmount}/month</p>
        </div>
        {property.tenantName && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Tenant: {property.tenantName}
            </p>
            {property.leaseEnd && (
              <p className="text-sm text-gray-600">
                Lease ends: {new Date(property.leaseEnd).toLocaleDateString()}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};