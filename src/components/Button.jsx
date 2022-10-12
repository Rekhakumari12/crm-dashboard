import React from 'react';
import { ButtonWrapper } from '../container/App.styles';

const Button = ({ children, type }) => {
  return (
    <ButtonWrapper type={type}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
