
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  hideText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', hideText = false }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizes[size]}`}>
        <img 
          src="/lovable-uploads/563aa3f6-25ba-4834-8396-6fc044406b45.png" 
          alt="Tour Der Wang Logo" 
          className="object-contain w-full h-full"
        />
      </div>
      {!hideText && (
        <div className="flex flex-col">
          <span className="text-wang-brown font-bold leading-tight">TOUR DER</span>
          <span className="text-wang-orange font-bold text-lg leading-tight">WANG</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
