import React from 'react';

import CardItem from '../CardItem';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function ShoppingList({ recipe }) {
  const url = window.location.href;
  const id = url.charAt(url.length - 1);

  const lists = recipe.filter((element) => element.id === +id);

  return (
    <>
      <Navbar path='/shopping' />
      <div className='shopping-list-page flex jc-center'>
        <div className='shopping-list-contaienr'>
          <h2>
            <b>Shopping List</b>
          </h2>
          {lists[0].ingredients.map((ingre, i) => (
            <div key={i} className='form-check m-5 flex ai-center'>
              <input
                type='checkbox'
                className='form-check-input rounded-circle'
                id={`checkbox${i}`}
              />
              <label
                className='form-check-label d-inline-block mt-3'
                htmlFor={`checkbox${i}`}
              >
                {ingre}
              </label>
            </div>
          ))}
        </div>
        <div className='d-flex flex-column'>
          <button className='btn print-button'>
            <i className='fa-solid fa-print' />
            <b>Print</b>
          </button>
          <div className='card_item_in_shopping mt-3'>
            <CardItem
              key={lists[0].id}
              src={lists[0].imgSrc}
              text={lists[0].recipeName}
              label={lists[0].tag}
              duration={lists[0].duration}
              path={`/view/?id=${lists[0].id}`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
