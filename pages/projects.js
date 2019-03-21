import { Navbar } from "../components/Navbar";
import { Trail, config } from 'react-spring/renderprops';

const projectsData = [
    {
        title: "Lowishigh",
        image: "/static/images/Lowishigh.png",
        url: "https://lowishigh.com",
        github: "https://github.com/cooperfrench95/lowishigh",
        description: "Fully-featured fashion and travel blog. Includes user authentication, password reset, admin panel, image gallery, comments and more.",
        technologies: "ReactJS + Redux, Bootstrap, NodeJS, ExpressJS, MongoDB, Sass, Python, Selenium"
    },
    {
        title: "GeoQuiz",
        image: "/static/images/GeoQuiz.png",
        url: "https://geoquizgame.xyz",
        github: "https://github.com/cooperfrench95/geoquiz",
        description: "Web-based Geography game. Users must guess what country they are in based on a series of clues, such as photos from Flickr, the country's capital, or various pieces of economic data. Users are ranked against the top scores in the current game mode at the end of the final round. Features a fully navigable SVG world map.",
        technologies: "ReactJS + Redux, Typescript, Python + Flask, SQLite, Vanilla CSS3"
    },
    {
        title: "Telegram Bot",
        image: "/static/images/TelegramBot.png",
        github: "https://github.com/cooperfrench95/goodmorningtelegram",
        description: "Telegram bot written in Python. Uses the Reddit API to grab the most popular post of the day from a subreddit of the user's choosing and send it in a good morning message to the user at a given time.",
        technologies: "Python + Sqlite"
    }
]



const Projects = () => {
    return(
        <div className="aboutPageMainDiv">
            <Navbar location="projects" />
            <div className="homeDiv animated fadeIn">
                <div className="projectContainer">
                    <Trail 
                        config={config.gentle}
                        items={projectsData}
                        keys={(item) => item.title}
                        from={{ filter: "blur(20px)", opacity: 0 }}
                        to={{ filter: "blur(0px)", opacity: 1 }}
                    >
                        {item => props => 
                        <div className="projectInnerDiv">
                            <img className="projectTrailImage" style={props} src={item.image} alt={item.title}/>
                            <div className="projectInfoDiv">
                                <a href={item.url} className="projectTrailTitle" >
                                    {item.title}
                                </a>
                                <a className="githubLink" href={item.github}>
                                    <img className="githubLinkImage" src="/static/images/github.png" alt="github link" />
                                </a>
                            </div>
                        </div>
                        }
                    </Trail>
                </div>
            </div>
        </div>
    );
}

export default Projects;