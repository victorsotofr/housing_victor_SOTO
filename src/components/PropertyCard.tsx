import { Apartment } from "@/types/apartment";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const statusColors = {
  vacant: "bg-yellow-500",
  occupied: "bg-green-500",
  maintenance: "bg-red-500",
};

const statusLabels = {
  vacant: "Vacant",
  occupied: "Occupied",
  maintenance: "Under Maintenance",
};

export const PropertyCard = ({ property }: { property: Apartment }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <img
          src={property.imageUrl}
          alt={property.address}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">{property.address}</h3>
          <Badge className={`${statusColors[property.status]} text-white`}>
            {statusLabels[property.status]}
          </Badge>
        </div>
        <p className="text-2xl font-bold mt-2">
          ${property.rentAmount.toLocaleString()}/month
        </p>
        {property.tenantName && (
          <p className="text-sm text-gray-600 mt-2">
            Tenant: {property.tenantName}
          </p>
        )}
        {property.leaseEnd && (
          <p className="text-sm text-gray-600">
            Lease ends: {new Date(property.leaseEnd).toLocaleDateString()}
          </p>
        )}
      </CardContent>
    </Card>
  );
};