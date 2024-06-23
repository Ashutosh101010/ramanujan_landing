import { TextField } from "@mui/material";
import React, { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const AskAnythink = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Handle the search logic here
    console.log('Search query:', event.target.value);
  };

  return (
    <div className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 className="mobile-any-heading">Anything else, you want to know</h2>
          <p>
            Ask more questions for greater knowledge and clarity. We are here to serve and support you.
          </p>
          <div>
            <TextField
              className="mobile-search"
              sx={{ width: "50%", margin: "30px" }}
              label="Ask anything to fast education"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
