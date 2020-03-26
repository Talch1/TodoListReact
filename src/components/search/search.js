import React from 'react';

import './search.css';

const SearchPanel = () => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search" />
  );
};

export default SearchPanel;
