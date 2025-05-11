
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import MapView from './MapView';

interface CurrentDeliveryProps {
  id: string;
  restaurantName: string;
  restaurantAddress: string;
  customerName: string;
  customerAddress: string;
  distance: number;
  status: 'TO_PICKUP' | 'TO_DELIVERY' | 'COMPLETED';
  onUpdateStatus: (id: string, status: 'TO_PICKUP' | 'TO_DELIVERY' | 'COMPLETED') => void;
}

const CurrentDelivery: React.FC<CurrentDeliveryProps> = ({
  id,
  restaurantName,
  restaurantAddress,
  customerName,
  customerAddress,
  distance,
  status,
  onUpdateStatus
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateStatus = () => {
    setIsLoading(true);
    setTimeout(() => {
      let newStatus: 'TO_PICKUP' | 'TO_DELIVERY' | 'COMPLETED';
      
      if (status === 'TO_PICKUP') {
        newStatus = 'TO_DELIVERY';
      } else if (status === 'TO_DELIVERY') {
        newStatus = 'COMPLETED';
      } else {
        newStatus = 'COMPLETED';
      }
      
      onUpdateStatus(id, newStatus);
      setIsLoading(false);
    }, 500);
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'TO_PICKUP':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Heading to Pickup</Badge>;
      case 'TO_DELIVERY':
        return <Badge className="bg-wang-orange hover:bg-wang-darkOrange">Heading to Customer</Badge>;
      case 'COMPLETED':
        return <Badge className="bg-green-500 hover:bg-green-600">Delivered</Badge>;
      default:
        return null;
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'TO_PICKUP':
        return 'Arrived at Restaurant';
      case 'TO_DELIVERY':
        return 'Delivered to Customer';
      default:
        return 'Complete';
    }
  };

  return (
    <Card className="overflow-hidden shadow-md border-0">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-wang-brown">
              {status === 'TO_PICKUP' ? restaurantName : customerName}
            </h3>
            {getStatusBadge()}
          </div>

          <MapView showFullScreen={false} />
          
          <div className="mt-3 space-y-3">
            <div className="flex items-start gap-2">
              <MapPin size={18} className="text-wang-orange min-w-[18px] mt-0.5" />
              <div>
                <p className="text-sm font-medium">Pickup</p>
                <p className="text-xs text-muted-foreground">{restaurantAddress}</p>
              </div>
            </div>
            
            <div className="pl-2.5">
              <ArrowRight size={14} className="text-gray-400 rotate-90" />
            </div>
            
            <div className="flex items-start gap-2">
              <MapPin size={18} className="text-wang-darkOrange min-w-[18px] mt-0.5" />
              <div>
                <p className="text-sm font-medium">Delivery</p>
                <p className="text-xs text-muted-foreground">{customerAddress}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-gray-300 hover:bg-gray-100 hover:text-wang-brown"
            >
              <Phone size={16} className="mr-1" /> Call
            </Button>
            <Button 
              variant="outline"
              size="sm"
              className="flex-1 border-gray-300 hover:bg-gray-100 hover:text-wang-brown"
            >
              <MessageSquare size={16} className="mr-1" /> Chat
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="p-3">
          <Button 
            className="w-full bg-wang-orange hover:bg-wang-darkOrange text-white"
            onClick={handleUpdateStatus}
            disabled={isLoading}
          >
            {getButtonText()}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentDelivery;
