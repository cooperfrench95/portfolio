import { Navbar } from '../components/Navbar';


const Links = () => {
    return(
        <div>
            <Navbar location="links" />
            <div className="homeDiv animated fadeIn">
                <a href="https://github.com/cooperfrench95">
                    <img className="linksPageImage" src="/static/images/github.png" alt="github link" />
                </a>
                <a href="https://www.linkedin.com/in/cooperfrench95/">
                    <img className="linksPageImage" src="/static/images/linkedIn.png" alt="github link" />
                </a>
            </div>
        </div>
    );
}



export default Links;