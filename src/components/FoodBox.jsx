import React from "react";

function FoodBox({ food, handleDelete }) {
  console.log(food);
  return (
    <div>
      <p>{food.name}</p>

      <img className="logo" src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button onClick={() => handleDelete(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
