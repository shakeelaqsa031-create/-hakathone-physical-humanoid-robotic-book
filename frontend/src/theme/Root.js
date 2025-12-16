import React from 'react';
import { UserProvider } from '../contexts/UserContext';
import NavbarToggle from '../components/NavbarToggle';
import ChatWidget from '../components/ChatWidget';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <UserProvider>
      {children}
      
      {/* Global Floating Controls for MVP */}
      <div style={{ position: 'fixed', top: '15px', right: '150px', zIndex: 10000 }}>
         <NavbarToggle />
      </div>
      <ChatWidget />
    </UserProvider>
  );
}
