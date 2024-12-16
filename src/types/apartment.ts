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
  documents?: {
    id: string;
    name: string;
    type: string;
    date: string;
    url: string;
  }[];
  maintenanceRequests?: {
    id: string;
    type: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    date: string;
    urgency: 'low' | 'medium' | 'high';
    images?: string[];
  }[];
  rentHistory?: {
    id: string;
    amount: number;
    date: string;
    status: 'paid' | 'pending' | 'late';
    receiptUrl?: string;
  }[];
}