"use client";

import { ReactNode, useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar onMenuClick={sideDrawerToggleHandler} />
      <SideDrawer
        open={showSideDrawer}
        onClosed={sideDrawerClosedHandler}
      ></SideDrawer>
      <div className={classes.Content}>{props.children}</div>
    </>
  );
}
