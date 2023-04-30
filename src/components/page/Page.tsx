import React from 'react';

interface PageProps {
  children: React.ReactNode,
}

export const Page = ({children}: PageProps) => (
  <div
    className={`
      w-full h-[100vh] 
      bg-background-primary 
      text-text-primary 
      flex items-center justify-center
      overflow-scroll
    `}
  >
    <div className='w-screen h-full p-8 md:p-12'>
      {children}
    </div>
  </div>
);
