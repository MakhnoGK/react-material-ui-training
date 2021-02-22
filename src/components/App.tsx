import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Container,
  GridList,
  GridListTile,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';

const API_KEY = '20295782-d190a9f4db1bc0031bd7c6307';

const useStyles = makeStyles({
  chipInput: {
    margin: '20px auto',
  },
});

const App = () => {
  const classes = useStyles();
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<
    Array<{ id: number; webformatURL: string; tags: string }>
  >([]);
  const params = useParams<{ tags: string }>();
  const history = useHistory();
  const theme = useTheme();

  const screenSm = useMediaQuery(theme.breakpoints.up('sm'));
  const screenMd = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (params && params.tags) {
      setTags(params.tags.split('+'));
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (tags) {
      history.push(tags.join('+'));

      fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${tags.join('+')}`)
        .then((response) => response.json())
        .then((data) => setImages(data.hits));
    }
  }, [tags, history]);

  return (
    <Container>
      <Typography variant="h3">Walty - search graphics all you need</Typography>

      <ChipInput
        value={tags}
        onAdd={(chip) => setTags((prev) => [...prev, chip])}
        onDelete={(chip) =>
          setTags((prev) => prev.filter((search) => search !== chip))
        }
        newChipKeyCodes={[13, 32]}
        placeholder="photo, flowers, red"
        className={classes.chipInput}
        fullWidth
      />

      <GridList cols={screenMd ? 4 : screenSm ? 2 : 1}>
        {images.map((imageEntry) => (
          <GridListTile key={imageEntry.id}>
            <img src={imageEntry.webformatURL} alt={imageEntry.tags} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

App.propTypes = {};

export default App;
