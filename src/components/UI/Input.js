import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*{...props.input} ensures that all the key value pairs in the input object are added as props to the input */}
      <input {...props.input}/>
  </div>;
};

export default Input;
