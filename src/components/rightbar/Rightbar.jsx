import { ArrowDropDown } from "@material-ui/icons";
import Recommendation from "../recommendation/Recommendation";
import "./rightbar.css";
import { selectedUserName } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const Rightbar = () => {
  const name = useSelector(selectedUserName);
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {name ? <Recommendation type="user" /> : ""}
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          <ArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
