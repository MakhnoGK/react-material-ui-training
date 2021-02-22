import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Paper,
} from '@material-ui/core';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<typeof theme.palette.type>(
    'light'
  );

  const theme = createMuiTheme({
    palette: {
      type: currentTheme,
    },
  });

  useEffect(() => {
    theme.palette.type = currentTheme;
  }, [currentTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <select
          value={currentTheme}
          onChange={(e) =>
            setCurrentTheme(e.target.value as typeof theme.palette.type)
          }
        >
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>

        <Typography>This is themed Paper component</Typography>
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

App.propTypes = {};

export default App;
