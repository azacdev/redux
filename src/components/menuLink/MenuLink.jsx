import { useSelector } from "react-redux";
import { selectedUserName } from "../../redux/userSlice";
import "./menulink.css";

const MenuLink = ({ icon, text }) => {
  const name = useSelector(selectedUserName)
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && `(${name})`}
      </span>
    </div>
  );
}

export default MenuLink