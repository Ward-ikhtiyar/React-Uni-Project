import React, { useState } from 'react';
import './AgentPropertiesTable.css';

function AgentPropertiesTable({ properties, totalCount = 63 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 7; // Based on the pagination in the image

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        
        // Previous button
        pages.push(
            <button 
                key="prev" 
                className="pagination-btn pagination-arrow"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
            >
                ‹
            </button>
        );

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        // Next button
        pages.push(
            <button 
                key="next" 
                className="pagination-btn pagination-arrow"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
            >
                ›
            </button>
        );

        return pages;
    };

    return (
        <div className="agent-properties-table-container" id='properties-list'>
            <div className="properties-intro-text">
                This map can show the most recent 100 listings and 100 sales. Review all listings and sales below.
            </div>
            
            <h2 className="properties-list-title">For Sale ({totalCount})</h2>
            
            <table className="properties-list-table">
                <thead>
                    <tr>
                        <th className="properties-list-th properties-list-th-address">Address</th>
                        <th className="properties-list-th">Bed/Bath</th>
                        <th className="properties-list-th">Listing price</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property) => (
                        <tr key={property.id} className="properties-list-row">
                            <td className="properties-list-td properties-list-td-address">
                                <img 
                                    className="properties-list-img" 
                                    src={property.image} 
                                    alt="Property" 
                                />
                                <div className="properties-list-address-text">
                                    <div className="properties-list-address-main">{property.address}</div>
                                    <div className="properties-list-address-sub">{property.city}</div>
                                </div>
                            </td>
                            <td className="properties-list-td">
                                {property.beds} Bed, {property.baths} Bath
                            </td>
                            <td className="properties-list-td">{property.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <div className="pagination-container">
                {renderPagination()}
            </div> */}
        </div>
    );
}

export default AgentPropertiesTable;