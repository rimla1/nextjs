import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1 className='text-4xl'>GENERAL NAVBAR</h1>
      {children}
    </>
  );
};

export default Layout;
