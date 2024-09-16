import * as React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import 'flowbite';

function App() {
  return (
    <div className="flex flex-col justify-start min-h-screen">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
