import React from "react";
import "./possibility.css";
import Pimage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={Pimage} alt="possibility" />
      </div>
      hfo fo fp f
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          {" "}
          The future is already here, and all you need to do is recognize it.
          Take that step into the future today and make it a reality
        </h1>
        <p>
          For travel assistance, consider a comfortable bed. All exercise is a
          blessing, with no unpleasing thoughts. Find joy in altering the way
          you indulge your attachment. Over the years, we've been asked to allow
          the party of your choice.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
