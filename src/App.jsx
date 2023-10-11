import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [food, setFood] = useState(foodsJson);
  const handleDelete = (id) => {
    const newFoodArr = food.filter((oneFood) => oneFood.id !== id);
    setFood(newFoodArr);
  };

  const handleAddFood = (oneFood) => {
    const copy = [...food];
    copy.push(oneFood);
    setFood(copy);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={handleAddFood} />
      {food.map((oneFood) => {
        return (
          <FoodBox
            key={oneFood.id}
            food={{
              name: oneFood.name,
              calories: oneFood.calories,
              image: oneFood.image,
              servings: oneFood.servings,
            }}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
