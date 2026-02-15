import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-20',
    lg: 'h-20'
  };

  return (
    <img 
      src="/logo.png" 
      alt="Campaign Logo" 
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
};
