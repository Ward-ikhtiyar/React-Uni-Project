import React, { useState } from "react";
import "./show_house_alt.css";

const PropertyPage = () => {
  const [property, setProperty] = useState({
    title: "Modern Family Home",
    price: "$850,000",
    address: "123 Maple Street, Anytown, USA",
    description:
      "This stunning family home offers a perfect blend of modern design and comfortable living. Located in a desirable neighborhood, it features spacious interiors, high-end finishes, and a beautifully landscaped garden. The property is ideal for families looking for a move-in ready home with ample space for both relaxation and entertainment.",
    attributes: {
      type: "House",
      status: "For Sale",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sq ft",
      floors: 2,
      flooring: "Hardwood",
      heating: "Central",
      garage: "Available",
      garden: "Landscaped",
    },
    images: {
      main:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkm4NtkDMuVqDdMOOFZf5-2SQM-chOiDSyfJTU04glSg6UisZblQ6yYpNY9aoYczbOMzFPZSzHykQUYei1YAD_mswE5SU-nOcfMlxh2BtjIeNlUDFAKWI00R5f6xbFndHcSXwsZFbkeiFn39nLn0WBeXmMeltmccBLbjgjktNj9AKWXxYGavTpidXzbBJ079TCeCbadTFg3F4UnDYEmLg_qLKirXcV_ajAnwBIYxANtLjjWbM6rntTZMkITCDgiWPdN-twKqXH6A",
      secondary:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuByQL137gRgAID7OX_I71dmEZhBpgjHVZMk84Kdi6J92xBaXfyVC3EG1BnQyBSt2qP8BGGJGETsB0vAHbkApKy73VGT9f_NRH8SHfOp0nGIegO4V7Fpx3hYVi8rndA21LqrrhP83TEszsG48LFaruneFy1jgjPPj6DPAxtwmiHYuFnNqO6LY_VSya5IplacHpREZj45-1mNrLgjDYgIGFRvg-bK81SxFSW_MIVx_fh_Dq4kzpFMOLnN2mJ8HiCuppr7_mqlQGqW0A",
    },
    agency: {
      name: "Premier Realty",
      contact: "Contact Agent",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCNsvMga-5JRNdIN1lJKepKGgOksTR-awkOy7Eu9VF6wSY2hK_AlqX6JcS1MH8Mr-ibX7XNmJFMoUpwKxZhFev_YMTfE5JS5RXDMX_Ph-VC5AFeSpZGQjYVCPTVQgUq28R2l1JfSbCm_8jzTzqYiMTsxSTjSQg-zwDL2IYEtX1bqk0dh-PBf1Uwk78iVVP8yePDQY00sgjl8HtfS2NwVR3Y8lSuaF-6mIQd2ugb7OrLf0XGxdlnDmtPWiMdcsiM4HpwWR0W2-Zjgg",
    },
  });

  return (
    <div className="property-page">
      <header className="header">
        <div className="logo-title">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill="currentColor"
            />
          </svg>
          <h2>FindHome</h2>
        </div>
        <nav className="nav-links">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <a href="#">Mortgages</a>
          <a href="#">Find an agent</a>
          <a href="#">Sell</a>
          <a href="#">Manage property</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="main-image" style={{ backgroundImage: `url(${property.images.main})` }} />
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

        <div
          className="secondary-image"
          style={{ backgroundImage: `url(${property.images.secondary})` }}
        ></div>

        <h2>Listing Agency</h2>
        <div className="agency-info">
          <div
            className="agency-image"
            style={{ backgroundImage: `url(${property.agency.image})` }}
          ></div>
          <div className="agency-text">
            <p>{property.agency.contact}</p>
            <p className="subtext">{property.agency.name}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyPage;
