import React from 'react';
import "../styles/PropertyCard.css";

type PropertyCardProps = {
  title: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  location: string;
};

export const PropertyCard = ({
  title,
  price,
  bedrooms,
  bathrooms,
  area,
  location,
}: PropertyCardProps) => {
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <div className="details">
        <span>{bedrooms} Bed | {bathrooms} Bath | {area} sq ft</span>
      </div>
      <p className="location">{location}</p>
      <button className="contact-button">Contact Agent</button>
    </div>
  );
};