import React from "react";
import mail from "../../images/Mail.svg";
import call from "../../images/Call.svg";
import clock from "../../images/Clock.svg";
import cargo from "../../images/cargo.png";
import mountain from "../../images/Mountain.png";
import mountain1 from "../../images/Mountain1.png";
import plane from "../../images/plane.png"
import l1 from "../../images/l1.svg";
import l2 from "../../images/l2.svg";
import l3 from "../../images/l3.svg";
import l4 from "../../images/l4.svg";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contactTop">
        <div className="contactLeft">
          <div className="contactTitle1">
            <div className="title-box"></div>
            <h5>Contact</h5>
          </div>
          <div className="contactTitle2">
            <h1>Get in touch with us</h1>
          </div>
          <div className="contactInfo">
            <p>
              Leverage agile framework to provide a robust synopsis for strategy
              foster collabroative thinking to further the overall value.
            </p>
          </div>
          <div className="contactIcon">
            <div className="flex flex-row gap-4 items-center ">
              <div className="circle flex rounded-full items-center justify-center ">
                <img className="w-[22px]" src={mail} alt="mail" />
              </div>
              <div className="text-white font-body-text text-left">
                <p class="-py-1">Email </p>
                <p>demo@logistics.com</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center ">
              <div className="circle flex rounded-full items-center justify-center ">
                <img className="w-[22px]" src={call} alt="Call" />
              </div>
              <div className="text-white font-body-text text-left">
                <p>Call Us </p>
                <p>+91 1111111111</p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center ">
              <div className="circle flex rounded-full items-center justify-center ">
                <img className="w-[22px]" src={clock} alt="Clock" />
              </div>
              <div className="text-white font-body-text text-left">
                <p>Mon - Sat 9.00 - 18.00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <form>
            <div className="form1">
              <div className="formStyle">
                <label for="Your name"></label>
                <input type="text" placeholder="Your name*" name="yourname" />
              </div>
              <div className="formStyle">
                <label for="Email"></label>
                <input type="text" placeholder="Email*" name="myemail" />
              </div>
            </div>
            <div className="from2">
              <div className="formStyle">
                <label for="PhoneNumer"></label>
                <input
                  type="text"
                  placeholder="Phone Number*"
                  name="phonenumber"
                />
              </div>
              <div className="formStyle">
                <label for="city"></label>
                <input type="text" placeholder="City*" name="city" />
              </div>
            </div>
            <div className="from3">
              <div id="meassage">
                <label for="message"></label>
                <input type="text" placeholder="Your message*" name="message" />
              </div>
            </div>
            <button id="contactButton">
              <h4>Submit Message</h4>
            </button>
          </form>
        </div>
      </div>

      <div className="contactLast">
        <div className="contactImage">
          <img src={cargo} alt="Image" />
          <img src={mountain} alt="Image" />
          <img src={plane} alt="Image" />
          <img src={mountain1} alt="Call" />
          <div className="l5">
              <img src={l1} alt="image"  id="l1"/>
              <img src={l2} alt="image"id="l2" />
              <img src={l3} alt="image"id="l3" />
              <img src={l4} alt="image"id="l4" />
          </div>
          <div className="backgroundColor">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
