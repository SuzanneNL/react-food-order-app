// This brings the list of meals to the screen
import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const { REACT_APP_FB_URL } = process.env;

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // The function passed to useEffect should not return a promise, it must not be turned into an async function.
    // Therefore I write a separate async fetchMeals function, which I execute as part of useEffect.
    const fetchMeals = async () => {
      const response = await fetch(`${REACT_APP_FB_URL}meals.json`);
      // Parse data:
      const responseData = await response.json();
      // The values for the meal keys are nested properties. So responseData is an object, which I then transform into an array:
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
