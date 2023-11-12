import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/slice/userSlice";
import "../components/logout.css";
import Button from "@mui/material/Button";

function Logout() {
  const user = useSelector(selectUser);
  console.log(user);

  const dispatch = useDispatch();
  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <div className="center-content">
        <div className="center-details">
          <p>
            Welcome : <span style={{ color: "#8F54F9" }}> {user.email}</span>
          </p>

          <Button
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#8F54F9", height: "50px" }}
            onClick={handlelogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}

export default Logout;
