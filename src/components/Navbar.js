import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaHome, FaCogs, FaMusic, FaUsers, FaBars } from 'react-icons/fa';
import { FcReddit } from "react-icons/fc";
import { motion } from 'framer-motion';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-transparent py-3">
      <Container>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Navbar.Brand className="navbar-brand">
            <FcReddit size={30} /> AI Bot
          </Navbar.Brand>
        </motion.div>

        <motion.div
          className="d-lg-none"
          whileTap={{ rotate: 90 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          <FaBars size={30} color="white" />
        </motion.div>

        <Navbar.Collapse id="basic-navbar-nav" className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <Nav className="ms-auto">
            <Nav.Link href="#"><FaHome /> Home</Nav.Link>
            <Nav.Link href="#"><FaCogs /> Features</Nav.Link>
            <Nav.Link href="#"><FaMusic /> Commands</Nav.Link>
            <Nav.Link href="#"><FaUsers /> Community</Nav.Link>
          </Nav>
          <motion.button
            className="modern-button primary ms-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Invite Bot
          </motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
