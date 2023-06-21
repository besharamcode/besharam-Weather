// import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import myImg from"../assets/myPic.png"

function About() {
  console.log = function () {};
  return (
    <>
    <Header/>
      <main className="padding-inline">
        <div className="about">
          <img src={myImg} alt="" />
          <p className="name">
            Hello, I am <span>Mohit</span>
          </p>
          <p className="passion">
            A <br /> <span>MERN </span> Stack Developer
          </p>
          <div className="followIcons flex-wrapper">
            <a href="https://www.facebook.com/Besharamcode/" className="fb">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-kushwah-39549a256/"
              className="link"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/besharamcode/" className="insta">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Besharamcode" className="twit">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/besharamcode" className="git">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default About;
