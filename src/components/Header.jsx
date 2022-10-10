import React from 'react';
import { BellIcon, DownArrow, UpArrow } from '../Icons/Icons';
import { HeaderWrapper } from '../container/App.styles';
const Header = () => {
  return (
    <HeaderWrapper>
      <div>CRM Dash</div>
      <div className='user_settings'>
        <div className='notifications'>
          <BellIcon width={12} />
        </div>
        <div className='profile_menu'>
          <div className='profile_image'>J</div>
          <div className='profile_image_dropdown'>Jennie Thompson <DownArrow width={12} /> <UpArrow width={12} /></div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
