import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

class HeaderApp extends React.Component{
  render(){
    return(
      <Navbar className="sticky-header fixed-top px-4">
          <Navbar.Brand href="#home">PRIME X</Navbar.Brand>
      </Navbar>
    )
  }
}

export default HeaderApp;