import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <div  // This div could be replaced by an img
            
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am familiar with JavaScript, Node, React, MySql, and Mongo.
        </p>
        <p className="a-desc">
          I have an interest in learning more languages and concepts such as Python, C++, TypeScript,
          AWS and Facade Design Pattern.
        </p>
      </div>
    </div>
  );
};

export default About;