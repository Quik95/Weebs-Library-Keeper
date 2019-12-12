import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

// styles
import useStyles from './Main.styles.js';

// Custom components
import AnimeCard from '../AnimeCard/AnimeCard';

export default function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main} data-testid="main">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <AnimeCard key={i} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
