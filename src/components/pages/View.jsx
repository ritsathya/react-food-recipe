import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

import { deleteFromFavoriteList } from '../../utility'
import Navbar from '../Navbar';
import GetRecommend from '../GetRecommend';
import Footer from '../Footer';
import { UserContext } from '../../UserContext';

const View = ({ data, user }) => {
  const URL = `https://foodie-fake-rest-api.herokuapp.com`;
  const { contextUser } = useContext(UserContext);
  const navigate = useNavigate();
  const stars = [1, 2, 3, 4, 5];
  const [heart, setHeart] = useState(false);
  const [starValue, setStarValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reportBox, setReportBox] = useState('');

  const id = useLocation().search;
  const param = id.slice(4).replace('+', ' ');
  const [recipe, setRecipe] = useState(null);
  const [users, setUsers] = useState(null);
  const [comments, setComments] = useState(null);
  const [replies, setReplies] = useState(null);
  const [clickID, setClickID] = useState(0);
  const [isReplyClick, setIsReplyClick] = useState(false);
  const [textArea, setTextArea] = useState('');
  const [replyArea, setReplyArea] = useState('');

  useEffect(() => {
    fetch(`${URL}/comments?mealID=${param}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
      });

    fetch(`${URL}/replies?mealID=${param}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReplies(data);
      });

    fetch(`${URL}/users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });

    if (contextUser) {
      fetch(`${URL}/ratings?userID=${contextUser[0].id}&mealID=${+param}`)
        .then((res) => res.json())
        .then((ratings) => {
          if (ratings.length > 0) setStarValue(ratings[0].score);
        });

      if (contextUser[0].fav_recipe_id.includes(+param)) setHeart(true);
    }

    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRecipes = () => {
    const recipe = data.filter((i) => i.id === parseInt(param));
    setRecipe(recipe);
  };

  const handleClick = () => {
    
    if (!contextUser) navigate('/login');

    setHeart(!heart);
    let temp = heart;
    temp = !temp;
    
    if(temp){
      contextUser[0].fav_recipe_id.push(+param);
      const requestOption = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fav_recipe_id: contextUser[0].fav_recipe_id,
        }),
      };

      fetch(`${URL}/users/${contextUser[0].id}`, requestOption)
        .then((res) => res.json())
        .then((data) => {});

    }else{
      deleteFromFavoriteList(contextUser[0].id, +param, contextUser[0].fav_recipe_id);
    }
  };

  const getDescription = () => {
    return recipe && recipe[0].description;
  };

  const getIngredients = () => {
    if (recipe && recipe[0].ingredients) {
      const ingredients = recipe[0].ingredients;
      let i = 0;
      return ingredients.map((ingredient) => (
        <li key={++i} className='ingredients'>
          <input type='checkbox' id={`box${i}`} />
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
        <li key={++i} className='directions'>
          <i className='fa-solid fa-utensils'>
            <h3>Step {i + 1}</h3>
          </i>
          <p className='my-0'>{direction}</p>
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
        <div key={reply.id} className='reply'>
          <div className='comment-owner flex ai-center'>
            <i className='fa-solid fa-circle-user' />
            {users && getUserName(reply.userID)}
          </div>
          <div className='reply-body'>
            <p>{reply.body}</p>
            <button className='btn-like'>Like</button>
          </div>
        </div>
      )
    );
  };

  const getComment = (comment) => {
    return (
      comment.mealID === parseInt(param) && (
        <div key={comment.id}>
          <div className='comment-owner flex ai-center'>
            <i className='fa-solid fa-circle-user' />
            {users && getUserName(comment.userID)}
          </div>
          <div className='comment-body'>
            <p>{comment.body}</p>
            <button className='btn-like'>Like</button>
            <button
              className='btn-reply'
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
              isReplyClick && clickID === comment.id ? 'd-block' : 'd-none'
            }
          >
            <textarea
              className='comment-textarea'
              cols='50'
              rows='10'
              value={replyArea}
              onChange={(e) => setReplyArea(e.target.value)}
            ></textarea>
            <button
              className='btn-post mb-5'
              onClick={() => replyComment(comment.id)}
            >
              Post
            </button>
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

  const postComment = () => {
    if (!contextUser) {
      window.confirm('Please login to post comments.') && navigate('/login');
      return;
    }
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userID: contextUser[0].id,
        body: textArea,
        mealID: +param,
      }),
    };

    fetch(`${URL}/comments`, requestOption)
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data]);
        setTextArea('');
      });
  };

  const replyComment = (commentID) => {
    if (!contextUser) {
      window.confirm('Please login to reply this comment.') &&
        navigate('/login');
      return;
    }

    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userID: contextUser[0].id,
        body: replyArea,
        mealID: +param,
        commentID: commentID,
      }),
    };

    fetch(`${URL}/replies`, requestOption)
      .then((res) => res.json())
      .then((data) => {
        setReplies([...replies, data]);
        setReplyArea('');
        setIsReplyClick(false);
      });
  };

  const rateRecipe = (score) => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userID: contextUser[0].id,
        score: score,
        mealID: +param,
      }),
    };

    fetch(`${URL}/ratings`, requestOption)
      .then((res) => res.json())
      .then(() => {
        setStarValue(score);
      });
  };

  const updateRating = (id, score) => {
    const requestOption = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        score: score,
      }),
    };

    fetch(`${URL}/ratings/${id}`, requestOption)
      .then((res) => res.json())
      .then(() => {
        setStarValue(score);
      });
  };

  return (
    <>
      <Navbar path='/view' />
      <div style={{ backgroundColor: '#f6f7f6' }}>
        <div className='flex jc-end fa-2x'>
          <i
            className='far fa-flag  my-2'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (!contextUser) {
                window.confirm('Please login to report') && navigate('/login');
              } else {
                setShowModal(!showModal);
              }
            }}
          />
          <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
            <Modal.Header closeButton>
              <Modal.Title>Report Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className='mb-3'>
                  <label htmlFor='message-text' className='col-form-label'>
                    Message:
                  </label>
                  <textarea
                    className='form-control'
                    id='message-text'
                    value={reportBox}
                    onChange={(e) => setReportBox(e.target.value)}
                  ></textarea>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='warning'
                onClick={() => {
                  setReportBox('');
                  setShowModal(!showModal);
                }}
              >
                Submit report
              </Button>
            </Modal.Footer>
          </Modal>
          <i
            className={`${heart ? 'fa-solid' : 'fa-regular'} fa-heart m-2 mx-4`}
            style={{ color: `${heart ? 'red' : 'black'}`, cursor: 'pointer' }}
            onClick={handleClick}
          />
        </div>
        <div className='view-container flex-center'>
          <img
            className='view-image'
            src={recipe && recipe[0].imgSrc}
            alt='food'
          />
          <div className='view-description'>
            <h1 className='text-center'>
              How to make {recipe && recipe[0].recipeName}
            </h1>
            <p className='mx-5'>{getDescription()}</p>
          </div>
        </div>
        <div className='view-description-section'>
          <h2 className='ingredient-title m-4'>Ingredient</h2>
          <ul className='h3'>{getIngredients()}</ul>

          <h2 className='steps-title m-4'>Steps</h2>
          <ul className='h3 mx-4 my-0'>{getDirection()}</ul>
        </div>
      </div>

      <div className='rating-section flex'>
        <p>Rate this recipe:</p>
        <div className='rating-stars'>
          {stars.map((s, i) => (
            <i
              key={i}
              className={
                starValue < s ? 'fa-regular fa-star' : 'fa-solid fa-star'
              }
              onClick={() => {
                if (!contextUser) {
                  window.confirm('Please login to rate this recipe') &&
                    navigate('/login');
                } else {
                  fetch(
                    `${URL}/ratings?userID=${
                      contextUser[0].id
                    }&mealID=${+param}`
                  )
                    .then((res) => res.json())
                    .then((ratings) => {
                      ratings < 1
                        ? rateRecipe(s)
                        : updateRating(ratings[0].id, s);
                    });
                }
              }}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>

      <div className='comment-section '>
        <div className='comment-section-header flex ai-center'>
          <p>Leave comment for this recipe</p>
          <i className='fa-solid fa-comment' />
        </div>
        <textarea
          id='commentTextBox'
          cols='50'
          rows='10'
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <button className='btn-post mb-5' onClick={() => postComment()}>
          Post
        </button>
        <div className='prev-comments'>
          {comments &&
            comments.map((comment) => {
              return getComment(comment);
            })}
        </div>
      </div>

      <div className='Recommended-Restaurant-Div'>
        <h3 className='Recommended-Restaurant-Title mx-4'>
          Recommended Restaurants
        </h3>
        <div className='Recommend-item d-flex flex-row'>
          <GetRecommend recipes={data} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default View;
