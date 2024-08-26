import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div>
      <div className="about-us">
        <span className="us">About us</span>
        <span className="desc">
          ProtecToons is a team of educators, artists, and child rights
          advocates dedicated to using storytelling to inspire and inform. Our
          interactive comics offer a fun and effective way for children to learn
          about their rights. We stand out by providing high-quality, accessible
          content that makes learning about rights enjoyable and easy for all
          ages. Our project aims to educate children about rights through
          engaging and humorous comics.
        </span>
      </div>
      <div className="features">
        <span className="h1">Features</span>
        <div className="rewards">
          <span>Fun comics</span>
          <span>Anonymous sharing of your story</span>
          <span>Rights information</span>
          <span>Informative quizzes</span>
          <span>Rewards</span>
          <span>Interactive platform</span>
        </div>
      </div>

      <div className="work">
        <span>How does it work?</span>
        <li>
          <ul>Read the comics</ul>
          <ul>Do the quiz</ul>
          <ul>Get rewards</ul>
        </li>
      </div>

      <div className="plans">
        <span>Our pricing plans</span>
      </div>
    </div>
  );
}
