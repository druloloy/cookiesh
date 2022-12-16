
import React from 'react';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="w-full h-auto bg-primary-50">
      <Navbar />
      <Header />
      <Products />
      <Featured />
      <About />
      <Footer />
    </div>
  );
}

export default App;
