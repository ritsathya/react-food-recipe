import React from "react";
import Navbar from "../Navbar";

const lists = [
  {
    id: 1,
    text: "2kg Wheat Flour",
  },
  {
    id: 2,
    text: "12 Eggs",
  },
  {
    id: 3,
    text: "300g Milk Powder",
  },
  {
    id: 4,
    text: "200g Dark Chocolate",
  },
  {
    id: 5,
    text: "10g Baking Soda",
  },
  {
    id: 6,
    text: "10ml Vanilla Extract",
  },
  {
    id: 7,
    text: "100ml Full Cream Milk",
  },
];

export default function ShoppingList() {
  return (
    <>
      <Navbar path="/shopping" />
      <div className="shopping-list-page flex jc-center">
        <div className="shopping-list-contaienr py-4">
          <h2>
            <b>Shopping List</b>
          </h2>
          {lists.map((list) => (
            <div key={list.id} className="form-check m-5">
              <input
                type="checkbox"
                className="form-check-input rounded-circle"
                id={`exampleCheck${list.id}`}
              />
              <label
                className="form-check-label"
                htmlFor={`exampleCheckkey=${list.id}`}
              >
                {list.text}
              </label>
            </div>
          ))}
        </div>
        <button className="btn print-button">
          <i className="fa-solid fa-print" />
          <b>Print</b>
        </button>
      </div>
    </>
  );
}
