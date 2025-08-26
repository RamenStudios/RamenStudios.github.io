

export const Header = ({logo, current}) =>
{
    return(
        <nav class="navbar sticky-top navbar-expand-lg mb-3 bebas  overflow-hidden" style={{backgroundColor: '#000000ff', height: '4em'}} data-bs-theme="dark">
            <div class="container-fluid">
                    <a href="/"><img src={logo} className='navlogo' alt="Ramenstudios Logo"  width="310" height="304"/></a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active mt-2 mx-2" aria-current="page" href="#"><h1>Home</h1></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mt-2 mx-2" href="#"><h1>About</h1></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mt-2 mx-2" href="https://github.com/RamenStudios"><h1>Github</h1></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mt-2 mx-2" href="#"><h1>Projects</h1></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mt-2 mx-2" href="#"><h1>Portfolio</h1></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mt-2 mx-2" href="#"><h1>Videos</h1></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}