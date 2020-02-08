import React    from 'react';
import {Navbar} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Navbar bg="dark" variant="dark" className="p-5">
        <div className="text-white pl-5">
          <span>Guillaume | </span>
          <a href="http://codé.com/">codé.com</a>
        </div>
      </Navbar>
    </footer>
  );
};

export default Footer;