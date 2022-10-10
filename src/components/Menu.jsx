import React from 'react';
import { HelpDesk, ProjectsIcon, UserIcon, CalendarIcon, ClientsIcon, InvoiceIcon, ReportsIcon, SettingsIcon } from '../Icons/Icons.js';
import { MenuWrapper } from '../container/App.styles.js';
const Menu = () => {

  const Menus = [
    { icon: <UserIcon width={12} />, text: 'Dashboard' },
    { icon: <HelpDesk width={12} />, text: 'Help Desk' },
    { icon: <CalendarIcon width={12} />, text: 'My Tasks' },
    { icon: <ProjectsIcon width={12} />, text: 'Projects' },
    { icon: <ClientsIcon width={12} />, text: 'Clients' },
    { icon: <InvoiceIcon width={12} />, text: 'Invoice' },
    { icon: <ReportsIcon width={12} />, text: 'Reports' },
    { icon: <SettingsIcon width={12} />, text: 'Settings' }
  ]
  return (
    <MenuWrapper>
      {Menus.map((menu, idx) => <li key={idx}><span>{menu.icon}</span><span>{menu.text}</span></li>)}
    </MenuWrapper>
  );
}

export default Menu;
