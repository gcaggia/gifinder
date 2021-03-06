import React    from 'react';
import {Navbar} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Navbar className="p-5 navbar-footer">
        <div className="text-white pl-5">
          <span className="footer-signature">Guillaume </span>  |
          <a className="footer-link" href="http://codé.com/"> codé.com</a>
        </div>
      </Navbar>
    </footer>
  );
};

export default Footer;