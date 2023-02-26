import React from "react";

import Navbar from "../navbar/Navbar";


function Header({ basket, user, setUser }) {
  return (
    <div className="header">
      <Navbar basket={basket} user={user} setUser={setUser}/>
    </div>
  );
}

export default Header;
