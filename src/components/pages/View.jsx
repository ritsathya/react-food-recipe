import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../Navbar";
import GetRecommend from "../GetRecommend";
import Footer from "../Footer";

const View = ({ data }) => {
  const id = useLocation().search;
  const param = id.slice(4).replace("+", " ");
  const [recipe, setRecipe] = useState(null);
  const [users, setUsers] = useState(null);
  const [comments, setComments] = useState(null);
  const [replies, setReplies] = useState(null);
  const [click, setClick] = useState(false);
  const [clickID, setClickID] = useState(0);
  const [isReplyClick, setIsReplyClick] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
      });

    fetch("http://localhost:5000/replies")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReplies(data);
      });

    fetch("http://localhost:5000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });

    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRecipes = () => {
    const recipe = data.filter((i) => i.id === parseInt(param));
    setRecipe(recipe);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const getDescription = () => {
    return recipe && recipe[0].description;
  };

  const getIngredients = () => {
    if (recipe && recipe[0].ingredients) {
      const ingredients = recipe[0].ingredients;
      let i = 0;
      return ingredients.map((ingredient) => (
        <li key={++i} className="ingredients">
          <input type="checkbox" id={`box${i}`} />
          <label htmlFor={`box${i}`}>{ingredient.ingredientName}</label>
        </li>
      ));
    }
  };

  const getDirection = () => {
    if (recipe && recipe[0].direction) {
      const directions = recipe[0].direction;
      let i = 0;
      return directions.map((direction) => (
        <li key={++i} className="directions">
          <i className="fa-solid fa-utensils">
            <h3>Step {i + 1}</h3>
          </i>
          <p className="my-0">{direction}</p>
        </li>
      ));
    }
  };

  const getUserName = (id) => {
    return users.map((user) => {
      return user.id === id && user.userName;
    });
  };

  const getReply = (reply, comment) => {
    return (
      reply.commentID === comment.id && (
        <div key={reply.id} className="reply">
          <div className="comment-owner flex ai-center">
            <i className="fa-solid fa-circle-user" />
            {users && getUserName(reply.userID)}
          </div>
          <div className="reply-body">
            <p>{reply.body}</p>
            <button className="btn-like">Like</button>
          </div>
        </div>
      )
    );
  };

  const getComment = (comment) => {
    return (
      comment.mealID === parseInt(param) && (
        <div key={comment.id}>
          <div className="comment-owner flex ai-center">
            <i className="fa-solid fa-circle-user" />
            {users && getUserName(comment.userID)}
          </div>
          <div className="comment-body">
            <p>{comment.body}</p>
            <button className="btn-like">Like</button>
            <button
              className="btn-reply"
              onClick={() => {
                setClickID(comment.id);
                setIsReplyClick(!isReplyClick);
              }}
            >
              Reply
            </button>
          </div>
          <div
            className={
              isReplyClick && clickID === comment.id ? "d-block" : "d-none"
            }
          >
            <textarea
              className="comment-textarea"
              cols="50"
              rows="10"
            ></textarea>
            <button className="btn-post mb-5">Post</button>
          </div>
          <>
            {replies &&
              replies.map((reply) => {
                return getReply(reply, comment);
              })}
          </>
        </div>
      )
    );
  };

  return (
    <>
      <Navbar path="/view" />
      <div style={{ backgroundColor: "#f6f7f6" }}>
        <div className="flex jc-end fa-2x">
          <i className="far fa-flag  my-2"></i>
          <i
            className={`${click ? "fa-solid" : "fa-regular"} fa-heart m-2 mx-4`}
            style={{ color: `${click ? "red" : "black"}` }}
            onClick={handleClick}
          />
        </div>
        <div className="view-container flex-center">
          <img
            className="view-image"
            src={recipe && recipe[0].imgSrc}
            alt="food"
          />
          <div className="view-description">
            <h1 className="text-center">
              How to make {recipe && recipe[0].recipeName}
            </h1>
            <p className="mx-5">{getDescription()}</p>
          </div>
        </div>
        <div className="view-description-section">
          <h2 className="ingredient-title m-4">Ingredient</h2>
          <ul className="h3">{getIngredients()}</ul>

          <h2 className="steps-title m-4">Steps</h2>
          <ul className="h3 mx-4 my-0">{getDirection()}</ul>
        </div>
      </div>

      <div className="rating-section flex">
        <p>Rate this recipe:</p>
        <div className="rating-stars">
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
      </div>

      <div className="comment-section ">
        <div className="comment-section-header flex ai-center">
          <p>Leave comment for this recipe</p>
          <i className="fa-solid fa-comment" />
        </div>
        <textarea id="commentTextBox" cols="50" rows="10"></textarea>
        <button className="btn-post mb-5">Post</button>
        <div className="prev-comments">
          {comments &&
            comments.map((comment) => {
              return getComment(comment);
            })}
        </div>
      </div>

      <div className="Recommended-Restaurant-Div">
        <h3 className="Recommended-Restaurant-Title mx-4">
          Recommended Restaurants
        </h3>
        <div className="Recommend-item d-flex flex-row">
          <GetRecommend recipes={data} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default View;
