import React, { PropTypes, Component } from 'react'

import CardItem from "../CardItem";
import Navbar from "../Navbar";

export default function FavRecipeList({user, recipes}) {
  const favRecipe = user[0].fav_recipe_id;
  const lists = Object.values(recipes).filter(element => favRecipe.includes(element.id));
  return(
    <>
    <Navbar path="/shopping" />

    <div className='favorite_recipe_list d-flex mt-4'>
      {lists.map((list) => (
          <CardItem
            key={list.id}
            src={list.imgSrc}
            text={list.recipeName}
            label={list.tag}
            duration={list.duration}
            path={`/view/?id=${list.id}`}
          />
      ))}
    </div>
    </>
  );
}