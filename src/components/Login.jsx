import React, { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/userSlice";
import image from "../authv2loginillustrationlight.png";
import treeImage from "../assests/images/tree.png";
import maskImage from "../assests/images/auth-v2-mask-light.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import facebookIcon from "../assests/images/facebook.svg";
import twitterIcon from "../assests/images/twitter.svg";
import githubIcon from "../assests/images/github.svg";
import googleIcon from "../assests/images/google.svg";
import MediaQuery from "./media-query/MediaQuery";
import LogoDesktop from "./logo-desktop/LogoDesktop";
import LogoMobile from "./logo-mobile/LogoMobile";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
        loggedIn: true,
      })
    );
    console.log("clicked");
    alert("Login Succes");
  };
  const isDesktop = MediaQuery("(min-width:992px)");
  return (
    <>
      <div className="display-logo-block">
        <div className="logo">
          <svg
            width="35"
            height="29"
            version="1.1"
            viewBox="0 0 30 23"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Artboard" transform="translate(-95.000000, -51.000000)">
                <g id="logo" transform="translate(95.000000, 50.000000)">
                  <path
                    id="Combined-Shape"
                    fill="#9155FD"
                    d="M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"
                  ></path>
                  <polygon
                    id="Rectangle"
                    opacity="0.077704"
                    fill="#000"
                    points="0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646"
                  ></polygon>
                  <polygon
                    id="Rectangle"
                    opacity="0.077704"
                    fill="#000"
                    points="0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162"
                  ></polygon>
                  <polygon
                    id="Rectangle"
                    opacity="0.077704"
                    fill="#000"
                    points="22.7419355 8.58870968 30 12.7417372 30 16.9537453"
                    transform="translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) "
                  ></polygon>
                  <polygon
                    id="Rectangle"
                    opacity="0.077704"
                    fill="#000"
                    points="22.7419355 8.58870968 30 12.6409734 30 15.2601969"
                    transform="translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) "
                  ></polygon>
                  <path
                    id="Rectangle"
                    fillOpacity="0.15"
                    fill="#FFF"
                    d="M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z"
                  ></path>
                  <path
                    id="Rectangle"
                    fillOpacity="0.35"
                    fill="#FFF"
                    transform="translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) "
                    d="M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <h3 className="logo-name">MATERIO</h3>
        </div>
      </div>
      <div className="login-container">
        <div className="illustration-container">
          <div className="form-image">
            <img src={image} alt="" className="illustration-image" />
            <div className="tree-image"></div>
            <img src={treeImage} className="tree-image" alt="" />
          </div>
          <div className="mask-image">
            <img src={maskImage} className="mask-image" alt="" />
          </div>
        </div>

        <div className="login-form">
          <h5>Welcome to Materio! 👋🏻</h5>
          <p>Please sign in to your account and start the adventure</p>
          <div className="box-credentials">
            <span>Admin:</span> <b>admin@materio.com</b> / <span>Pass:</span>{" "}
            <b>admin</b>
            <br />
            <span>Client: </span> <b>client@materio.com </b>/ <span>Pass:</span>{" "}
            <b>client</b>
          </div>
          <div>
            <div className="flex-textfield">
              <TextField
                id="outlined-helperText-email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="input-field-mui"
              />
              <TextField
                id="outlined-helperText-password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-field-mui"
              />
              <div className="remember-forgot-flex">
                <div className="input-check">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="remember"
                    value="Bike"
                  />
                  <label htmlFor="remember"> Remember Me</label>
                </div>
                <div className="forgot-password">
                  <p style={{ color: "#8F54F9" }}>Forgot Password ?</p>
                </div>
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "#8F54F9", height: "50px" }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <div className="new-platform">
                <p>New on our Platform?</p>
                <div className="create-accoutn">
                  <p style={{ color: "#8F54F9" }}>Create an Account</p>
                </div>
              </div>
              <div className="or-container">
                <hr className="or-line-left" />
                <p style={{ fontSize: "20px" }} className="or-text">
                  or
                </p>
                <hr className="or-line-right" />
              </div>
              <div className="social-btn">
                <img src={facebookIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={githubIcon} alt="" />
                <img src={googleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
