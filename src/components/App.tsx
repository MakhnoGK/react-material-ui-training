import React from 'react';
import { Button, Typography } from '@material-ui/core';

import useStyles from '../styled/app';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.centeredText}>
        React App with Material UI
      </Typography>

      <Button className={classes.gradientButton}>Button</Button>
    </>
  );
};

export default App;
