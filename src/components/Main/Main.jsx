import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

// styles
import useStyles from './Main.styles.js';

export default function Main() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <Grid item key={i} xs={2}>
              <Typography>{`Hello i'm item number ${i}`}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
