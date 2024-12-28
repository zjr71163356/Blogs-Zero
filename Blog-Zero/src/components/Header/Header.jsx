import React from "react";
import classes from "./header.module.css";
function Header() {
  return (
    <>
 
        <ul className={`${classes.container}`}>
          <li>首页</li>
          <li>计算机</li>
          <li>生活</li>
          <li>碎碎念</li>
          <li>相册</li>
        </ul>
     <hr/>
    </>
  );
}

export default Header;
