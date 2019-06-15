import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <a href="https://github.com/Guidogl">
          <span>Built with </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/86/A_perfect_SVG_heart.svg"
            height="15"
            width="15"
            alt="heart"
          />
          <span> by Guidogl</span>
        </a>
      </footer>
    </div>
  );
}
