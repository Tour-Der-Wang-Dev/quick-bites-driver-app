
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

interface OrderRequestProps {
  id: string;
  restaurantName: string;
  restaurantAddress: string;
  customerAddress: string;
  distance: number;
  estimatedTime: number;
  earnings: number;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
}

const OrderRequest: React.FC<OrderRequestProps> = ({
  id,
  restaurantName,
  restaurantAddress,
  customerAddress,
  distance,
  estimatedTime,
  earnings,
  onAccept,
  onReject
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAccept = () => {
    setIsLoading(true);
    setTimeout(() => {
      onAccept(id);
      setIsLoading(false);
    }, 500);
  };

  const handleReject = () => {
    setIsLoading(true);
    setTimeout(() => {
      onReject(id);
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card className="overflow-hidden shadow-md border border-wang-orange/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-wang-brown">{restaurantName}</h3>
          <span className="text-sm text-wang-orange font-medium">New Order</span>
        </div>
        
        <div className="space-y-3 mb-4">
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
        
        <Separator className="my-3" />
        
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="flex flex-col items-center">
            <Navigation size={16} className="text-wang-orange mb-1" />
            <p className="text-xs text-muted-foreground">Distance</p>
            <p className="text-sm font-medium">{distance} km</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock size={16} className="text-wang-orange mb-1" />
            <p className="text-xs text-muted-foreground">Est. Time</p>
            <p className="text-sm font-medium">{estimatedTime} min</p>
          </div>
          <div className="flex flex-col items-center">
            <DollarSign size={16} className="text-wang-orange mb-1" />
            <p className="text-xs text-muted-foreground">Earnings</p>
            <p className="text-sm font-medium">฿{earnings}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1 border-gray-300 hover:bg-gray-100 hover:text-wang-brown"
            onClick={handleReject}
            disabled={isLoading}
          >
            Reject
          </Button>
          <Button 
            className="flex-1 bg-wang-orange hover:bg-wang-darkOrange text-white"
            onClick={handleAccept}
            disabled={isLoading}
          >
            Accept
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderRequest;
