import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const footerStyle = {
        // backgroundColor: "#121212", 
        padding: "20px",
        textAlign: "center",
        fontSize: "14px",
        // color: "#666",
    };

    const currentYear = new Date().getFullYear();

    return (
        <div style={footerStyle}>
          <span>Created by 🙋‍♂️, using </span>
      <FontAwesomeIcon icon={faReact} />
      <span> for the frontend and </span>
      <FontAwesomeIcon icon={faNodeJs} />
      <span> for the backend</span>
            <br />
            <a href="https://www.linkedin.com/in/muhammad-sahil-983b2a23a/"><span>All rights reserved &copy; {currentYear}</span></a>
        </div>
    );
}
