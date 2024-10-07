// ServiceComponent.jsx
import React from 'react';
import './ServiceComponent.css'; // Make sure to create a corresponding CSS file for styling

const ServiceComponent = ({ imgSrc, title }) => {
  return (
    <div className="service">
      <img src={imgSrc} alt={title} className="service-icon" />
      <div className="service-title">{title}</div>
      <div className="service-arrow">→</div>
    </div>
  );
};

export default ServiceComponent;
