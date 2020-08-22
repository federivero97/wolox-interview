import React from 'react';
import { Bounce } from "react-awesome-reveal";

const FormError = ({children, errors, name}) => {
  const error = errors[name] || null;

  if (!error) { return null; };

  return (<Bounce><div className="alert alert-danger" children={children(error.message)}/></Bounce>);
};

export default FormError; 