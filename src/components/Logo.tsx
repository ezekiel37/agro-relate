
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center no-underline">
      <img
        src="/images/agrorelate-logo.svg"
        alt="AgroRelate Logo"
        className="h-14 md:h-16"
      />
    </Link>
  );
};

export default Logo;
