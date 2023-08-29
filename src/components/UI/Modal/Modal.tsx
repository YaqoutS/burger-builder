import { ReactNode } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

type Props = {
  children: ReactNode;
  show: boolean;
  onModalClose: () => void;
};
export default function Modal(props: Props) {
  return (
    <>
      <Backdrop show={props.show} onClick={props.onModalClose}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
}
