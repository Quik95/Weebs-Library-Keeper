import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "graphql-hooks";
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
  const { loading, error, data } = useQuery(QUERY, {
    variables: { query: searchTerm }
  });
  const classes = useStyles();

  if (error) return null;
  if (loading)
    return (
      <List
        className={clsx(classes.listContainer, classes.spinnerFix)}
        data-testid="SearchContainer"
      >
        <CircularProgress size={40} variant="indeterminate" color="primary" />
      </List>
    );
  if (data) {
    const resList = get(data, "Page.media", []);
    return (
      <List className={classes.listContainer} data-testid="SearchContainer">
        {resList.map(anime => (
          <ListItem key={anime.id} data={anime} />
        ))}
      </List>
    );
  }
}

SearchResultsContainer.propTypes = {
  searchTerm: PropTypes.string
};
