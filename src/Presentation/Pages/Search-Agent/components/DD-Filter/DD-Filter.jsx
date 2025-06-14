import React, { useState } from "react";
import "./DD-Filter.css";

function DD_Filter({ label, options, onFilterChange }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        onFilterChange(value);
    };

    return (
        <div className="filter-dropdown">
            <select
                value={selectedValue}
                onChange={handleChange}
                className="filter-select"
            >
                <option value="">All</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DD_Filter;