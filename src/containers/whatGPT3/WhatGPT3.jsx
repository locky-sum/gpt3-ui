import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="GPT-3, or Generative Pre-trained Transformer 3, is a cutting-edge natural language processing model developed by OpenAI. It's a deep learning model based on the transformer architecture, pre-trained on extensive text data from the internet."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          {" "}
          "The possibilities extend far beyond what you can imagine."
        </h1>
        <p>Explore Our Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="
      Chatbots are AI-driven virtual agents used for tasks like customer support, information retrieval, and more. They simulate human conversation and can be found on websites, apps, and messaging platforms."
        />
        <Feature
          title="Knowledgeable"
          text="A knowledge base is a structured collection of information and resources for easy access and retrieval, often used for customer support and self-service."
        />
        <Feature
          title="Education"
          text="
      GPT-3 enhances education through personalized learning, content creation, and automated grading, benefiting both educators and students."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
