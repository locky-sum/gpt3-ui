import React from "react";
import people from "../../assets/people.png";
import AI from "../../assets/au-02.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Create Something Incredible Using GPT-3 By OpenAI
        </h1>
        <p>
          For travel assistance, consider a comfortable bed. All exercise is a
          blessing, with no unpleasing thoughts. Find joy in altering the way
          you indulge your attachment. Over the years, we've been asked to allow
          the party of your choice.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>In the past 24 hours, 1,600 individuals have requested access for a visit.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={AI} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
