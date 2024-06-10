import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const height = '60px'; // Set the desired height here

  return (
    <footer className="bg-[#121212]" style={{ height }}>
      <div className="gap-8 px-8 py-4 mx-auto md:flex md:items-center md:justify-between md:px-12 lg:px-32 max-w-7xl" style={{ height }}>
        <div className="flex justify-center space-x-6 md:order-2">
          <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="size-6 transition fill-white hover:text-blue-500"
            >
              <FaGithub className="size-5 text-white" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="size-6 transition fill-white hover:text-blue-500"
            >
              <FaTwitter className="size-5 text-white" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="size-6 transition fill-white hover:text-blue-500"
            >
              <FaInstagram className="size-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="size-6 transition fill-white hover:text-blue-500"
            >
              <FaLinkedin className="size-5 text-white" />
            </a>
          </span>
        </div>
        <div className="md:order-1">
          <span className="text-sm font-medium text-white">
            Copyright © <span>{year}</span>
            <a
              aria-label="Michael Andreuzza"
              href="#"
              className="mx-2 text-blue-500 hover:text-white"
            >
              Michael Andreuzza
            </a>
            Since 1985
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
