import React from "react";
import {
  HelpDesk,
  ProjectsIcon,
  UserIcon,
  CalendarIcon,
  ClientsIcon,
  InvoiceIcon,
  ReportsIcon,
  SettingsIcon,
} from "../Icons/Icons.js";
import { MenuWrapper } from "../container/App.styles.js";
import { Grid } from "@mui/material";
const Menu = () => {
  const Menus = [
    { icon: <UserIcon width={20} />, text: "Dashboard" },
    { icon: <HelpDesk width={20} />, text: "Help Desk" },
    { icon: <CalendarIcon width={20} />, text: "My Tasks" },
    { icon: <ProjectsIcon width={20} />, text: "Projects" },
    { icon: <ClientsIcon width={20} />, text: "Clients" },
    { icon: <InvoiceIcon width={20} />, text: "Invoice" },
    { icon: <ReportsIcon width={20} />, text: "Reports" },
    { icon: <SettingsIcon width={20} />, text: "Settings" },
  ];
  return (
    <MenuWrapper>
      <Grid container className="justify-evenly" columnSpacing={{ sm: 4, xs: 2 }} rowSpacing={{ sm: 1, xs: 2 }}>
        {Menus.map((menu, idx) => (
          <Grid item sm={3} md={1} xs={3} key={idx} className="font-medium flex items-center justify-center list">
            <span className="mr-2">{menu.icon}</span><span>{menu.text}</span>
          </Grid>
        ))}
      </Grid>
    </MenuWrapper>
  );
};

export default Menu;
