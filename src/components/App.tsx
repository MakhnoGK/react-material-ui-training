import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const App = () => {
  return (
    <>
      <Box color="secondary">
        {(props: TypographyProps) => (
          <Typography {...props}>Overwritten styles from Box</Typography>
        )}
      </Box>
    </>
  );
};

App.propTypes = {};

export default App;
