import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ data }) => {
  const { icon, title, description } = data;
  return (
    <div className="w-[280px] h-[400px] flex items-center flex-col justify-around service-card">
      <img src={icon} alt={title} className="w-[30%]" />
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
