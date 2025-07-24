import React from "react";

const PropertyInfo = ({ property }) => {
  return (
    <div className="property-info">
      <h1>{property.title}</h1>
      <p className="price-address">
        {property.price} · {property.address}
      </p>
      <p className="description">{property.description}</p>

      <h2>Key Attributes</h2>
      <div className="attributes">
        {Object.entries(property.attributes).map(([key, value]) => (
          <div className="attribute" key={key}>
            <p className="label">{key.replace(/([a-z])([A-Z])/g, "$1 $2")}</p>
            <p className="value">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyInfo; 