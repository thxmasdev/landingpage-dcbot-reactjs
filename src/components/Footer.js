import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-800 mt-auto">
      <p className="text-gray-400">
      © 2025 AI Bot - Enhance Your Discord Experience - Fork
      </p>
      <div className="mt-2">
        <a 
          href="https://github.com/thxmasdev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub size={24} /> 
          <span className="ms-2">thxmasdev</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
