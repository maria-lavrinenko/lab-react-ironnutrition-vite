import { useState } from "react";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);

  const handleCalories = (event) => setCalories(event.target.valueAsNumber);
  const handleServings = (event) => setServings(event.target.valueAsNumber);

  const resetInputs = () => {
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const oneFood = {
      name: name,
      image,
      calories,
      servings,
    };

    addFood(oneFood);

    resetInputs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Food Entry</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" value={name} onChange={handleName} />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input name="image" type="text" value={image} onChange={handleImage} />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          name="calories"
          type="number"
          value={calories}
          onChange={handleCalories}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input
          name="servings"
          type="number"
          value={servings}
          onChange={handleServings}
        />
      </div>

      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;
