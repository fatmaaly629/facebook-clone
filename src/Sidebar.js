import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import peopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLiberaryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVIDE-19 information center "
      />
      <SidebarRow Icon={EmojiFlagIcon} title="pages" />
      <SidebarRow Icon={peopleIcon} title="frindes" />
      <SidebarRow Icon={ChatIcon} title="Massenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLiberaryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
};

export default Sidebar;
