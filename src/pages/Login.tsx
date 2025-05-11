
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Logo from '@/components/Logo';
import { useToast } from '@/hooks/use-toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulated login
    setTimeout(() => {
      setIsLoading(false);
      
      // Demo credentials check
      if (email === 'driver@tourderwang.com' && password === 'password') {
        toast({
          title: 'Login successful',
          description: 'Welcome back, driver!',
        });
        navigate('/');
      } else {
        toast({
          variant: 'destructive',
          title: 'Login failed',
          description: 'Please check your credentials and try again.',
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-wang-cream/50">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Logo size="lg" />
          <h1 className="mt-4 text-2xl font-bold text-wang-brown">Driver Portal</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-wang-brown">Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="driver@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-wang-orange hover:underline">Forgot password?</a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-wang-orange hover:bg-wang-darkOrange text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <a href="#" className="text-wang-orange hover:underline">Apply to become a driver</a>
              </p>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-center">
              <p className="text-muted-foreground">Demo credentials:</p>
              <p className="font-mono">Email: driver@tourderwang.com</p>
              <p className="font-mono">Password: password</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
