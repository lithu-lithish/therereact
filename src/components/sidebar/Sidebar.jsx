import "./sidebar.scss";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PercentIcon from "@mui/icons-material/Percent";

import CreditCardIcon from "@mui/icons-material/CreditCard";

import Attend from "../../svg/attend";
import Dashboard from "../../svg/dashboard";
import Register from "../../svg/register";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../../svg/logogym.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div style={{ margin: "8% 0 auto", textAlign: "center" }}>
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="top">
        <h2
          className="logo"
          style={{
            fontFamily: "MonumentExtended",
            color: "#011627",
            fontStyle: "Normal",
            fontWeight: "400",
            forntSize: "30.5px",
            lineHeight: "37px",
            // paddingTop: "9%",
          }}
        >
          Gym tracker
        </h2>
      </div>
      <div style={{ paddingTop: "8%" }}>
        {/* <hr style={{}} /> */}
        <p
          style={{
            // width: "84%",
            border: "1px solid #E6E8E9",
          }}
        ></p>
      </div>
      <div className="center">
        <ul>
          <li>
            <Dashboard className="icon" />
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid #D0FD3E" : "",
              })}
            >
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <Register className="icon" />
            <NavLink
              to="/registration"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid #D0FD3E" : "",
              })}
            >
              <span>Registration card</span>
            </NavLink>
          </li>

          <li>
            <Attend className="icon" />
            <NavLink
              to="/table"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid #D0FD3E" : "",
              })}
            >
              <span>Users</span>
            </NavLink>
          </li>

          <li>
            <Attend className="icon" />

            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "black",
                width: "100%",
                borderRight: isActive ? "4px solid #D0FD3E" : "",
              })}
            >
              <span>Attendance report</span>
            </NavLink>
          </li>

          {/* <li
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          >
            <ExitToAppIcon
              className="icon"
              style={{
                color: "crimson",
              }}
            />
            <span
              style={{
                color: "crimson",
              }}
            >
              Logout
            </span>
          </li> */}
        </ul>
      </div>

      {/* <div className="bottom">
<div
className="colorOption"
onClick={() => dispatch({ type: "LIGHT" })}
></div>
<div
className="colorOption"
onClick={() => dispatch({ type: "DARK" })}
></div>
</div> */}
    </div>
  );
};

export default Sidebar;
