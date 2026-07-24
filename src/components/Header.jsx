
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = ({logo, current}) =>
{
    return(
        <Navbar expand="lg" class="bebas" sticky="top" style={{backgroundColor: '#000000ff', height: '5em'}} data-bs-theme="dark">
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
                        <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor: '#000000ff'}}>
                            <Nav>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="#"><h1>Home</h1></Nav.Link>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="/about"><h1>About</h1></Nav.Link>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="https://github.com/RamenStudios"><h1>Github</h1></Nav.Link>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="#"><h1>Projects</h1></Nav.Link>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="#"><h1>Portfolio</h1></Nav.Link>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="#"><h1>Videos</h1></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
            </Container>
        </Navbar>
    )
}