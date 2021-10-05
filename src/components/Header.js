import React, { Component } from 'react';
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';


class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Best Watches</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/fav">Favorites</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    {this.props.auth0.isAuthenticated && <LogoutButton/>}
                </Navbar>
            </>
        )
    }
}

export default withAuth0(Header)
