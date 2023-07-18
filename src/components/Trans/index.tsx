import React from 'react';

interface OriginalTextProps {
  id?: string;
  children: React.ReactNode;
}

const Trans: React.FC<OriginalTextProps> = ({ children }) => {
  return <>{children}</>;
};

export default Trans;
