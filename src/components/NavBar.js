import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
return(
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="/user/profile">
      <Menu.Item>
        {/* Will be replaced with the actual username */}
        username
      </Menu.Item>
    </NavLink>
  </Menu> 
)}

export default Navbar