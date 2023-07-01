import React from "react";
import "./Blog.css";
import News from "./News";
import ship1 from "../../images/ship1.jpg";
import ship2 from "../../images/ship2.jpg";
const Blog = () => {
  return (
      <div className="Blog">
        <div className="title1">
          <div className="title-box"></div>
          <h5>Our Blog</h5>
        </div>
        <div className="title2">
          <h1>Our Latest News</h1>
        </div>
        <div className="News">
          <News
            src={ship1}
            date="08"
            month="January"
            info1="Indian freight a worthy solution for your business"
            info2="We are dedicated in creating added value for our customers by implementing moderm technology in our work."
            li1="Urgent transport solution "
            li2="Reliable & experienced staff"
            li3="Urgent transport solution"
            li4="Reliable & experienced staff"
          />
          <br></br>
          &ensp;
          <News
            src={ship2}
            date="20"
            month="February"
            info1="Five things you should have ready for your broker"
            info2="We are dedicated in creating  value for our customers by implementing moderm technology in our work. "
            li1="Urgent transport solution "
            li2="Reliable & experienced staff"
            li3="Urgent transport solution"
            li4="Reliable & experienced staff"
          />
        </div>
        <button id="newsButton">
          <p>More Blog</p>
          <div className="circle1">
          </div>
        </button>
      </div>
  );
};

export default Blog;
