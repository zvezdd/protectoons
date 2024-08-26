import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <section className="ul-section">
        <ul>
          <li> <Link to="/readcomics">Read Comics</Link> </li>
          <li> <Link to="/takequiz"> Take a quiz</Link></li>
          <li> <Link to="/rankings">View rankings</Link></li>
          <li> <Link to="/chat">Chat</Link></li>
        </ul>
      </section>
    </header>
  );
}
