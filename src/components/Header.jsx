

export const Header = ({logo, current}) =>
{
    return(
    <nav className="navbar navbar-expand bebas" style={{backgroundColor: '#000000aa', height: '4em'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Bootstrap" width="30" height="24"/>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active mt-2 mx-2" aria-current="page" href="#"><h1>Home</h1></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mt-2 mx-2" href="#"><h1>About</h1></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mt-2 mx-2" href="https://github.com/RamenStudios"><h1>Github</h1></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mt-2 mx-2" href="#"><h1>Projects</h1></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mt-2 mx-2" href="#"><h1>Portfolio</h1></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mt-2 mx-2" href="#"><h1>Videos</h1></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}