import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import TopNavbar from '../TopNavbar';
import ResultRecipe from '../ResultRecipe';

const Result = () => {
  const URL = `https://foodie-fake-rest-api.herokuapp.com/meals`;
  const search = useLocation().search;
  let navigate = useNavigate();

  const [param, setParam] = useState(search.slice(8).replace('+', ' '));
  const [text, setText] = useState(param);
  const [inclusion, setInclusion] = useState('');
  const [exclusion, setExclusion] = useState('');
  const [foodType, setFoodType] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [flavour, setFlavour] = useState('normal');

  useEffect(() => {
    // get all recipes for initial page load
    fetch(URL.concat('?q=', param))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    let filterURL = URL;

    // filter recipes
    if (inclusion !== '') {
      filterURL = filterURL.concat('?recipeName_like=', text, '&q=', inclusion);
    } else {
      filterURL = filterURL.concat('?q=', text);
    }
    if (flavour !== 'normal')
      filterURL = filterURL.concat('&flavour_like=', flavour);
    if (foodType !== '') filterURL = filterURL.concat('&tag_like=', foodType);

    fetch(filterURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);

        // filter recipes by excluding ingredient
        if (exclusion !== '') {
          fetch(URL.concat('?q=', exclusion))
            .then((res) => {
              return res.json();
            })
            .then((data2) => {
              let diff = data.filter(
                ({ id: id1 }) => !data2.some(({ id: id2 }) => id2 === id1)
              );
              setRecipes(diff);
            });
        }
      });

    // update website url
    navigate(`/result/?search=${param.replace(' ', '+')}`);
  };

  return (
    <>
      <TopNavbar />
      <h2>Find a recipe</h2>
      <div className='input-group wrapper'>
        <input
          className='form-control fe-shadow'
          type='text'
          placeholder='find a recipe'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setParam(e.target.value);
          }}
        />
        <button className='btn btn-search' type='button' onClick={handleSearch}>
          <i className='fas fa-search'></i>
        </button>
      </div>
      <div className='flex-center'>
        <div className='search-filter'>
          <input
            type='text'
            id='include'
            placeholder='include ingredients'
            value={inclusion}
            onChange={(e) => setInclusion(e.target.value)}
          />
          <input
            type='text'
            id='exclude'
            placeholder='exclude ingredients'
            value={exclusion}
            onChange={(e) => setExclusion(e.target.value)}
          />
          <input
            type='text'
            id='type'
            placeholder='type of food'
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
          />
          <select
            id='flavours'
            value={flavour}
            onChange={(e) => setFlavour(e.target.value)}
          >
            <option value='normal'>Filter by flavours</option>
            <option value='spicy'>Spicy</option>
            <option value='sweet'>Sweet</option>
            <option value='salty'>Salty</option>
            <option value='sour'>Sour</option>
            <option value='bitter'>Bitter</option>
          </select>
        </div>
      </div>
      <div className='result'>
        <p style={{ textAlign: 'center' }}>Total result: {recipes.length}</p>
        <ul className='grid'>
          {recipes && <ResultRecipe recipes={recipes} />}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Result;
