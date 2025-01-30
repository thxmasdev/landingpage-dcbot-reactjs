import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Clipboard from 'clipboard';
import logo from '../assets/images/logo.png';

const Header = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  const copyCommand = () => {
    new Clipboard('.copy-btn');
    toast.success('Copied Command', {
      position: 'top-center',
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });
  };

  return (
    <section className="container d-flex flex-column-reverse flex-md-row align-items-center justify-content-center text-center text-md-start py-4">
      <div className="col-md-6">
        <h1
          ref={titleRef}
          className="display-4 fw-bold"
          style={{ color: 'white' }}
        >
          Elevate Your <span style={{ color: 'cyan' }}>Discord Server</span>
        </h1>
        <p className="lead text-gray-300 mt-3">
          AI-powered moderation, music, and custom commands.
        </p>
        <div className="mt-4 d-flex modern-button-container flex-md-row gap-3">
          <motion.button
            className="modern-button primary"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="modern-button secondary copy-btn"
            data-clipboard-text="!invite"
            onClick={copyCommand}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Copy Command
          </motion.button>
        </div>
      </div>
      <div className="col-md-6 text-center">
        <motion.img
          src={logo}
          alt="Discord Bot"
          className="img-fluid"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default Header; 