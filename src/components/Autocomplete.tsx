import React from 'react';
import { useAutocompleteStore } from '../store/useAutocompleteStore';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Autocomplete:React.FC = () => {
    const { searchTerm, suggestions, setSearchTerm, fetchSuggestions } = useAutocompleteStore();

  // When the search term changes, fetch suggestions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    fetchSuggestions(term); // Fetch suggestions for the current term
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion); // Set the selected suggestion as the search term
  };

  
  const navigate  = useNavigate();

  const handleClick  = () => {
      navigate("/");
  }

  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
        <div className="w-full max-w-md mx-auto p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
      {suggestions.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded-md max-h-48 overflow-y-auto bg-white shadow-lg">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-blue-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div> 
    </>
  );
}

export default Autocomplete;
