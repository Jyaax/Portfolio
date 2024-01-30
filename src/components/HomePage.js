import React from "react";
import "./HomePage.css";
import StyledButton from "./StyledButton";

export default function HomePage() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Tests de couleuuuuuuuuuuuurs</p>
      <StyledButton onClick={() => console.log("test")}>Test UwU</StyledButton>
      <div className="UwU">TEst de couleurs autre</div>
    </div>
  );
}
