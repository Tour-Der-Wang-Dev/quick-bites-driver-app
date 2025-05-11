
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, DollarSign } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface DeliveryHistoryItem {
  id: string;
  restaurantName: string;
  customerAddress: string;
  date: string;
  earnings: number;
  status: 'completed' | 'cancelled';
}

const historyItems: DeliveryHistoryItem[] = [
  {
    id: 'hist-1',
    restaurantName: 'Wang Noodles Express',
    customerAddress: '456 Silom Rd, Bangkok',
    date: '2023-05-11 14:30',
    earnings: 85,
    status: 'completed'
  },
  {
    id: 'hist-2',
    restaurantName: 'Thai Delight',
    customerAddress: '101 Thonglor Rd, Bangkok',
    date: '2023-05-11 12:15',
    earnings: 95,
    status: 'completed'
  },
  {
    id: 'hist-3',
    restaurantName: 'Bangkok Spice',
    customerAddress: '789 Ratchada Rd, Bangkok',
    date: '2023-05-10 18:45',
    earnings: 75,
    status: 'cancelled'
  },
  {
    id: 'hist-4',
    restaurantName: 'Street Food Corner',
    customerAddress: '222 Phaya Thai Rd, Bangkok',
    date: '2023-05-10 15:20',
    earnings: 110,
    status: 'completed'
  }
];

const HistoryCard: React.FC<{ item: DeliveryHistoryItem }> = ({ item }) => {
  return (
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-wang-brown">{item.restaurantName}</h3>
          <Badge className={item.status === 'completed' ? 'bg-green-500' : 'bg-red-500'}>
            {item.status === 'completed' ? 'Completed' : 'Cancelled'}
          </Badge>
        </div>
        
        <div className="flex items-start gap-2 mb-2">
          <MapPin size={16} className="text-wang-orange min-w-[16px] mt-0.5" />
          <p className="text-sm text-muted-foreground">{item.customerAddress}</p>
        </div>
        
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <Calendar size={14} className="text-wang-orange mr-1" />
            <span className="text-muted-foreground">{item.date}</span>
          </div>
          <div className="flex items-center font-medium text-wang-brown">
            <DollarSign size={14} className="text-wang-orange mr-1" />
            ฿{item.earnings}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const History: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-white p-4 shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-bold text-wang-brown">Delivery History</h1>
      </header>
      
      <main className="p-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-wang-brown">Today</h2>
            <span className="text-sm text-wang-orange font-medium">2 Deliveries</span>
          </div>
          
          {historyItems.slice(0, 2).map(item => (
            <HistoryCard key={item.id} item={item} />
          ))}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-wang-brown">Yesterday</h2>
            <span className="text-sm text-wang-orange font-medium">2 Deliveries</span>
          </div>
          
          {historyItems.slice(2).map(item => (
            <HistoryCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default History;
