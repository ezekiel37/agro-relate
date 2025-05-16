
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center no-underline">
      <img 
        src="/lovable-uploads/e7e2a468-a807-4d42-bf4f-ab1ed549b9c5.png" 
        alt="AgroRelate Logo" 
        className="h-14 md:h-16"
      />
    </Link>
  );
};

export default Logo;
