
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Logo size="lg" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-wang-brown">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page not found</p>
        <Button 
          className="bg-wang-orange hover:bg-wang-darkOrange text-white"
          onClick={() => navigate('/')}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
