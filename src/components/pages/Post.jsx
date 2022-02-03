import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import Navbar from '../Navbar';
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();

  const { contextUser } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [ingre, setIngre] = useState('');
  const [direction, setDirection] = useState('');
  const [duration, setDuration] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [foodType, setFoodType] = useState([]);
  const [flavours, setFlavours] = useState([]);
  const [previewImgSrc, setPreviewImgSrc] = useState('');

  const handleCheck = (e) => {
    if (e.target.checked && !foodType.includes(e.target.value)) {
      setFoodType([...foodType, e.target.value]);
    } else if (foodType.includes(e.target.value)) {
      setFoodType(foodType.filter((value) => !value.includes(e.target.value)));
    }
  };

  const handleFlavourCheck = (e) => {
    if (e.target.checked && !flavours.includes(e.target.value)) {
      setFlavours([...flavours, e.target.value]);
    } else if (flavours.includes(e.target.value)) {
      setFlavours(flavours.filter((value) => !value.includes(e.target.value)));
    }
  };

  const uploadImg = (img) => {
    if (!img) return;
    const storageRef = ref(storage, `/images/${img.name}`);
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // setImgSrc(url);
          const postContent = {
            recipeName: title,
            tag: foodType,
            description: desc,
            ingredients: ingre.split('\n'),
            directions: direction.split('\n'),
            flavour: flavours,
            duration: +duration,
            userID: contextUser[0].id,
            imgSrc: url,
          };

          const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postContent),
          };
          fetch(
            'https://foodie-fake-rest-api.herokuapp.com/meals',
            requestOption
          )
            .then((res) => res.json())
            .then((data) => {
              if (
                data &&
                window.confirm(
                  'Content has been uploaded. Do you want to visit your profile?'
                )
              ) {
                navigate('/profile');
              } else {
                setTitle('');
                setDesc('');
                setIngre('');
                setDirection('');
                setSelectedFile(null);
                setDuration(0);
              }
            });
        });
      }
    );
  };

  const readURL = (input) => {
    const file = input.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      setPreviewImgSrc(reader.result);
    };

    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || desc === '' || ingre === '' || direction === '') return;
    uploadImg(selectedFile);

    // const postContent = {
    //   recipeName: title,
    //   tag: foodType,
    //   description: desc,
    //   ingredients: ingre.split('\n'),
    //   directions: direction.split('\n'),
    //   flavour: flavours,
    //   duration: +duration,
    //   userID: contextUser[0].id,
    //   imgSrc: imgSrc,
    // };

    // console.log(postContent);
    // return;

    /* uncomment the following code to post the submitted content to server */

    /* create a requestOption (which is POST request) to upload our post */
    // const requestOption = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(postContent),
    // };
    // fetch('https://foodie-fake-rest-api.herokuapp.com/meals', requestOption)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (
    //       data &&
    //       window.confirm(
    //         'Content has been uploaded. Do you want to visit your profile?'
    //       )
    //     ) {
    //       navigate('/profile');
    //     } else {
    //       setTitle('');
    //       setDesc('');
    //       setIngre('');
    //       setDirection('');
    //       setSelectedFile(null);
    //       setDuration(0);
    //     }
    //   });
  };
  return (
    <>
      <Navbar />
      <div className='post'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-3'>
              <div className='pic-section'>
                <div className='ms-4 mt-4'>
                  <img
                    style={{ width: '300px', marginBottom: '10px' }}
                    src={
                      previewImgSrc
                        ? previewImgSrc
                        : 'http://www.vvc.cl/wp-content/uploads/2016/09/ef3-placeholder-image.jpg'
                    }
                    alt='preview'
                  />
                  <input
                    type='file'
                    id='img'
                    name='img'
                    accept='image/*'
                    onChange={(e) => readURL(e)}
                  />
                </div>
              </div>
              <div className='cook-info post__form m-4'>
                <div className='duration-div row mb-2'>
                  <div className='col-3 pt-2'>
                    <span>Duration:</span>
                  </div>
                  <div className='col-5'>
                    <input
                      type='number'
                      className='form-control'
                      value={duration}
                      onChange={(e) => {
                        e.target.value <= 0
                          ? setDuration(0)
                          : setDuration(e.target.value);
                      }}
                    />
                  </div>
                  <div className='col-4 pt-2'>
                    <span>mins</span>
                  </div>
                </div>
                <div className='checkbox-div row mt-4 mb-2 ms-2'>
                  <span>Type:</span>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='breakfastBox'>
                      Breakfast
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='breakfastBox'
                      value='breakfast'
                      onChange={(e) => handleCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='lunchBox'>
                      Lunch
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='lunchBox'
                      value='lunch'
                      onChange={(e) => handleCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='dinnerBox'>
                      Dinner
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='dinnerBox'
                      value='dinner'
                      onChange={(e) => handleCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='snackBox'>
                      Snack
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='snackBox'
                      value='snack'
                      onChange={(e) => handleCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='dessertBox'>
                      Dessert
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='dessertBox'
                      value='dessert'
                      onChange={(e) => handleCheck(e)}
                    />
                  </div>
                </div>
                <div className='checkbox-div row mb-2 ms-2'>
                  <span>Taste:</span>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='sweetBox'>
                      Sweet
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='sweetBox'
                      value='sweet'
                      onChange={(e) => handleFlavourCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='saltyBox'>
                      Salty
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='saltyBox'
                      value='salty'
                      onChange={(e) => handleFlavourCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='sourBox'>
                      Sour
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='sourBox'
                      value='sour'
                      onChange={(e) => handleFlavourCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='bitterBox'>
                      Bitter
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='bitterBox'
                      value='bitter'
                      onChange={(e) => handleFlavourCheck(e)}
                    />
                  </div>
                  <div className='form-check ms-4'>
                    <label className='form-check-label' htmlFor='spicyBox'>
                      Spicy
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='spicyBox'
                      value='spicy'
                      onChange={(e) => handleFlavourCheck(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9 post__form'>
              <div className='m-4'>
                <label htmlFor='recipe-title'>Recipe title:</label>
                <input
                  type='text'
                  name='recipe-title'
                  id='recipe-title'
                  className='form-control mb-2'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='recipe-desc'>Descriptions:</label>
                <textarea
                  name='recipe-desc'
                  id='recipe-desc'
                  className='con-edit-desc form-control mb-2'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label htmlFor='recipe-ingre'>Ingredients:</label>
                <textarea
                  name='recipe-ingre'
                  id='recipe-ingre'
                  className='con-edit form-control mb-2'
                  value={ingre}
                  onChange={(e) => setIngre(e.target.value)}
                ></textarea>
                <label htmlFor='recipe-direction'>Directions:</label>
                <textarea
                  name='recipe-direction'
                  id='recipe-direction'
                  className='con-edit form-control mb-5'
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                ></textarea>
                <div className='row'>
                  <div className='col-2 mt-3  d-flex justify-content-end'>
                    <span>Choose Visibility:</span>
                  </div>
                  <div className='col-4 d-flex justify-content-evenly'>
                    <input
                      type='radio'
                      className='btn-check'
                      name='visibility'
                      id='v-private'
                      autoComplete='off'
                    />
                    <label
                      className='btn btn-outline-success'
                      htmlFor='v-private'
                    >
                      Private
                    </label>
                    <input
                      type='radio'
                      className='btn-check'
                      name='visibility'
                      id='v-public'
                      autoComplete='off'
                    />
                    <label
                      className='btn btn-outline-success'
                      htmlFor='v-public'
                    >
                      Public
                    </label>
                    <input
                      type='radio'
                      className='btn-check'
                      name='visibility'
                      id='v-public-listed'
                      autoComplete='off'
                    />
                    <label
                      className='btn btn-outline-success'
                      htmlFor='v-public-listed'
                    >
                      Public + Listed
                    </label>
                  </div>
                  <div className='col-6 d-flex justify-content-end'>
                    <button type='submit' className='btn post-btn me-5'>
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
