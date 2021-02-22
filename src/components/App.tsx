import React from 'react';
import { Typography, Container, makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles({
  red: { backgroundColor: colors.red[100] },
  blue: { backgroundColor: colors.blue[100] },
  green: { backgroundColor: colors.green[100] },
  orange: { backgroundColor: colors.orange[100] },
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.red}>
        <Typography>Fluid container</Typography>
      </Container>
      <Container className={classes.blue} fixed>
        <Typography>Fixed container</Typography>
      </Container>
      <Container className={classes.green} maxWidth="xs">
        <Typography>Container with maxWidth="xs"</Typography>
      </Container>
      <Container className={classes.orange} disableGutters>
        <Typography>No gutters</Typography>
      </Container>
    </>
  );
};

App.propTypes = {};

export default App;
