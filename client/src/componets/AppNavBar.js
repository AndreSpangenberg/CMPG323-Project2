import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NabbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarBrand
} from 'reactstrap';
import RegisterModel from './auth/registerModel';
import Logout from './auth/logout';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
     
    toggle = () => {
        this.setState({
            isOpen: !this.setState.isOpen
        });
    }

    render() {
        return(
          <div>
            <Navbar color='dark' dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">POPI-SYSTEM</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <RegisterModel />
                            </NavItem>
                            <NavItem>
                                <Logout />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>

            </Navbar>
          </div>
        );
    }


}

export default AppNavbar;