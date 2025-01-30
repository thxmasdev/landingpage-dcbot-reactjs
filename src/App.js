import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

/* Componentes */

import React from 'react';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <NavigationBar />
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
