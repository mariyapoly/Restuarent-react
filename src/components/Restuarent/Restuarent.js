import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';
import './Restuarent.css';

const Restuarent = () => {

    const [meals, setMeals] = useState([]);
    const [orders, setOrder] = useState([]);
    const [displayMeals, setDisplayMeals] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setDisplayMeals(data.meals);
            })
    }, []);

    const handleOrder = (meal) => {
        const newMeal = [...orders, meal];
        setOrder(newMeal);
    }

    const handleSearchMeals = (event) => {

        const searchText = (event.target.value);

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setDisplayMeals(data.meals));

    }

    return (
        <div className="restuarent-container">
            <div className="search-bar">
                <div className="container">
                    <input onChange={handleSearchMeals} type="text" placeholder="search your meal" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {
                            displayMeals && displayMeals.map(meal => <Meal
                                key={meal.idMeal}
                                meal={meal}
                                handleOrder={handleOrder}
                            ></Meal>)
                        }
                    </div>
                    <div className="col-md-3">
                        <Order orders={orders}></Order>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restuarent;