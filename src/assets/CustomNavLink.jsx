import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

// forces toggler closed on tab click
const toggleHelper = () => {
    const toggler = document.getElementById('navToggler')
    if (toggler.checkVisibility()) {
        toggler.click()
    }
}

// formats navlinks, helps truncate Header.jsx
export const CustomNavLink = (props) => {
    let tabName = props.href.toUpperCase()
    const LinkProps =   {
                            href: `\#/${props.href}`,
                        }
    if (props.isLink) {
        tabName = props.name
        LinkProps.href = props.href
        LinkProps.target = '_blank'
    }
    return (
        <Nav.Link  aria-current="page" {...LinkProps}>
            <div className='nav-link-container' onClick={toggleHelper}>
                {tabName}
            </div>
        </Nav.Link>
    )
}