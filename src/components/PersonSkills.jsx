import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
export default function PersonSkills() {
  return (
    <div className="pSkills">
      {/*start Experiences */}
      <div className="exp">
        <div className="padge">
          <h2>Experience</h2>
        </div>
        <p>i have a one year of experience in Front-End web development.</p>
      </div>
      {/*End Experiences */}

      {/*start Education */}

      <div className="Education">
        <div className="padge">
          <h2>Education</h2>
        </div>
        <p>i'm graduated from FCI Damietta university in 2023</p>
        <p>Bachelor's degree in computer science</p>
      </div>
      {/*End Education */}

      <div className="Skills">
        <div className="padge">
          <h2>Skills</h2>
        </div>
        <div className="skill">
          <div className="skill_">
            <FontAwesomeIcon icon={faHtml5} />
            <span>HTML</span>
          </div>
          <div className="skill_">
            <FontAwesomeIcon icon={faCss3} />
            <span>CSS</span>
          </div>
          <div className="skill_">
            <FontAwesomeIcon icon={faJsSquare} />
            <span>JavaScript</span>
          </div>
          <div className="skill_">
            <FontAwesomeIcon icon={faBootstrap} />
            <span>Bootstrap</span>
          </div>
          <div className="skill_">
            <FontAwesomeIcon icon={faReact} />
            <span>React js</span>
          </div>
        </div>
      </div>
    </div>
  );
}
