import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, My Name is Govind</h2>
        <div className="prompt">
          <p>An ambitious software developer with a passion for learning, designing and growing</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS, Angular, HTML, CSS, MaterialUI, TailwindCSS,
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS,MySQL, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>JavaScript, Java, Python,C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;