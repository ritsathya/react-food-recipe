import React from 'react'

const FoodCard = ({ imgSrc, text, timer }) => {
    return (
        <div className='fe-card'>
            <img className="fe-card-img" src={`${process.env.PUBLIC_URL}/images/${imgSrc}`} alt="food-img" />
            <div className="fe-content">
                <div className="fe-tag">breakfast</div>
                <div className="fe-card-title">{text.length < 25 ? text : text.slice(0,25)+'...' }</div>
                <div className="fe-card-detail flex jc-between">
                    <div className="fe-timer">
                        <i className="fas fa-stopwatch"></i>
                        <span>{timer}mins</span>
                    </div>
                    <div className="rate">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
