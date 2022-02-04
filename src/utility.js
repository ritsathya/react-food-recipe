const URL = `https://foodie-fake-rest-api.herokuapp.com`;

export const deleteFromFavoriteList = (userID, favRecipeList) => {
  const requestOption = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fav_recipe_id: favRecipeList,
    }),
  };

  fetch(`${URL}/users/${userID}`, requestOption).then((res) => res.json());
};
