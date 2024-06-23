import React from "react";
import "./info.css";
import { Link, useNavigate } from "react-router-dom";

const Info = () => {

    const naviagte = useNavigate();

    const handleclick = () => {
        naviagte("/mainpage");
    }


  return (
    <div className="main-content">
      <div className="info-card">
        <div className="heading">Enigma CV</div>
        <article>
          <div className="contentt">
            <strong>Ever wondered of using augmented reality?</strong>
            Hai I'm Bhargav,<br></br> Welcome to your team Project Enigma CV.
            <br></br>
            We worked on generating dynamic resumes using augmented reality. In
            this project, we created a resume generator using react and node.js
            and augmented reality part using Unity and Vuforia engine.
            <div className="techstack">
              Tech Stack:
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                }}
              >
                <li className="chip">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                    height="25px"
                    width="30px"
                    alt="logo-react"
                  ></img>
                </li>
                <li className="chip">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                    height="25px"
                    width="30px"
                    alt="logo-node"
                  ></img>
                </li>
                <li className="chip">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
                    height="25px"
                    width="30px"
                    alt="logo-unity"
                  ></img>
                </li>
                <li className="chip">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/unity-69.svg"
                    height="25px"
                    width="30px"
                    alt="logo-unity"
                  ></img>
                </li>
                <li className="chip">
                  <img
                    src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a2b162c3b3ac82cbaa061dbf0829e678/vuforia-engine.png"
                    height="30px"
                    alt="logo-node"
                  ></img>
                </li>
              </ul>
            </div>
            <div className="get_started">
              Fill Details to explore Enigma CV<button onClick={handleclick}><span>Get Started</span> &#8594;</button>
            </div>
          </div>
          <div className="contentt">
            Team Members: <br></br>
            <div className="team">
              Full Stack Developers:
              <div className="profile">
                <a href="https://github.com/bhargav02550">
                  <img
                    src="https://github.com/bhargav02550.png"
                    alt="bhargav02550"
                    height="100px"
                    width={"100px"}
                  ></img>
                </a>
                Bhargav
              </div>
              <div className="profile">
                <a href="https://github.com/divyasree48">
                  <img
                    src="https://github.com/divyasree48.png"
                    alt="divyasree48"
                    height="100px"
                    width={"100px"}
                  ></img>
                </a>
                Divya
              </div>
            </div>
            <div className="team">
              UI Designers:{" "}
              <div className="profile">
                <a href="https://github.com/Hemanth040304">
                  <img
                    src="https://github.com/Hemanth040304.png"
                    alt="hemanth040304"
                    height="100px"
                    width={"100px"}
                  ></img>
                </a>
                Hemanth
              </div>
              <div className="profile">
                <a href="https://github.com/abhiramgopi1">
                  <img
                    src="https://github.com/Abhiramgopi1.png"
                    alt="abhiramgopi1"
                    height="100px"
                    width={"100px"}
                  ></img>
                </a>
                Abhi
              </div>
            </div>
            <div className="team">
              Unity Developers:
              <div className="profile">
                <a href="https://github.com/illasandeep">
                  <img
                    src="https://github.com/illasandeep.png"
                    alt="abhiramgopi1"
                    height="100px"
                    width={"100px"}
                  ></img>
                </a>
                Sandeep
              </div>
              <div className="profile">
                <a href="https://github.com/sivamedisetti">
                  <img
                    src="https://github.com/sivamedisetti.png"
                    alt="sivamedisetti"
                    height="100px"
                    width={"100px"}
                  ></img>
                </a>
                Siva
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Info;
