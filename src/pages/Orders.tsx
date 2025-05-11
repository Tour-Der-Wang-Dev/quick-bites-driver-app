
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import CurrentDelivery from '@/components/CurrentDelivery';
import MapView from '@/components/MapView';

const activeDelivery = {
  id: 'order-1',
  restaurantName: 'Wang Noodles Express',
  restaurantAddress: '123 Sukhumvit Rd, Bangkok',
  customerName: 'Apinya Saetung',
  customerAddress: '456 Silom Rd, Bangkok',
  distance: 2.4,
  status: 'TO_DELIVERY' as const
};

const Orders: React.FC = () => {
  const [deliveryStatus, setDeliveryStatus] = useState<'TO_PICKUP' | 'TO_DELIVERY' | 'COMPLETED'>(activeDelivery.status);
  
  const handleUpdateDeliveryStatus = (id: string, status: 'TO_PICKUP' | 'TO_DELIVERY' | 'COMPLETED') => {
    setDeliveryStatus(status);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-white p-4 shadow-sm sticky top-0 z-10">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="active" className="text-sm">
              Active Orders
              <Badge variant="outline" className="ml-1 bg-wang-orange text-white">1</Badge>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="text-sm">
              Upcoming Orders
              <Badge variant="outline" className="ml-1">0</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </header>
      
      <main className="p-0">
        <Tabs defaultValue="active" className="w-full">
          <TabsContent value="active" className="m-0">
            <MapView showFullScreen={true} />
            
            <div className="absolute bottom-16 left-0 right-0 p-4">
              <CurrentDelivery 
                {...activeDelivery}
                status={deliveryStatus}
                onUpdateStatus={handleUpdateDeliveryStatus}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="m-0 p-4">
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 mt-4">
              <h3 className="text-wang-brown font-medium mb-2">No Upcoming Orders</h3>
              <p className="text-sm text-muted-foreground">
                Upcoming orders will appear here when you have scheduled deliveries.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Orders;
