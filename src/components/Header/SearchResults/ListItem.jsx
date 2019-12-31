import React, { memo } from "react";
import PropTypes from "prop-types";
import { useManualQuery } from "graphql-hooks";
import { useStoreActions } from "easy-peasy";
import { get } from "lodash";

// MUI
import MuiListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

// Icons
import AddIcon from "@material-ui/icons/Add";

// styles
import useStyles from "./SearchResults.styles";

//helpers
import sendAddRequest from "../../../helpers/server_requests/addAnime";

// GraphQL queries
import QUERY from "../../../queries/getEpisodesData";

const ListItem = memo(function ListItem({ data, handleClose }) {
  const classes = useStyles();
  const replaceAnimeData = useStoreActions(state => state.animeList.replace);
  const [fetchEpisodesData] = useManualQuery(QUERY, {
    variables: { id: data.id }
  });

  const season = data.season || "??";
  const startYear = data.startDate.year || "??";
  const title = data.title.romaji || "??";

  const addAnimeToDatabase = async () => {
    try {
      const { data: resData, error } = await fetchEpisodesData({
        variables: { id: data.id }
      });
      if (error) throw new Error(error);
      const episodes = get(resData, "Media.episodes", 0);
      const latestEpisode = get(
        resData,
        "Media.nextAiringEpisode.episode",
        episodes
      );

      const composedAnimeData = {
        title,
        anilistId: data.id,
        thumbnailUrl: data.coverImage.extraLarge,
        watchedEpisodes: 0,
        latestEpisode,
        episodes
      };

      const serverRes = await sendAddRequest(composedAnimeData);
      replaceAnimeData(serverRes);
      handleClose();
    } catch (error) {
      console.error(error.messege);
    }
  };

  return (
    <MuiListItem data-testid="ListItem">
      <ListItemAvatar>
        <Avatar
          alt={title}
          src={data.coverImage.medium}
          variant="square"
          className={classes.avatarSize}
        />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={`${season} - ${startYear}`}
        className={classes.listItemText}
      />
      <IconButton onClick={addAnimeToDatabase}>
        <AddIcon />
      </IconButton>
    </MuiListItem>
  );
});

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default ListItem;
