import React from "react";
import "../style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import linkedIn from "./linkedin.svg";
export default function Contacts() {
  return (
    <div className="contact">
      <div className="email">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:mahmoud01234elbalhi@gmail.com">
          mahmoud01234elbalhi@gmail.com
        </a>
      </div>
      <div className="mob">
        <FontAwesomeIcon icon={faPhone} />
        <span>01064218085</span>
      </div>

      <div className="linkedin">
        <img src={linkedIn} alt="" />
        <a
          href="https://www.linkedin.com/in/mahmoud-elbalhi-86a3661b9

"
        >
          www.linkedin.com/in/mahmoud-elbalhi-86a3661b9
        </a>
      </div>
    </div>
  );
}
