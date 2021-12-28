import React from 'react'
import { Link } from 'react-router-dom'
import FoodCard from './FoodCard'

const BreakfastSection = () => {
    return (
        <div className="recipe-list">
            <div className='heading-wrapper flex jc-center ai-center'>
                <span className='heading-icon'>
                    <i className="fas fa-bacon"></i>
                </span>
                <Link to='/Breakfast'>
                    <h2 className="heading-text">Breakfast</h2>
                </Link>
            </div>
            <div className="fe-container flex jc-center ai-center">
                <FoodCard imgSrc="bread.jpg" text="Bread" timer={10}/>
                <FoodCard imgSrc="egg-toast.jpg" text="Egg Toast" timer={5}/>
                <FoodCard imgSrc="french-toast.jpg" text="French Toast" timer={5}/>
                <FoodCard imgSrc="blueberry-pancakes.jpg" text="Blueberry Pancakes" timer={20}/>
            </div>

        </div>
    )
}

export default BreakfastSection
