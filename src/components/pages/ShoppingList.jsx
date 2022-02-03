import React from "react";
import Navbar from "../Navbar";

export default function ShoppingList({recipe}) {
  
  const url = window.location.href;
  const id = url.charAt(url.length - 1);

  const lists = Object.values(recipe).filter(element => element.id === +id);

  return (
    <>
      <Navbar path="/shopping" />
      <div className="shopping-list-page flex jc-center">
        <div className="shopping-list-contaienr">
          <h2>
            <b>Shopping List</b>
          </h2>
          {lists[0].ingredients.map((list) => (
            <div key={lists.id} className="form-check m-5 flex ai-center">
              <input
                type="checkbox"
                className="form-check-input rounded-circle"
                id={`exampleCheck${lists.id}`}
              />
              <label
                className="form-check-label d-inline-block mt-3"
                htmlFor={`exampleCheckkey=${lists.id}`}
              >
                {list.ingredientName}
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
