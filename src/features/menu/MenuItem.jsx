import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

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
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 ">
        <div className="relative mx-4 mt-4  text-gray-700 bg-white bg-clip-border rounded-xl">
          <img
            src={imageUrl}
            alt={name}
            className={`object-cover w-full h-full ${soldOut ? "opacity-70 grayscale" : ""}`}
          />
        </div>
        <div className="p-6 h-32">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {!soldOut ? (
                <p>{formatCurrency(unitPrice)}</p>
              ) : (
                <p className="text-sm uppercase font-medium text-stone-500 line-through">
                  Sold out
                </p>
              )}
            </p>
          </div>
          <p className="block italic text-gray-700 font-sans text-md antialiased font-normal leading-normal opacity-75 capitalize">
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="p-6 pt-0 text-center">
          <Button onClick={handleAddToCart} disabled={soldOut}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
