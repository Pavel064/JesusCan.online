import React from "react";
import { Drawer } from "antd";

import burger from "/burger.svg";

export function MenuDrawer({ showDrawer, isOpen }) {
  return (
    <>
      <img src={burger} alt="Menu" className="w-9 h-9" onClick={showDrawer} />

      <Drawer
        title="Basic Drawer"
        onClose={showDrawer}
        open={isOpen}
        placement={"left"}
      >
        <p>About Us</p>
        <p>Testimony</p>
        <p>Read the Gospel</p>
        <p>Contact Us</p>
      </Drawer>
    </>
  );
}
