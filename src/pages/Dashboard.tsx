
import React, { useState, useEffect } from 'react';
import Logo from '@/components/Logo';
import OnlineStatusToggle from '@/components/OnlineStatusToggle';
import DailyStats from '@/components/DailyStats';
import MapView from '@/components/MapView';
import OrderRequest from '@/components/OrderRequest';
import CurrentDelivery from '@/components/CurrentDelivery';

const mockOrderRequests = [
  {
    id: 'order-1',
    restaurantName: 'Wang Noodles Express',
    restaurantAddress: '123 Sukhumvit Rd, Bangkok',
    customerAddress: '456 Silom Rd, Bangkok',
    distance: 2.4,
    estimatedTime: 15,
    earnings: 85,
  },
  {
    id: 'order-2',
    restaurantName: 'Thai Delight',
    restaurantAddress: '789 Ratchada Rd, Bangkok',
    customerAddress: '101 Thonglor Rd, Bangkok',
    distance: 3.1,
    estimatedTime: 18,
    earnings: 95,
  }
];

const Dashboard: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [orderRequests, setOrderRequests] = useState<typeof mockOrderRequests>([]);
  const [currentDelivery, setCurrentDelivery] = useState<any>(null);
  const [dailyStats, setDailyStats] = useState({
    earnings: 0,
    trips: 0,
    distance: 0,
    onlineTime: '0:00'
  });
  const [onlineTimer, setOnlineTimer] = useState(0);

  useEffect(() => {
    if (isOnline) {
      // Show order requests after going online (simulating incoming orders)
      const timer = setTimeout(() => {
        setOrderRequests(mockOrderRequests);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setOrderRequests([]);
    }
  }, [isOnline]);

  useEffect(() => {
    let timer: number | undefined;
    
    if (isOnline) {
      timer = window.setInterval(() => {
        setOnlineTimer(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOnline]);

  useEffect(() => {
    const hours = Math.floor(onlineTimer / 3600);
    const minutes = Math.floor((onlineTimer % 3600) / 60);
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
    
    setDailyStats(prev => ({
      ...prev,
      onlineTime: formattedTime
    }));
  }, [onlineTimer]);

  const handleAcceptOrder = (orderId: string) => {
    const acceptedOrder = orderRequests.find(order => order.id === orderId);
    if (acceptedOrder) {
      setCurrentDelivery({
        ...acceptedOrder,
        customerName: 'Customer',
        status: 'TO_PICKUP' as const
      });
      
      setOrderRequests(prev => prev.filter(order => order.id !== orderId));
      
      // Update stats
      setDailyStats(prev => ({
        ...prev,
        trips: prev.trips + 1,
        earnings: prev.earnings + acceptedOrder.earnings,
        distance: prev.distance + acceptedOrder.distance
      }));
    }
  };

  const handleRejectOrder = (orderId: string) => {
    setOrderRequests(prev => prev.filter(order => order.id !== orderId));
  };

  const handleUpdateDeliveryStatus = (id: string, status: 'TO_PICKUP' | 'TO_DELIVERY' | 'COMPLETED') => {
    if (status === 'COMPLETED') {
      setCurrentDelivery(null);
    } else {
      setCurrentDelivery(prev => ({
        ...prev,
        status
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-white p-4 shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <Logo />
          <OnlineStatusToggle isOnline={isOnline} setIsOnline={setIsOnline} />
        </div>
      </header>
      
      <main className="p-4 space-y-4">
        <DailyStats 
          earnings={dailyStats.earnings}
          trips={dailyStats.trips}
          distance={dailyStats.distance}
          onlineTime={dailyStats.onlineTime}
        />
        
        <MapView />

        {!isOnline && (
          <div className="bg-wang-cream rounded-lg p-4 text-center">
            <h3 className="text-wang-brown font-medium mb-2">You're currently offline</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Go online to receive delivery requests
            </p>
            <button 
              className="bg-wang-orange text-white py-2 px-4 rounded-md font-medium"
              onClick={() => setIsOnline(true)}
            >
              Go Online
            </button>
          </div>
        )}
        
        {isOnline && !currentDelivery && orderRequests.length === 0 && (
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <h3 className="text-wang-brown font-medium mb-2">Waiting for orders</h3>
            <p className="text-sm text-muted-foreground">
              You'll see delivery requests here
            </p>
          </div>
        )}

        {currentDelivery && (
          <div>
            <h2 className="text-lg font-semibold text-wang-brown mb-2">Current Delivery</h2>
            <CurrentDelivery 
              {...currentDelivery}
              onUpdateStatus={handleUpdateDeliveryStatus}
            />
          </div>
        )}
        
        {isOnline && !currentDelivery && orderRequests.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-wang-brown">New Orders</h2>
            {orderRequests.map((order) => (
              <OrderRequest 
                key={order.id}
                {...order}
                onAccept={handleAcceptOrder}
                onReject={handleRejectOrder}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
