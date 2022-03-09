import { ReactComponent as GithubIcon } from "assets/images/github.svg"
import "./styles.css"

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Fbueno12" target="_blank">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/fbueno12</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
