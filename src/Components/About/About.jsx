import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/saurabh_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Aspiring MERN stack developer with a solid foundation in MongoDB,
              Express.js, React.js, and Node.js. Proficient in crafting
              responsive and user-friendly web applications
            </p>
            <p>
              A quick learner and collaborative team player, poised to
              contribute to innovative projects and thrive within a dynamic
              development team.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>TAILWIND CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>BOOTSTRAP</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>REACT-JS</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>NODE-JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MONGODB</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>EXPRESS-JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>GITHUB</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>WORDPRESS</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
