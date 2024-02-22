import BackButton from "../../ui/BackButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="min-w-[50%]  p-6 rounded-lg  h-full medium:h-auto medium:bg-white medium:shadow-sm">
      <h2 className="text-xl font-semibold text-center medium:text-start ">
        {cart.length === 0
          ? `Your cart is empty ${username}. Please back to menu and add some items to start ordering!`
          : `Your cart, ${username}`}
      </h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </ul>
      {cart.length === 0 ? (
        ""
      ) : (
        <div className="mt-6 space-x-16 mb-12 flex items-center justify-center">
          <Button to="/order/new">Order pizzas</Button>
          <Button type="secondary" onClick={handleClearCart}>
            Clear cart
          </Button>
        </div>
      )}

      <div className="text-center mt-6">
        <BackButton to="/menu">&larr; Back to menu</BackButton>
      </div>
    </div>
  );
}

export default Cart;
