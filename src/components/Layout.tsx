import { ReactNode } from "react";
import classes from "./Layout.module.css";
type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <div>Tollbar, SideDrawer, Backdrop</div>
      <div className={classes.Content}>{props.children}</div>
    </>
  );
}
