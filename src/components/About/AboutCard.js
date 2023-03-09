import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Your name </span>
            from <span className="purple">Your Location</span>
            <br /> discreaption
            <br />
            <br />
            This is not final .You can edit your about what ever you want
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hobbies 
            </li>
            <li className="about-activity">
              <ImPointRight /> activity
            </li>
            <li className="about-activity">
              <ImPointRight /> activity
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programmers Never sleep"{" "}
          </p>
          <footer className="blockquote-footer">Some one</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
