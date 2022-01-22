import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Recipe" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text" style={props.recommend ? {fontSize: "20px"} : {}}>{props.text}</h5>
          </div>
          <div className="cards__item__icon">
            <div>
              <i className={props.recommend ? "d-none" : "fa-solid fa-stopwatch"}/>
              <span className={props.recommend ? "d-none" : "fa-solid fa-stopwatch"}> 10 mins</span>
            </div>
            
            <div className={props.recommend ? "d-none" : "rating"}>
              <i className="fa-regular fa-star" />
              <i className="fa-regular fa-star" />
              <i className="fa-regular fa-star" />
              <i className="fa-regular fa-star" />
              <i className="fa-regular fa-star" />
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
