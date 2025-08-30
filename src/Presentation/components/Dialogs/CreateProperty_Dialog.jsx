import React, { useState } from "react";
import "./CreateProperty_Dialog.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { createProperty } from "../../../API/requests";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const PROPERTY_TYPES = [
  "House", "Apartment", "Villa", "Studio", "Penthouse", 
  "Farm", "Land", "Commercial", "other"
];

const HEATING_TYPES = [
  "Central", "Gas", "Electric", "Solar", "None"
];

const FLOORING_TYPES = [
  "Ceramic", "Wood", "Marble", "Tile", "Carpet", 
  "Vinyl", "Laminate", "Concrete", "other"
];

function LocationSelector({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition({ lat: e.latlng.lat, lon: e.latlng.lng });
    },
  });
  return position ? <Marker position={[position.lat, position.lon]} /> : null;
}

export default function CreatePropertyDialog({ isOpen, onClose, onSubmit,agentId }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isForRent: true,
    price: 0,
    lat: null,
    lon: null,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    floors: 0,
    hasGarage: false,
    hasGarden: false,
    heatingType: HEATING_TYPES[0],
    flooringType: FLOORING_TYPES[0],
    propertyType: PROPERTY_TYPES[0],
    isFloor: false,
    agencyId: `${agentId}`
  });

  // State for selected images
  const [images, setImages] = useState([]);

  async function postPropertyToAgent(){
    try{
        let res=await createProperty(formData);
        console.log('property was successfully created ');
    }catch(e){
        console.log(e);
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  setImages(prev => [...prev, ...files]); 
};

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ ...formData, images });
    console.log({ ...formData });
    postPropertyToAgent();

  };

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Add Property</h2>
        <form onSubmit={handleSubmit} className="form-grid">

          <input
            className="dialog-input"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            className="dialog-textarea"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          {/* For Rent / For Sale radio */}
          <div className="dialog-label">
            <span>Property Status:</span>
            <label>
              <input
                type="radio"
                name="isForRent"
                value="true"
                checked={formData.isForRent === true}
                onChange={() => setFormData(prev => ({ ...prev, isForRent: true }))}
              />
              For Rent
            </label>
            <label>
              <input
                type="radio"
                name="isForRent"
                value="false"
                checked={formData.isForRent === false}
                onChange={() => setFormData(prev => ({ ...prev, isForRent: false }))}
              />
              For Sale
            </label>
          </div>

          <input
            className="dialog-input"
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          {/* Leaflet Map */}
          <div className="dialog-label">
            <span>Select Location:</span>
            <MapContainer
              center={formData.lat && formData.lon ? [formData.lat, formData.lon] : [30.0444, 31.2357]}
              zoom={13}
              style={{ height: "300px", width: "100%", borderRadius: "6px", marginTop: "8px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <LocationSelector
                position={formData.lat && formData.lon ? { lat: formData.lat, lon: formData.lon } : null}
                setPosition={(pos) => setFormData(prev => ({ ...prev, lat: pos.lat, lon: pos.lon }))}
              />
            </MapContainer>
            <div style={{ marginTop: "5px", fontSize: "14px", color: "#555" }}>
              Selected: {formData.lat ? formData.lat.toFixed(5) : "-"}, {formData.lon ? formData.lon.toFixed(5) : "-"}
            </div>
          </div>

          {/* Numeric inputs */}
          <input className="dialog-input" type="number" name="rooms" placeholder="Rooms" value={formData.rooms} onChange={handleChange} />
          <input className="dialog-input" type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} />
          <input className="dialog-input" type="number" name="area" placeholder="Area (m²)" value={formData.area} onChange={handleChange} />
          <input className="dialog-input" type="number" name="floorNumber" placeholder="Floor Number" value={formData.floorNumber} onChange={handleChange} />

          {/* Checkboxes */}
          <label className="dialog-label">
            <input type="checkbox" name="hasGarage" checked={formData.hasGarage} onChange={handleChange} />
            Has Garage
          </label>
          <label className="dialog-label">
            <input type="checkbox" name="hasGarden" checked={formData.hasGarden} onChange={handleChange} />
            Has Garden
          </label>
          <label className="dialog-label">
            <input type="checkbox" name="isFloor" checked={formData.isFloor} onChange={handleChange} />
            Is Floor
          </label>

          {/* Selects */}
          <select className="dialog-select" name="heatingType" value={formData.heatingType} onChange={handleChange}>
            {HEATING_TYPES.map(val => <option key={val} value={val}>{val}</option>)}
          </select>
          <select className="dialog-select" name="flooringType" value={formData.flooringType} onChange={handleChange}>
            {FLOORING_TYPES.map(val => <option key={val} value={val}>{val}</option>)}
          </select>
          <select className="dialog-select" name="propertyType" value={formData.propertyType} onChange={handleChange}>
            {PROPERTY_TYPES.map(val => <option key={val} value={val}>{val}</option>)}
          </select>

          {/* Multiple Image Upload */}
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} className="dialog-label">
  <span>Upload Images:</span>
  <input
    type="file"
    multiple
    accept="image/*"
    onChange={handleImageChange}
    style={{
      display: 'block',
      marginTop: '5px',
      padding: '8px',
      border: '1px solid var(--app-blue)',
      borderRadius: '6px',
      cursor: 'pointer',
      backgroundColor:'var(--app-blue)'
    }}
  />
</div>

{/* Image previews */}
{images.length > 0 && (
  <div className="image-previews" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
    {images.map((file, idx) => (
      <div key={idx} style={{ position: 'relative' }}>
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }}
        />
        <button
          type="button"
          onClick={() => setImages(prev => prev.filter((_, i) => i !== idx))}
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: 'var(--app-blue)',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            width: '20px',
            height: '20px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
      </div>
    ))}
  </div>
)}


          {/* Actions */}
          <div className="dialog-actions">
            <button type="button" className="dialog-button cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="dialog-button submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
