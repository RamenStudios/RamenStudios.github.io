
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                        <Navbar.Toggle className="toggler-override gy-0" style={{width:"100%", height:'4em'}} aria-controls="navbarNav">
                             <img className="toggler-logo" src={logo} alt="Ramenstudios Logo"/>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav" className='align-items-end'>
                            <Nav>
                                <Nav.Link class="nav-link"  aria-current="page" href="/">
                                    <div className='nav-link-container'>Home</div>
                                </Nav.Link>
                                <Nav.Link class="nav-link"  aria-current="page" href="#/about">
                                    <div className='nav-link-container'>About</div>
                                </Nav.Link>
                                <Nav.Link class="nav-link"  aria-current="page" href="https://github.com/RamenStudios">
                                    <div className='nav-link-container'>GitHub</div>
                                </Nav.Link>
                                <Nav.Link class="nav-link"  aria-current="page" href="#/projects">
                                    <div className='nav-link-container'>Projects</div>
                                </Nav.Link>
                                <Nav.Link class="nav-link"  aria-current="page" href="#/portfolio">
                                    <div className='nav-link-container'>Portfolio</div>
                                </Nav.Link>
                                <Nav.Link class="nav-link"  aria-current="page" href="#/videos">
                                    <div className='nav-link-container'>Videos</div>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
            </Container>
        </Navbar>
    )
}