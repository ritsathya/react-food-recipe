import React , { useState, useEffect } from 'react'
import  {useLocation} from 'react-router-dom'

import Navbar from "../Navbar";
import GetRecommend from '../GetRecommend';

const View = ( {data} ) => {

    const id = useLocation().search;
    const [recipe, setRecipe] = useState(null); 

    const [click, setClick] = useState(false);
    const [param, setParam] = useState(id.slice(4).replace("+", " "));

    useEffect(() => {
        fetchRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const fetchRecipes = () =>{
        const recipe = data.filter( (i) => i.id == param)
        setRecipe(recipe);
    }

    console.log(typeof data)

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <>
            <Navbar path="/view"/>
            <div className='d-flex flex-column '>
                <div className='d-flex justify-content-end'>
                    <button className='border-0 bg-light'><i className="far fa-flag fa-2x my-2"></i></button>
                    <button className='border-0 bg-light' onClick={handleClick}>
                        <i className={(click ? "fa-solid fa-heart fa-2x m-2 mx-4" : "fa-regular fa-heart fa-2x m-2 mx-4")} 
                        style={click ? {color: "red"} : {color: "black"}}/>
                    </button>
                </div>
                <div className='d-flex'>
                    <div><img className='view-image' src={recipe && recipe[0].imgSrc} alt="beef-nachos" /></div>
                    <div className='d-flex flex-column'>
                        <h1 className='mx-auto'>How to make {recipe && recipe[0].recipeName}</h1>
                        <h3 className='mx-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facere in hic est libero at id pariatur! Vel libero, et doloribus eius dolores quos fugiat commodi accusamus ullam repellat vitae similique officia vero laboriosam molestias impedit magnam, alias dolor distinctio delectus nulla autem neque magni quam. Quibusdam excepturi quos esse enim assumenda debitis quaerat consectetur. Accusantium ullam iusto, provident delectus esse, et veniam ab, dicta eligendi rem sapiente. Sunt nisi eaque veniam, magni harum possimus dolore, corrupti dolorum ducimus, laborum quos modi necessitatibus provident quidem amet repellendus fuga. Culpa voluptates ducimus earum sunt illo minima commodi. Pariatur consequuntur et sit! lorem2000</h3>
                    </div>
                </div>
                <div className='view-description-section'>
                    <h2 className='ingredient-title m-4'>Ingredient</h2>
                    <ul>
                        <li className='h3 mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores.</li>
                        <li className='h3 mx-4'>Ducimus quam harum libero soluta molestias incidunt saepe odio omnis?</li>
                        <li className='h3 mx-4'>Deleniti reiciendis voluptatem est? Mollitia velit vel ab vero debitis.</li>
                        <li className='h3 mx-4'>Impedit nobis totam ducimus et voluptatibus sed. Asperiores, ex vitae!</li>
                        <li className='h3 mx-4'>Perspiciatis enim sapiente veritatis earum mollitia facilis ut molestiae quisquam.</li>
                    </ul>

                    <h2 className='steps-title m-4'>Steps</h2>
                    <ol className='order-list-view h3 mx-4'>
                        <li>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p className='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam in animi totam quia suscipit praesentium dolore facilis itaque natus!</p>
                        </li>
                        <li>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p className='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laborum?</p>
                        </li>
                        <li>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p className='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit eveniet, iure rem recusandae exercitationem.</p>
                        </li>
                        <li>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p className='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, facere.</p>
                        </li>
                        <li>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p className='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt aut eum suscipit, ex magni quasi qui odit quisquam laboriosam!</p>
                        </li>
                    </ol>

                    <h3 className='Recommended-Restaurant-Title mx-4'>Recommended Restaurants</h3>
                </div>
            </div>
            <div className='Recommended-Restaurant-Div'>
                <div className='Recommend-item d-flex flex-row'>
                    <GetRecommend recipes={data} />
                </div>
            </div>
        </>
    )
}

export default View;

