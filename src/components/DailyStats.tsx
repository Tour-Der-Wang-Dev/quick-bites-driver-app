
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface DailyStatsProps {
  earnings: number;
  trips: number;
  distance: number;
  onlineTime: string;
}

const DailyStats: React.FC<DailyStatsProps> = ({ 
  earnings, 
  trips, 
  distance, 
  onlineTime 
}) => {
  return (
    <Card className="overflow-hidden shadow-md border-0 bg-white">
      <CardHeader className="bg-wang-orange text-white pb-2 pt-3 px-4">
        <CardTitle className="text-sm font-medium">Today's Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-2 divide-x divide-y">
          <div className="p-3">
            <p className="text-xs text-muted-foreground">Earnings</p>
            <p className="font-semibold text-wang-brown">฿{earnings.toFixed(2)}</p>
          </div>
          <div className="p-3">
            <p className="text-xs text-muted-foreground">Trips</p>
            <p className="font-semibold text-wang-brown">{trips}</p>
          </div>
          <div className="p-3">
            <p className="text-xs text-muted-foreground">Distance</p>
            <p className="font-semibold text-wang-brown">{distance} km</p>
          </div>
          <div className="p-3">
            <p className="text-xs text-muted-foreground">Online Time</p>
            <p className="font-semibold text-wang-brown">{onlineTime}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyStats;
