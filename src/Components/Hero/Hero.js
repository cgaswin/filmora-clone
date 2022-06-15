import React from "react";
import filmoraLogo from "../../assets/Logo.svg";
import ArrowUp from "../../assets/arrow-up-hero.svg";
import ArrowDown from "../../assets/arrow-down-hero.svg";
import { AiFillInstagram ,} from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2, ImArrowRight2 } from "react-icons/im";


import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-left">
        <div className="social-icons">
          <img alt="arrow-up" src={ArrowUp} className="arrow-up" />
          <a
            href="https://instagram.com/filmora.gec?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="social-icon social-icon-instagram" />
          </a>
          <a
            href="https://twitter.com/filmoragec?t=pQd-W1SoSWKiTRLqFNHxxQ&s=09"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare className="social-icon social-icon-twitter" />
          </a>
          <a
            href="https://www.facebook.com/filmora22gecpkd"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook2 className="social-icon social-icon-facebook" />
          </a>
          <img alt="arrow-down" src={ArrowDown} className="arrow-down" />
        </div>
      </div>

      <div className="hero-container-main">
        <div className="hero-container-main-content">
          <div className="filmora-logo">
            <img src={filmoraLogo} alt="filmora Logo" />
            <p className="logo-description">The aura of films</p>
          </div>
          <div className="counter">
            <p>counter</p>
          </div>
          <div className="hero-branding">
            <p>Students Federation of India, GEC Palakkad</p>
          </div>

          <div className="hero-btn">
            <button className="book-tickets-btn">
              <span className="button-text">
                Book tickets{" "}
                <span className="arrow-right">
                  <ImArrowRight2 className="arrow-right" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
