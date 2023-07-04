import { updateStart, updateSuccess, updateError } from "./userSlice";
import axios from "axios";

const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.get("https://localhost:8800/api/users/123/update");
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};

export default updateUser;