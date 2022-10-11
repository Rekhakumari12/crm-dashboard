import React from 'react';
import { TextWithIconWrapper } from '../container/App.styles';

const TextWithIcon = ({ text, icon }) => {
  return (
    <TextWithIconWrapper>
      <span className='font-medium'>{text}</span>
      {icon}
    </TextWithIconWrapper>
  );
}

export default TextWithIcon;
