export interface Apartment {
  id: string;
  address: string;
  status: 'vacant' | 'occupied' | 'maintenance';
  rentAmount: number;
  imageUrl: string;
  tenantName?: string;
  leaseEnd?: string;
  description?: string;
  location?: {
    lat: number;
    lng: number;
  };
  images?: string[];
}