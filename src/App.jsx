import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import AddServiceForm from "./components/AddServiceForm";
import UpdateServiceForm from "./components/UpdateServiceForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Initial state: List of healthcare services
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "Routine health checkup",
      price: 50,
    },
    {
      id: 2,
      name: "Blood Test",
      description: "Complete blood analysis",
      price: 30,
    },
  ]);

  // State to track whether a service is being edited
  const [isEditing, setIsEditing] = useState(false);

  // Index of the service currently being edited
  const [currentServiceIndex, setCurrentServiceIndex] = useState(null);

  // Function to add a new service to the list
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  // Function to update an existing service in the list
  const updateService = (updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === currentServiceIndex ? updatedService : service
    );
    setServices(updatedServices);
    setIsEditing(false); // Close the update form after editing
  };

  // Function to trigger editing mode for a specific service
  const editService = (index) => {
    setCurrentServiceIndex(index);
    setIsEditing(true);
  };

  // Function to delete a service from the list
  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index)); // Remove the service from the array
  };

  return (
    <div className="App">
      <h1>Amazing Healthcare Services</h1>

      {/* Conditionally render the Add or Update form based on editing state */}
      {isEditing ? (
        <UpdateServiceForm
          service={services[currentServiceIndex]}
          updateService={updateService}
        />
      ) : (
        <AddServiceForm addService={addService} />
      )}

      {/* Render the list of services */}
      <ServiceList
        services={services}
        onEdit={editService}
        onDelete={deleteService}
      />

      <Footer />
    </div>
  );
}

export default App;
