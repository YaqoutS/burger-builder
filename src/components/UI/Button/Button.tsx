import { ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  onClick: () => void;
  children: ReactNode;
  btnType: string;
};

export default function Button(props: Props) {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
