import { useSelector } from "react-redux";
import { selectedUserName } from "../../redux/userSlice";
import "./warning.css";

export default function Warning() {
  const name = useSelector(selectedUserName)
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  );
}