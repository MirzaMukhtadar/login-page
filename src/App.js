import React from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/slice/userSlice";
import Logout from "./components/Logout";
import "./assests/css/Global.css";

function App() {
  const user = useSelector(selectUser);

  return <div>{user ? <Logout /> : <Login />}</div>;
}

export default App;
