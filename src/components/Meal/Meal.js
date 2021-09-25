import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { meal, handleOrder } = props || {};
    const { strMeal, strMealThumb, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9 } = meal;


    return (
        <div className="single-meal">
            <div className="meal-thum">
                <img src={strMealThumb} alt="meal-thumb" />
            </div>
            <div className="meal-des">
                <div className="meal-des-top d-flex justify-content-between align-items-start">
                    <h4>{strMeal}</h4>
                    <p>{strCategory}</p>
                </div>
                <p className="meal-recepies-title">{strMeal} Recepies</p>
                <ul className="meal-recepies">
                    <li>{strIngredient1}</li>
                    <li>{strIngredient2}</li>
                    <li>{strIngredient3}</li>
                    <li>{strIngredient4}</li>
                    <li>{strIngredient5}</li>
                    <li>{strIngredient6}</li>
                    <li>{strIngredient7}</li>
                    <li>{strIngredient8}</li>
                    <li>{strIngredient9}</li>
                </ul>
                <button onClick={() => handleOrder(meal)} className="oder-btn">order now</button>
            </div>
        </div>
    );
};

export default Meal;