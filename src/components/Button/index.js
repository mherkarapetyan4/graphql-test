import React from "react";

export const Button = (props) => {
  return (
    <button className={`btn ${props.classes}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
