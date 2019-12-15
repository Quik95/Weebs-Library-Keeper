import React from "react";

// MUI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./Main.styles.js";

// Custom components
import AnimeCard from "../AnimeCard/AnimeCard";

//hooks
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Main() {
  const classes = useStyles();
  const matchesXl = useBreakpoint("xl");

  return (
    <main className={classes.main} data-testid="main">
      <Container maxWidth={matchesXl ? "xl" : "lg"}>
        <Grid container spacing={6}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <AnimeCard key={i} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
