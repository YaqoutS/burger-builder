import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "@/components/Navigation/NavigationItems/NavigationItems";

type Props = {
  onMenuClick: () => void;
};

const divMenuStyle = {
  width: "90%",
  height: "3px",
  backgroundColor: "white",
};

export default function Toolbar(props: Props) {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Menu} onClick={props.onMenuClick}>
        <div style={divMenuStyle}></div>
        <div style={divMenuStyle}></div>
        <div style={divMenuStyle}></div>
      </div>
      <div className={[classes.Logo, classes.DesktopOnly].join(" ")}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
}
