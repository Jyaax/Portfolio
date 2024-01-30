import React from "react";
import "./StyledButton.css";

const StyledButton = ({ onClick, children }) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default StyledButton;
