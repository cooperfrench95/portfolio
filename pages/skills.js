import { Navbar } from "../components/Navbar";
import { Trail } from 'react-spring/renderprops';

const skillsImages = [
    {
        name: "ReactJS",
        key: 1,
        image: "/static/images/React.png"
    },
    {
        name: "Javascript",
        key: 2,
        image: "/static/images/Javascript.png"
    },
    {
        name: "Python",
        key: 3,
        image: "/static/images/Python.png"
    },
    {
        name: "NodeJS",
        key: 4,
        image: "/static/images/NodeJS.png"
    },
    {
        name: "Redux",
        key: 5,
        image: "/static/images/redux.png"
    },
    {
        name: "Typescript",
        key: 6,
        image: "/static/images/TypeScript.png"
    },
    {
        name: "HTML5",
        key: 7,
        image: "/static/images/HTML5.png"
    },
    {
        name: "Linux",
        key: 8,
        image: "/static/images/Linux.png"
    },
    {
        name: "SQL",
        key: 9,
        image: "/static/images/SQL.png"
    },
    {
        name: "MongoDB",
        key: 10,
        image: "/static/images/mongoDB.png"
    },
    {
        name: "Flask",
        key: 11,
        image: "/static/images/Flask.svg"
    },
    {
        name: "Bootstrap",
        key: 12,
        image: "/static/images/bootstrap.png"
    },
    {
        name: "CSS3",
        key: 13,
        image: "/static/images/CSS3.png"
    },
    {
        name: "Sass",
        key: 14,
        image: "/static/images/Sass.png"
    },
    {
        name: "Nginx",
        key: 15,
        image: "/static/images/Nginx.png"
    },
    {
        name: "Selenium",
        key: 16,
        image: "/static/images/selenium.png"
    },
    {
        name: "NextJS",
        key: 17,
        image: "/static/images/nextJS.svg"
    },
    {
        name: "Git",
        key: 18,
        image: "/static/images/git.svg"
    }
]

const Skills = () => {
    
    return(
        <div className="aboutPageMainDiv">
            <Navbar location="skills" />
            <div className="homeDiv animated fadeIn">
                <div className="skillsDiv animated fadeIn">
                    <Trail 
                        config={{tension: 600, friction: 40}}
                        items={skillsImages}
                        keys={item => item.key}
                        from={{ transform: 'scale(0.1)', opacity: 0 }}
                        to={{ transform: 'scale(1)', opacity: 1 }}
                    >
                        {item => props => 
                            <div className="eachSkillDiv" style={props}>
                                <img className="skillTrailImage" src={item.image} alt={item.name}/>
                                <span className="skillTrailItemName">{item.name}</span>
                            </div>
                        }
                    </Trail>
                </div>
            </div>
        </div>
    );
}

export default Skills;