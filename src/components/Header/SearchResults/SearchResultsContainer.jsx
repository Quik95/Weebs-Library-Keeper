import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useManualQuery } from "graphql-hooks";
import { get } from "lodash";
import clsx from "clsx";

// MUI
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";

// styles
import useStyles from "./SearchResults.styles";

// custom components
import ListItem from "./ListItem";

// GraphQL queries
import QUERY from "../../../queries/searchSeries";

export default function SearchResultsContainer({ searchTerm }) {
  const [shouldBeOpen, setShouldBeOpen] = useState(false);
  const [fetchResults, { loading, error, data }] = useManualQuery(QUERY, {
    variables: { query: searchTerm }
  });
  const classes = useStyles();

  const closeResults = () => setShouldBeOpen(false);

  const hideOnOutOfBoundsClick = e => {
    const path = e.path;
    const wasSearchResultsContainerInPath = path.find(entry => {
      const testid = get(entry, "dataset.testid");
      if (testid === "SearchContainer") return true;
      if (testid === "SearchBar") return true;
      else return false;
    });
    setShouldBeOpen(wasSearchResultsContainerInPath);
  };

  useEffect(() => {
    const root = document.querySelector("html");
    root.addEventListener("click", hideOnOutOfBoundsClick);

    if (!searchTerm) setShouldBeOpen(false);
    else {
      setShouldBeOpen(true);
      fetchResults();
    }
    return () => {
      root.removeEventListener("click", hideOnOutOfBoundsClick);
    };
  }, [fetchResults, searchTerm]);

  if (!shouldBeOpen) return null;
  if (error) console.error(error.messege);
  if (loading)
    return (
      <List
        className={clsx(classes.listContainer, classes.spinnerFix)}
        data-testid="SearchContainer">
        <CircularProgress size={40} variant="indeterminate" color="primary" />
      </List>
    );
  if (data) {
    const resList = get(data, "Page.media", []);
    return (
      <List className={classes.listContainer} data-testid="SearchContainer">
        {resList.map(anime => (
          <ListItem key={anime.id} data={anime} handleClose={closeResults} />
        ))}
      </List>
    );
  }
  return null; //Safeguard
}

SearchResultsContainer.propTypes = {
  searchTerm: PropTypes.string
};
