import { useState, useEffect } from "react";
import './search_text_field.css';
import { Search } from "@mui/icons-material";
function SearchTextField({ hint, setValue,}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(inputValue); 
    }, 500);

    return () => {
      clearTimeout(handler); 
    };
  }, [inputValue, setValue]);

  return (
      <div className="search-input-wrapper">
      <span className="search-prefix" style={{paddingTop:'5px'}}><Search/></span>
    <input
      type="text"
      className="search-text-field"
      placeholder={hint}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    </div>
  );
}

export default SearchTextField;
