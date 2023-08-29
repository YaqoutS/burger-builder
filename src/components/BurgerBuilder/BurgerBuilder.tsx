"use client";
import { useState } from "react";
import Burger from "./Burger/Burger";
import BuildControls from "./BuildControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";

type MyObject = {
  [key: string]: number;
};

const INGREDIENT_PRICES: MyObject = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState<MyObject>({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);

  const [purchasable, setPurchasable] = useState(false);

  const [purchasing, setPurchasing] = useState(false);

  const updatePurchasableState = (ingredients: MyObject) => {
    const sum = Object.keys(ingredients)
      .map((key) => ingredients[key])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchasable(sum > 0);
  };

  const addIngredientHandler = (type: string) => {
    const oldCount = ingredients[type];
    const updatedCound = oldCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCound;
    setIngredients(updatedIngredients);

    const oldPrice = totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];
    setTotalPrice(newPrice);

    updatePurchasableState(updatedIngredients);
  };

  const removeIngredientHandler = (type: string) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) return;
    const updatedCound = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCound;
    setIngredients(updatedIngredients);

    const oldPrice = totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];
    setTotalPrice(newPrice);

    updatePurchasableState(updatedIngredients);
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0 ? 1 : 0;
  }

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    alert("You continue");
  };

  return (
    <>
      <Modal show={purchasing} onModalClose={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice}
          onPurchaseCansle={purchaseCancelHandler}
          onPurchaseContinue={purchaseContinueHandler}
        ></OrderSummary>
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        onIngredientAdded={addIngredientHandler}
        onIngredientRemoved={removeIngredientHandler}
        disabledInfo={disabledInfo}
        price={totalPrice}
        purchasable={purchasable}
        onPurchase={purchaseHandler}
      />
    </>
  );
}
