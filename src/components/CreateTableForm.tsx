import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

import CreateTableContainer from '../styled/components/CreateTableForm/createTableContainer';
import CreateTableMainContainer from '../styled/components/CreateTableForm/createTableMainContainer';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
  },
  control: {
    width: '100%',
  },
});

const CreateTableForm = () => {
  const classes = useStyles();

  return (
    <CreateTableMainContainer>
      <CreateTableContainer>
        <Paper className={classes.root}>
          <Typography variant="h3">Create new table</Typography>

          <form>
            <FormControl className={classes.control} margin="normal">
              <TextField label="Table name" />
            </FormControl>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.control} margin="normal">
                  <InputLabel>Owner</InputLabel>
                  <Select label="Collation">
                    <MenuItem value="">-</MenuItem>
                    <MenuItem value="admin">admin</MenuItem>
                    <MenuItem value="root">root</MenuItem>
                    <MenuItem value="guest">guest</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl className={classes.control} margin="normal">
                  <InputLabel>Collation</InputLabel>
                  <Select label="Collation">
                    <MenuItem value="">-</MenuItem>
                    <MenuItem value="utf_8">UTF-8</MenuItem>
                    <MenuItem value="win_1251">Windows-1251</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <FormControl className={classes.control} margin="normal">
              <TextField label="Table description" rows={4} multiline />
            </FormControl>
            <FormControl margin="normal">
              <Button variant="contained" color="primary" type="submit">
                Next
              </Button>
            </FormControl>
          </form>
        </Paper>
      </CreateTableContainer>
    </CreateTableMainContainer>
  );
};

CreateTableForm.propTypes = {};

export default CreateTableForm;
