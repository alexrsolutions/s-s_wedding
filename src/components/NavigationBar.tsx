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
import { useScrollSection } from 'react-scroll-section';

const NavigationBar: React.FC = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const homeSection = useScrollSection('home');
    const ourStorySection = useScrollSection('our-story');
    const weddingSection = useScrollSection('wedding');
    const acommStorySection = useScrollSection('acomm');
    const registrySection = useScrollSection('registry');
    const rsvpSection = useScrollSection('rsvp');

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
                <NavbarBrand style={{ font:'Dual-300' }} >SALVADOR & SONIA</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink onClick={ homeSection.onClick }>HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={ ourStorySection.onClick }>OUR STORY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={ weddingSection.onClick }>WEDDING</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={ acommStorySection.onClick }>ACOMM</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={ registrySection.onClick }>REGISTRY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={ rsvpSection.onClick }>RSVP</NavLink>
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