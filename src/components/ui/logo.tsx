
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', withText = true, className = '' }: LogoProps) => {
  // تحديد حجم الشعار بناءً على الخاصية size
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`relative ${dimensions[size]}`}>
        <div className="absolute inset-0 bg-aram-gold rounded-full opacity-20 animate-pulse"></div>
        <div className={`${dimensions[size]} rounded-full bg-gradient-to-br from-aram-gold to-amber-600 flex items-center justify-center text-white font-bold`}>
          <span className="text-aram-navy font-arabic" style={{ fontSize: size === 'lg' ? '1.5rem' : size === 'md' ? '1.2rem' : '0.8rem' }}>آرام</span>
        </div>
      </div>
      
      {withText && (
        <div className="flex flex-col">
          <span className="text-aram-gold font-bold text-xl md:text-2xl font-arabic">آرام</span>
          <span className="text-aram-navy dark:text-white text-xs md:text-sm">للفعاليات الفاخرة</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
