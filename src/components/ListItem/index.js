import React from "react";

export const ListItem = (props) => {
  return <div onClick={props.onClick}>{props.children}</div>;
};
