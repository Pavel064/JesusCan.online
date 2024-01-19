import React from "react";
import "./Button.css";

function Button({ label, onClick }) {
  return (
    <button className="neumorphic-button p-6" onClick={onClick}>
      <span className="text-base font-semibold">{label}</span>
    </button>
  );
}

export default Button;
