import React, { useState } from "react";

function UpdateServiceForm({ service, updateService }) {
  // Local state initialized with the current service values
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  // Function to handle form submission for updating a service
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!name || !description || !price) {
      alert("Please fill in all fields");
      return;
    }

    // Create the updated service object
    const updatedService = {
      id: service.id, // Keep the same id
      name,
      description,
      price: parseFloat(price), // Ensure price is a number
    };

    // Pass the updated service to the parent component
    updateService(updatedService);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Service</h2>

      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Service Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Update Service</button>
    </form>
  );
}

export default UpdateServiceForm;
