import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "graphql-hooks";
import { get } from "lodash";

//MUI
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";

//styles
import useStyles from "./AiringBadge.style";

//Custom components
import BadgeContent from "./BadgeContent/BadgeContent";

//GraphQL query
import QUERY from "../../../queries/getNextEpisodeAiringTime";

function AiringBadge({ anilistId, children }) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(QUERY, {
    variables: { id: anilistId }
  });

  if (error) {
    return children;
  }

  if (loading) {
    return (
      <Badge
        badgeContent={
          <CircularProgress color="primary" size={20} variant="indeterminate" />
        }
        color="secondary"
        className={classes.gridFix}
      >
        {children}
      </Badge>
    );
  }
  if (data) {
    const timeUntilAiring = get(
      data,
      "Media.nextAiringEpisode.timeUntilAiring"
    );
    return (
      <Badge
        invisible={!timeUntilAiring}
        badgeContent={<BadgeContent timeUntilAiring={timeUntilAiring} />}
        color="secondary"
        className={classes.gridFix}
      >
        {children}
      </Badge>
    );
  }
}

AiringBadge.propTypes = {
  children: PropTypes.element.isRequired,
  anilistId: PropTypes.number.isRequired
};

export default AiringBadge;
