import React from "react";
import { Link } from "react-router-dom";

import { Drawer, Menu } from "antd";

import burger from "/burger.svg";
import logoImage from "/logo.svg";

function getItem(label, key, path) {
  return {
    key,
    label: <Link to={path}>{label}</Link>,
  };
}

export function MenuDrawer({ showDrawer, isOpen }) {
  const menuItems = [
    getItem("About Us", "1", "/about-us"),
    getItem("Home", "2", "/"),
    getItem("Bible", "3", "/bible"),
    getItem("Contact Us", "4", "/contact-us"),
  ];

  const onMenuClick = (e) => {
    console.log("Menu click: ", e);
    showDrawer();
  };

  return (
    <>
      <img
        src={burger}
        alt="Menu"
        className="w-9 h-9 cursor-pointer"
        onClick={showDrawer}
      />

      <Drawer
        title="MAIN MENU"
        onClose={showDrawer}
        open={isOpen}
        placement={"left"}
        styles={{
          body: {
            padding: "0 1.5rem 1.5rem",
            marginTop: "4rem",
          },
        }}
      >
        <div className="flex flex-col justify-between h-full">
          <Menu
            onClick={onMenuClick}
            style={{
              width: "full",
              fontSize: "1.5rem",
              borderColor: "transparent",
              textAlign: "right",
              textTransform: "uppercase",
            }}
            mode="inline"
            items={menuItems}
          />
          <div className="w-full flex justify-center">
            <img className="h-20" src={logoImage} alt="Logo" />
          </div>
        </div>
      </Drawer>
    </>
  );
}
