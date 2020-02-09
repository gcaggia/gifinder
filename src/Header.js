import React    from 'react';
import {Navbar} from 'react-bootstrap';
import GithubCorner from 'react-github-corner';

const Header = () => {
  return (
    <div className="header">
      <Navbar className="p-3 justify-content-between">
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a className="text-fork-me" href="https://github.com/gcaggia/gifinder">
              Fork me on Github
            </a>
            <GithubCorner href="https://github.com/gcaggia/gifinder"
                          bannerColor={'#4b6584'}
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;