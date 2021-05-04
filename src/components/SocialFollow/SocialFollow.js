import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './styles.css'
export default function SocialFollow() {
  return (
   <div class="social-container">
      <p className="contact-box-title">SÍGUENOS</p>
      <a href="https://www.youtube.com/channel/UCCRJH1Uau7xpxiKJE1S8ijw"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/suomaya.cgmlti.7"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/GI_Suomaya" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/gisuomayacgmlti"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
</div>
  );
}