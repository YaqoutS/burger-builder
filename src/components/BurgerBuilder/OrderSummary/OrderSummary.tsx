import Button from "../../UI/Button/Button";

type MyObject = {
  [key: string]: number;
};

type Props = {
  ingredients: MyObject;
  price: number;
  onPurchaseCansle: () => void;
  onPurchaseContinue: () => void;
};

export default function OrderSummary(props: Props) {
  const ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key} style={{ padding: "5px 0" }}>
        <span style={{ textTransform: "capitalize" }}>{key}:</span>
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <>
      <h2>Your Order</h2>
      <p style={{ padding: "15px 0 5px" }}>
        A delicious burger with the following ingredinets:
      </p>
      <ul style={{ margin: "10px 30px" }}>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <p style={{ padding: "15px 0 0" }}>Continue to Checkout?</p>
      <Button btnType="Danger" onClick={props.onPurchaseCansle}>
        CANCEL
      </Button>
      <Button btnType="Success" onClick={props.onPurchaseContinue}>
        CONTINUE
      </Button>
    </>
  );
}
