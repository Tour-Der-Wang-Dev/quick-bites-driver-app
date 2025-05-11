
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileButtonProps {
  name: string;
  imageUrl?: string;
  onClick: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ name, imageUrl, onClick }) => {
  const initials = name.split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
  
  return (
    <Button 
      variant="ghost" 
      className="flex items-center p-2 hover:bg-wang-cream"
      onClick={onClick}
    >
      <Avatar className="h-8 w-8 mr-2">
        <AvatarImage src={imageUrl} />
        <AvatarFallback className="bg-wang-brown text-white text-sm">
          {initials}
        </AvatarFallback>
      </Avatar>
      <span className="text-wang-brown">Profile</span>
    </Button>
  );
};

export default ProfileButton;
