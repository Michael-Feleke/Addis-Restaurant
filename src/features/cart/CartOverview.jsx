import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t-gray-200 border-t-2">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
