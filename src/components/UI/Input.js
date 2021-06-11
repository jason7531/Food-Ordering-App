import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* here spread operator will ensure that the props key value pairs are added as it is */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
