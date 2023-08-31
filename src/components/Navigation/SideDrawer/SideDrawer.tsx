import Logo from "@/components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "@/components/UI/Backdrop/Backdrop";

type Props = {
  open: boolean;
  onClosed: () => void;
};

export default function SideDrawer(props: Props) {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.open} onClick={props.onClosed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%"></Logo>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </>
  );
}
