import React from "react";

import "./custom-button.styles.scss";

export const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

// other props is the values that were pussed to the button in the sign in component
// {children} is whatever is inside in the sign in component
//  inside the Custom Button in our case 'Sign In'
