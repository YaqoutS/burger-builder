import BuildControl from "./BuildControl";
import classes from "./BuildControls.module.css";

type MyObject = {
  [key: string]: number; // Specify the type of values you expect
};

type Props = {
  onIngredientAdded: (type: string) => void;
  onIngredientRemoved: (type: string) => void;
  disabledInfo: MyObject;
  price: number;
  purchasable: boolean;
};

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export default function BuildControls(props: Props) {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          onAdd={() => props.onIngredientAdded(ctrl.type)}
          onRemove={() => props.onIngredientRemoved(ctrl.type)}
          disabled={props.disabledInfo[ctrl.type] === 1 ? true : false}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </div>
  );
}
