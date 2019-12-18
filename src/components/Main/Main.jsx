import React, { useCallback, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./Main.styles.js";

// Custom components
import AnimeCard from "../AnimeCard/AnimeCard";

//hooks
import useBreakpoint from "../../hooks/useBreakpoint";

//helpers
import fetchSavedAnimed, {
  cancelFetchSavedAnime
} from "../../helpers/fetchSavedAnime";

export default function Main() {
  const classes = useStyles();
  const matchesXl = useBreakpoint("xl");
  const animeList = useStoreState(state => state.animeList.list);
  const replaceAnimelistAction = useStoreActions(
    state => state.animeList.replace
  );

  const fetchSavedAnimeAndSetState = useCallback(async () => {
    const res = await fetchSavedAnimed();
    replaceAnimelistAction(res);
  }, [replaceAnimelistAction]);

  useEffect(() => {
    fetchSavedAnimeAndSetState();
    return () => cancelFetchSavedAnime();
  }, [fetchSavedAnimeAndSetState]);

  return (
    <main className={classes.main} data-testid="main">
      <Container maxWidth={matchesXl ? "xl" : "lg"}>
        <Grid container spacing={6}>
          {animeList.map(({ _id }) => (
            <AnimeCard key={_id} _id={_id} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
