const URL = `https://foodie-fake-rest-api.herokuapp.com`;

export const deleteFromFavoriteList = (userID, recipeID, favRecipeList) => {
    const temp = favRecipeList.filter(recipe => recipe !== recipeID);

    const requestOption = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fav_recipe_id: temp,
      }),
    };

    fetch(`${URL}/users/${userID}`, requestOption)
      .then((res) => res.json())
      .then((data) => {});
  }