
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  Star, 
  Clock, 
  Navigation, 
  Settings, 
  MessageSquare, 
  ShieldCheck, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

const driverData = {
  name: "Somchai Wang",
  email: "somchai@gmail.com",
  phone: "+66 82 345 6789",
  profileImage: "",
  rating: 4.8,
  deliveries: 128,
  memberSince: "Jan 2023",
  vehicle: "Motorcycle",
  licensePlate: "กข 1234 Bangkok"
};

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-white p-4 shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-bold text-wang-brown">My Profile</h1>
      </header>
      
      <main className="p-4 space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Avatar className="h-16 w-16 border-2 border-wang-orange">
                <AvatarImage src={driverData.profileImage} />
                <AvatarFallback className="bg-wang-brown text-white text-lg">SW</AvatarFallback>
              </Avatar>
              
              <div className="ml-4">
                <h2 className="text-xl font-bold text-wang-brown">{driverData.name}</h2>
                <div className="flex items-center mt-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm font-medium">{driverData.rating}</span>
                  <span className="mx-1 text-gray-300">•</span>
                  <span className="text-sm text-muted-foreground">{driverData.deliveries} deliveries</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline"
              className="w-full mt-4 text-wang-brown border-wang-orange/30 hover:bg-wang-cream hover:text-wang-brown"
            >
              <Settings size={16} className="mr-2" /> Edit Profile
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-wang-brown">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center">
              <Mail size={16} className="text-wang-orange mr-3" />
              <span className="text-sm">{driverData.email}</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-wang-orange mr-3" />
              <span className="text-sm">{driverData.phone}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-wang-brown">Vehicle Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center">
              <Navigation size={16} className="text-wang-orange mr-3" />
              <span className="text-sm">{driverData.vehicle}</span>
            </div>
            <div className="flex items-center">
              <ShieldCheck size={16} className="text-wang-orange mr-3" />
              <span className="text-sm">{driverData.licensePlate}</span>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-wang-brown">
            <HelpCircle size={18} className="mr-3 text-wang-orange" />
            Help & Support
          </Button>
          <Button variant="ghost" className="w-full justify-start text-wang-brown">
            <MessageSquare size={18} className="mr-3 text-wang-orange" />
            Feedback
          </Button>
          <Separator />
          <Button variant="ghost" className="w-full justify-start text-destructive">
            <LogOut size={18} className="mr-3" />
            Logout
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
