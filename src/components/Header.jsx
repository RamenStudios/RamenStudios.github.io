
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = ({logo, current}) =>
{
    return(
        <Navbar expand="lg" class="bebas" style={{backgroundColor: '#000000ff', height: '4em'}} data-bs-theme="dark">
            <Container fluid>
                    <div className="d-inline-block col-md-3">
                        <Navbar.Brand  href="/">
                            <img src={logo} className="navlogo d-none d-lg-inline-block" alt="Ramenstudios Logo"/>
                        </Navbar.Brand>
                    </div>
                    <div className="d-inline-block col-xxl-9">
                        <Navbar.Toggle aria-controls="navbarNav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="#"><h1>Home</h1></Nav.Link>
                                <Nav.Link class="active mt-2 mx-2" aria-current="page" href="#"><h1>About</h1></Nav.Link>
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