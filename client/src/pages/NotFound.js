import React from "react";

function NotFound() {
  return (
    <div style={{
      textAlign: "center",
      padding: "4rem",
      fontFamily: "sans-serif",
      color: "#555"
    }}>
      <h2 style={{ fontSize: "2rem", color: "#e74c3c" }}>404 - Page Not Found</h2>
      <p style={{ marginTop: "1rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
}

export default NotFound;
