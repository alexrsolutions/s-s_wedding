import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
  } from 'reactstrap';
import '../components/NavigationBar.css'
import '../fonts/fonts.css'

const NavigationBar: React.FC = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const changeBackground = () => {
        if (window.scrollY >= 44) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <Navbar className={ navbar ? 'navigationbar active' : 'navigationbar' } light expand="md">
                <NavbarBrand style={{ font:'Dual-300' }} href="/">SALVADOR & SONIA</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">OUR STORY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">WEDDING</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">ACOMM</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">REGISTRY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">RSVP</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};


export default NavigationBar;