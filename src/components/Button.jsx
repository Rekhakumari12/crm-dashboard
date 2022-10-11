import React from 'react';
import { ButtonWrapper } from '../container/App.styles';

const Button = ({ children }) => {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
