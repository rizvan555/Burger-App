import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
