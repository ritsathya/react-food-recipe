import React from "react";

const lists = [
  "2kg Wheat Flour",
  "12 Eggs",
  "300g Milk Powder",
  "200g Dark Chocolate",
  "10g Baking Soda",
  "10ml Vanilla Extract",
  "100ml Full Cream Milk",
];

export default function ShoppingList() {
  return (
    <div className="Shopping-list-page d-flex justify-content-center">
      <div className="Shopping-List-Contaienr py-4">
        <h2>
          <b>Shopping List</b>
        </h2>
        {lists.map((list) => (
          <div className="form-check my-5 mx-5">
            <input
              type="checkbox"
              className="form-check-input rounded-circle"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              {list}
            </label>
          </div>
        ))}
      </div>
      <button className="Print-button">
        <i className="fas fa-print fa-lg"></i>
        <h4>
          <b>Print</b>
        </h4>
      </button>
    </div>
  );
}
