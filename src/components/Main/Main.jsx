import React from "react";
import './Main.css';
import 'animate.css'; // Importing Animate.css

export default function Main() {
  return (
    <div>
      <div className="title">
        <span 
          className="title1 animate__animated animate__bounceInUp" 
          style={{ fontSize: 52 }}
        >
          ProtecToons:
        </span>
        <br />
        <span 
          className="subtitle animate__animated animate__fadeInUp" 
          style={{ fontSize: 52 }}
        >
          Drawing rights, defeating wrongs!
        </span>
        <br />
        <span 
          className="subtitle1 animate__animated animate__fadeInUp"
        >
          Interactive comics for kids
        </span>
      </div>
    </div>
  );
}
