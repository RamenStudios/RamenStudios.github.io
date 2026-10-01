
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CustomNavLink } from '../assets/CustomNavLink' 

// generate tabs
const MainTabs =    [
                        [
                            {href: 'home'},
                            {href: 'about'},
                            {href: 'https://github.com/RamenStudios', isLink: true, name: 'GITHUB'},
                        ], 
                        [
                            {href: 'studio art', isDropdownItem: true},
                            {href: 'computer science', isDropdownItem: true},
                        ]
                    ]

export const Header = ({logo, current}) =>
{
    return(
        <Navbar expand="lg" class="bebas" sticky="top" style={{backgroundColor: '#000000ff', height: '5rem'}} data-bs-theme="dark">
            <Container className='gx-0' fluid style={{height:'5em'}}>
                    <div className="col-lg-3 d-none d-lg-inline-block">
                        <Navbar.Brand href="/">
                            <img src={logo} className="navlogo d-none d-lg-inline-block" alt="Ramenstudios Logo"/>
                        </Navbar.Brand>
                    </div>
                    <div className="col-lg-9 col-12 gy-0">
                        <Navbar.Toggle 
                            id="navToggler"    
                            className="toggler-override gy-0" 
                            style={{width:"100%", height:'4em'}} 
                            aria-controls="navbarNav"
                        >
                             <img className="toggler-logo" src={logo} alt="Ramenstudios Logo"/>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav" className='align-items-end pt-3 mt-5 mt-lg-0'>
                            <Nav defaultActiveKey="#/home">
                                {MainTabs[0].map((tab) => (CustomNavLink(tab)))}
                                <NavDropdown title="Portfolio" drop="end" className="nav-link list-inline">
                                    {MainTabs[1].map((tab) => (CustomNavLink(tab)))}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
            </Container>
        </Navbar>
    )
}