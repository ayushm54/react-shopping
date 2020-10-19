import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// we are creating a higher order component here
// a HOC takes as input other components and returns a new functional component
// here we are rendering a Spinner in case there is a backend call going on
// oterwise we are returning the passed inputComponent
const WithSpinner = (InputComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <InputComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
