
import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // Import uuid for unique IDs

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // Default category

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // Generate unique ID
      name,
      category,
    };
    onItemFormSubmit(newItem); // Pass new item to parent
    setName(""); // Reset form fields
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name} // Controlled input
          onChange={(e) => setName(e.target.value)} // Update name
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={category} // Controlled input
          onChange={(e) => setCategory(e.target.value)} // Update category
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
