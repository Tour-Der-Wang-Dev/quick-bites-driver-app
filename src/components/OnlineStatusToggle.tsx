
import React from 'react';
import { Switch } from "@/components/ui/switch";

interface OnlineStatusToggleProps {
  isOnline: boolean;
  setIsOnline: (value: boolean) => void;
}

const OnlineStatusToggle: React.FC<OnlineStatusToggleProps> = ({ isOnline, setIsOnline }) => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
      <Switch 
        id="online-mode" 
        checked={isOnline}
        onCheckedChange={setIsOnline}
        className={isOnline ? "bg-wang-orange" : "bg-gray-200"}
      />
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">Status</span>
        <span className={`text-sm font-medium ${isOnline ? 'text-wang-orange' : 'text-gray-500'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
      {isOnline && (
        <div className="ml-1 w-3 h-3 rounded-full bg-green-500 animate-pulse-soft" />
      )}
    </div>
  );
};

export default OnlineStatusToggle;
