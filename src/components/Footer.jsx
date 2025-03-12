import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Auto Pro. All rights reserved.</p>
    </footer>
  )
}
