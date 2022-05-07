import React, {
  PropTypes,
  Component,
  useState,
  useContext,
  useEffect,
} from 'react';
import { UserContext } from '../../UserContext';

import { deleteFromFavoriteList } from '../../utility';
import CardItem from '../CardItem';
import TopNavbar from '../TopNavbar';
import NotFound from '../NotFound';

export default function FavRecipeList({ recipes }) {
  const { contextUser, setContextUser } = useContext(UserContext);
  const [favRecipe, setFavRecipe] = useState(null);
  const [lists, setLists] = useState(null);

  useEffect(() => {
    const URL = `https://foodie-fake-rest-api.herokuapp.com`;
    fetch(URL.concat('/users/', contextUser[0].id))
      .then((res) => res.json())
      .then((data) => setFavRecipe(data.fav_recipe_id));
  }, []);

  useEffect(() => {
    const filterList = recipes.filter(
      ({ id: id1 }) => favRecipe && favRecipe.some((id2) => id1 === id2)
    );

    setLists(filterList);
  }, [favRecipe]);

  function reRender(listId) {
    const newFavRecipe = favRecipe.filter((data) => data !== listId);
    setFavRecipe(newFavRecipe);
    deleteFromFavoriteList(contextUser[0].id, newFavRecipe);
  }

  const checkList = () => {
    if (lists.length == 0)
      return (
        <div>
          <img
            src='https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'
            alt='empty list'
          />
        </div>
      );
    return lists.map((list) => (
      <div key={list.id}>
        <button
          type='button'
          className='delete_list_button'
          onClick={() => reRender(list.id)}
        >
          <i className='fa fa-minus' aria-hidden='true'></i>
        </button>{' '}
        <CardItem
          key={list.id}
          src={list.imgSrc}
          text={list.recipeName}
          label={list.tag}
          duration={list.duration}
          path={`/shoppingList/?id=${list.id}`}
        />
      </div>
    ));
  };

  return (
    <>
      <div className={lists ? '' : 'd-none'}>
        <TopNavbar path='/favRecipeList' />
      </div>
      {lists ? (
        <div className='favorite_recipe_list grid'>{checkList()}</div>
      ) : (
        <div className='flex-center'>
          <h2>List is empty</h2>
        </div>
      )}
    </>
  );
}
