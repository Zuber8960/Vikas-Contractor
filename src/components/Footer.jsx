import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Vikas Kumar Gupta | Civil & Infrastructure Contractor</p>
      </div>
    </footer>
  );
}
