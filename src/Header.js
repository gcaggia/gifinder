import React    from 'react';
import {Navbar} from 'react-bootstrap';

const Header = () => {
  return (
    <div className="header">
      <Navbar className="p-3 justify-content-between">
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#">Fork me on Github</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;