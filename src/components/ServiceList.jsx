import React from "react";

function ServiceList({ services, onEdit, onDelete }) {
  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {/* Loop through the services array and render each service */}
        {services.map((service, index) => (
          <li key={service.id}>
            {/* Display service details */}
            <strong>{service.name}</strong> - {service.description} (₹
            {service.price}){/* Buttons to trigger editing or deletion */}
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
