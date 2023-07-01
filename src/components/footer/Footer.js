import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className="upFooter"></div>
        <div className="midFooter">
          <ul className="ul">
            <li id="li1">
              <div id="square1"></div>
              <div id="square2"></div>
              <div id="square3"></div>
              <div id="square4"></div>
              <h3>Company Name</h3>
            </li>
            <li id="li2">Pages</li>
            <li id="li3">Utility</li>
            <li id="li4">Subscribe</li>
          </ul>
        </div>
        <div className="lastFooter">
          <div className="rigtLastFooter">
            <div className="preagraph">
              <p>
                Leverage agile frameworks to proivide a robust synopsis for
                strategy collabrative thinking to futher the overall value
                propostion.
              </p>
            </div>
            <div className="footerEmail">
              <FaMailBulk />
            </div>
            <div className="footerEMail-Info">
              <h5>Email</h5>
              <h5>mihir12908@gmail.com</h5>
            </div>
            <div className="footerContact">
              <FaPhone />
            </div>
            <div className="footerContact-Info">
              <h5>Call Us</h5>
              <h5>+91 1111111111</h5>
            </div>
          </div>
          <div className="midLastFooter">
            <div className="midLastFooter1">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Project</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="midLastFooter2">
              <ul>
                <li>Stay Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Protected</li>
                <li>Not Found</li>
              </ul>
            </div>
          </div>
          <div className="leftLastFooter">
            <form>
              <div id="enterFooterEmail">
                <label for="Email ID"></label>
                <input type="text" placeholder="Email here*" name="myemail" />
              </div>
            </form>
            <button id="footerButton">
              <h4>Send Now</h4>
            </button>
            <div className="footerMediaicons">
              <ul>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaFacebook />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="endFooter">
          <h5>Copyright &copy; speedUp Enterprice | Designd by Team React</h5>
          <ul>
             <li>Style Guide</li>
             <li>Licenses</li>
             <li>Changelog</li>
             <li>password</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
