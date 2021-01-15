import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Product from '../../components/Product/Product';
import Demand from '../../components/Demand/Demand';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Product />
      <Demand />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
