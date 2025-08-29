import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import './AgentPropertiesTable.css';
import { Link } from 'react-router-dom';

function AgentPropertiesTable({ properties, totalCount = 0 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 20;
    // Calculate pagination
    const totalPages = Math.ceil(properties.length / propertiesPerPage);
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const currentProperties = properties.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    // Reset to first page when properties change
    useEffect(() => {
        setCurrentPage(1);
    }, [properties]);

    return (

        <div className="agent-properties-table-container" id='properties-list'>
            <div className="properties-intro-text">
                This map can show the most recent 100 listings and 100 sales. Review all listings and sales below.
            </div>

            <h2 className="properties-list-title">For Sale ({properties.length})</h2>

            <table className="properties-list-table">
                <thead>
                    <tr>
                        <th className="properties-list-th properties-list-th-address">Address</th>
                        <th className="properties-list-th">Bed/Bath</th>
                        <th className="properties-list-th">Listing price</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProperties.map((property) => (
                        // <Link to={`/show_house/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                        <Link to={`/show_house/${property.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}>
                            <tr key={property.id} className="properties-list-row">
                                <td className="properties-list-td properties-list-td-address">
                                    <img
                                        className="properties-list-img"
                                        src={property.firstImage}
                                        alt="Property"
                                    />
                                    <div className="properties-list-address-text">
                                        <div className="properties-list-address-main">{property.address}</div>
                                        <div className="properties-list-address-sub">{property.city}</div>
                                    </div>
                                </td>
                                <td className="properties-list-td">
                                    <Link to={`/show_house/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {property.beds} Bed, {property.baths} Bath
                                    </Link>
                                </td>
                                <td className="properties-list-td">
                                    <Link to={`/show_house/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {property.price}
                                    </Link>
                                </td>
                            </tr>
                        </Link>
                    )

                    )}
                </tbody>
            </table>

            {properties.length > 0 && (
                <div className="properties-pagination">
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
                    />
                    <div className="pagination-info">
                        Showing {startIndex + 1}-{Math.min(endIndex, properties.length)} of {properties.length} properties
                    </div>
                </div>
            )}
        </div>
    );
}

export default AgentPropertiesTable;