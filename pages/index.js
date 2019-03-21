import { Navbar } from '../components/Navbar';
import Sky from 'react-sky';
import { Spring } from 'react-spring/renderprops.cjs';

const IndexPage = () => {
  
  return (
    <div>
      <div className="skyDiv animated fadeIn delay-1s">
        <Sky 
            images={{
              0: '../static/images/React.png',
              1: "../static/images/bootstrap.png",
              2: "../static/images/CSS3.png",
              3: "../static/images/Flask.svg",
              4: "../static/images/git.svg",
              5: "../static/images/github.png",
              6: "../static/images/HTML5.png",
              7: "../static/images/Javascript.png",
              8: "../static/images/Linux.png",
              9: "../static/images/mongoDB.png",
              10: "../static/images/nextJS.svg",
              11: "../static/images/Nginx.png",
              12: "../static/images/NodeJS.png",
              13: "../static/images/Python.png",
              14: "../static/images/redux.png",
              15: "../static/images/Sass.png",
              16: "../static/images/selenium.png",
              17: "../static/images/SQL.png",
              18: "../static/images/TypeScript.png"
            }}
            how={100} /* Pass the number of images Sky will render chosing randomly */
            time={120} /* time of animation */
            size={'25px'} /* size of the rendered images */
            background={'transparent'} /* color of background */
          />
      </div>
      <div>
        <Navbar location="home" />
        <Spring 
          from={{opacity: 0}}
          to={{opacity: 1}}
        >
        {props =>
        <div style={props} className="homeDiv">
          <span className="homeH1">COOPER FRENCH</span>
          <span className="homeH2">Full Stack Web Developer</span>
        </div>}
        </Spring>
        
      </div>
    </div>
  )
}

export default IndexPage;
