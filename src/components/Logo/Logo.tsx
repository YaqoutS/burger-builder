import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

// const burgerLogo = require("../../assets/images/burger-logo.png");

type Props = {
  height?: string;
};

export default function Logo(props: Props) {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src="../../assets/images/burger-logo.png" alt="My Burger" />
    </div>
  );
}
