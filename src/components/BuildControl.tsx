import classes from "./BuildControl.module.css";

type Props = {
  label: string;
  onAdd: () => void;
  onRemove: () => void;
  disabled: boolean;
};

export default function BuildControl(props: Props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.onRemove}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.onAdd}>
        More
      </button>
    </div>
  );
}
