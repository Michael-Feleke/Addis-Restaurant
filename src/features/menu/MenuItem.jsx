import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { Button } from "@material-tailwind/react";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-60 medium:w-80 ">
        <div className="relative mx-auto medium:mx-4 mt-4 w-[80%] medium:w-auto flex items-center justify-center text-gray-700 bg-white bg-clip-border rounded-xl">
          <img
            src={imageUrl}
            alt={name}
            className={`object-cover w-full rounded-xl h-full ${soldOut ? "opacity-70 grayscale" : ""}`}
          />
        </div>
        <div className="p-6 medium:h-32">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {!soldOut ? (
                <span>{formatCurrency(unitPrice)}</span>
              ) : (
                <span className="text-sm uppercase font-medium text-stone-500 line-through">
                  Sold out
                </span>
              )}
            </p>
          </div>
          <p className="block italic text-gray-700 font-sans text-md antialiased font-normal leading-normal opacity-75 capitalize">
            {ingredients.join(", ")}
          </p>
        </div>

        <div className="p-6 pt-0 text-center">
          {isInCart ? (
            <div className="flex gap-4 justify-center items-center">
              <UpdateItemQuantity currentQuantity={currentQuantity} id={id} />
              <DeleteItem id={id} />
            </div>
          ) : (
            <Button
              className={
                soldOut
                  ? `bg-yellow-400 opacity-50 cursor-not-allowed rounded-full text-black`
                  : "bg-yellow-400 rounded-full text-black"
              }
              onClick={handleAddToCart}
              disabled={soldOut}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
