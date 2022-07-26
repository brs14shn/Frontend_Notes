import React from "react";
import cw from "../assets/cw_logo.png";

const Header = React.memo(({ img }) => {
  //* React.memo componentleri hafıza almak için kullanılır.
  //*
  console.log("Rendering: Header Comp.");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
});

export default Header;
