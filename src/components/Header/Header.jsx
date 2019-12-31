import React, { useState } from "react";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

// styles
import useStyles from "./Header.styles";

// custom components
import SearchResults from "./SearchResults/SearchResultsContainer";

export default function Header() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = ({ target: { value } }) => setSearchTerm(value);

  return (
    <header className={classes.searchResultsFix} data-testid="Header">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Weeb's Library Keeper
          </Typography>
          <div className={classes.search} data-testid="SearchBar">
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
            <SearchResults searchTerm={searchTerm} />
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
