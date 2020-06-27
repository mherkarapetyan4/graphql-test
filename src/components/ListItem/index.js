import React from "react";

export const ListItem = (props) => {
  return (
    <div className={"list-group-item"} onClick={props.onClick}>
      {props.children}
    </div>
  );
};
