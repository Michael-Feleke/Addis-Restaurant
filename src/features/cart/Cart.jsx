import { Link } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

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
    <div className="min-w-[50%] bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </ul>

      <div className="mt-6 space-x-16 mb-12 flex items-center justify-center">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="secondary">Clear cart</Button>
      </div>
      <div className="text-center">
        <BackButton to="/menu">&larr; Back to menu</BackButton>
      </div>
    </div>
  );
}

export default Cart;
