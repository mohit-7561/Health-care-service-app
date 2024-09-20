import React, { useState } from "react";

function AddServiceForm({ addService }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!name || !description || !price) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new service object
    const newService = {
      id: Math.random(), // Generate a random id (for simplicity)
      name,
      description,
      price: parseFloat(price), // Ensure price is a number
    };

    // Pass the new service to the parent component
    addService(newService);

    // Clear form fields after submission
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Service</h2>

      {/* Input for service name */}
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Input for service description */}
      <input
        type="text"
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Input for service price */}
      <input
        type="number"
        placeholder="Service Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* Submit button to add the service */}
      <button type="submit">Add Service</button>
    </form>
  );
}

export default AddServiceForm;
