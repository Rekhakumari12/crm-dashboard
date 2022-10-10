import React, { useState } from "react";
import { BellIcon, DownArrow, UpArrow } from "../Icons/Icons";
import { HeaderWrapper } from "../container/App.styles";
import { Badge } from "@mui/material";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderWrapper>
      <div className="font-bold text-sm">CRM Dash</div>
      <div className="user_settings">
        <Badge
          color="primary"
          overlap="circular"
          variant="dot"
          className="mr-10"
        >
          {<BellIcon width={18} />}
        </Badge>
        <div className="profile_menu">
          <div className="profile_image">J</div>
          <div className="profile_image_dropdown" onClick={() => setOpen(!open)} >
            Jennie Thompson{" "}
            {!open ? <DownArrow width={12} /> :
              <UpArrow width={12} />}
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
