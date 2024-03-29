import {
  ExitToAppOutlined,
  FileCopyOutlined,
  GroupOutlined,
  HearingOutlined,
  HomeOutlined,
  List,
  MovieCreationOutlined,
  PhotoSizeSelectActualOutlined,
  ScheduleOutlined,
  Settings,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";
import { selectedUserName } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const Leftbar = () => {
  const name = useSelector(selectedUserName)
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeOutlined />} text="Homepage" />
        <MenuLink icon={<List />} text="Lists" />
        <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
        <MenuLink icon={<GroupOutlined />} text="Groups" />
        <MenuLink icon={<FileCopyOutlined />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
        <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
        <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
        <MenuLink icon={<HearingOutlined />} text="Wishlist" />
        <MenuLink icon={<Settings />} text="Settings" />
        {name ? <MenuLink icon={<ExitToAppOutlined />} text="Logout" /> : ""}
        
      </div>
    </div>
  );
}

export default Leftbar