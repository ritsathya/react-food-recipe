import React, { PropTypes, Component,useState, useContext } from 'react'
import { UserContext } from '../../UserContext';

import { deleteFromFavoriteList } from '../../utility'
import CardItem from "../CardItem";
import Navbar from "../Navbar";
import NotFound from '../NotFound';

export default function FavRecipeList({user, recipes}) {

  const { contextUser } = useContext(UserContext);
  const favRecipe = contextUser[0].fav_recipe_id;
  let lists = Object.values(recipes).filter(element => favRecipe.includes(element.id));

  function reRender(listId){
    deleteFromFavoriteList(contextUser[0].id, listId, user[0].fav_recipe_id);
  }

  const checkList = () => {
    return(
      lists.map((list) => (
        <>
        <div>
          <button type="button" class="delete_list_button rounded-circle">
            <i class="fa fa-minus" aria-hidden="true" onClick={reRender(list.id)}></i>
          </button>
          <CardItem
            key={list.id}
            src={list.imgSrc}
            text={list.recipeName}
            label={list.tag}
            duration={list.duration}
            path={`/shoppingList/?id=${list.id}`}
          />
        </div>
        </>
      ))
    )
  }

  return(
    <>
    <div className={lists.length !== 0 ? '' : 'd-none'}>
      <Navbar path="/favRecipeList" />
    </div>
    {lists.length !== 0 ?
      <div className='favorite_recipe_list d-flex mt-4'>
        {checkList()}
      </div>
     : <NotFound/>}
    </>
  );
}
