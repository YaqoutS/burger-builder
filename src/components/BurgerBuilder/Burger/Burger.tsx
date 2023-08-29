import { ReactElement, ReactNode } from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

type Props = {
  ingredients: { [key: string]: number };
};

export default function Burger(props: Props) {
  let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(
    props.ingredients
  )
    .map((key) => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        console.log(key);
        return <BurgerIngredients key={key + i} type={key} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
}
