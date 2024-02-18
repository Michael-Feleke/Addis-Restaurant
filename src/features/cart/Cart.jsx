import { Link } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="bg-gray-500">
      <h2>Your cart, %NAME%</h2>

      <div>
        <Button to="/order/new">Order pizzas</Button>
        <Button>Clear cart</Button>
      </div>
      <BackButton to="/menu">&larr; Back to menu</BackButton>
    </div>
  );
}

export default Cart;
