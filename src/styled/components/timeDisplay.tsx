import { styled, Typography } from '@material-ui/core';

const getColorDependOnTime = (time: number) => {
  if (time > 0 && time < 12) {
    return 'black';
  }

  return 'orange';
};

const timeDisplay = styled(({ time: number, ...other }) => (
  <Typography {...other} />
))({
  color: (props: { time: number }) => getColorDependOnTime(props.time),
});

export default timeDisplay;
