import React from "react";

import "./form-input.component.styles.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    ></input>
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label `}
      >
        {label}
      </label>
    ) : null}
  </div>
);
