import React from 'react';
import { Typography } from '@material-ui/core';

import { GradientButton } from '../styled';
import { Clock } from '.';

const App = () => {
  return (
    <>
      <Typography variant="h3">
        React App with Material UI
      </Typography>

      <GradientButton>With Styled Components API</GradientButton>

      <Clock />
    </>
  );
};

App.propTypes = {};

export default App;
