import { Navbar } from "../components/Navbar";

const About = () => {
    return(
        <div className="aboutPageMainDiv">
            <Navbar location="about" />
            <div className="homeDiv animated fadeIn">
                <div>
                    <span className="aboutPageTitle">About Me</span>
                </div>
                <div className="aboutPageTextDiv">
                    <p className="aboutPageTextP">A full stack web developer with a strong grasp of programming principles and a passion for coding, excellent communication skills, and a strong work ethic. Originally from Australia, currently based in Taipei. Fluent in English, Javascript, and Python; conversational in Mandarin.</p>
                </div>
            </div>
        </div>
    );
}

export default About;