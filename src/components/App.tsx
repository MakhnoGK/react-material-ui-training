import React from 'react';
import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  cardItem: {
    padding: 10,
  },
  avatar: {
    marginRight: 10,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} className={classes.root}>
        {[1, 2, 3, 4].map((n) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.cardItem}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar className={classes.avatar}>H</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repudiandae doloremque, voluptates voluptate perferendis
                    cupiditate quod sint aspernatur aliquid eius consequatur.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

App.propTypes = {};

export default App;
