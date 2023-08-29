import classes from "./Backdrop.module.css";

type Props = {
  show: boolean;
  onClick: () => void;
};

export default function Backdrop(props: Props) {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.onClick}></div>
  ) : null;
}
