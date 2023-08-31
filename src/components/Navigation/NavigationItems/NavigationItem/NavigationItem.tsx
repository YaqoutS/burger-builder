import { ReactNode } from "react";
import classes from "./NavigationItem.module.css";

type Props = {
  children: ReactNode;
  link: string;
  isActive: boolean;
};

export default function NavigationItem(props: Props) {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.isActive ? classes.active : ""}>
        {props.children}
      </a>
    </li>
  );
}
