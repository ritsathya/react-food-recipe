import React, { Component } from 'react'
import CardItem from './CardItem';

const GetRecommend = ({ recipes }) => {
    const temp = recipes.filter( a => a.id <= 20);
    return (
      <>
        {temp.map((recipe) => (
            <CardItem
            key={recipe.id}
            src={recipe.imgSrc}
            text={recipe.recipeName}
            label={recipe.tag}
            recommend={true}
            path="/services"
            />
        ))
        }
      </>
    );
  };
  
  export default GetRecommend;