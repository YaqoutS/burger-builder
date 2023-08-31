import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" isActive>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" isActive={false}>
        Checkout
      </NavigationItem>
    </ul>
  );
}
