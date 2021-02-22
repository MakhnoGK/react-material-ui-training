import { Button, styled } from '@material-ui/core';

const gradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: '#ffffff',
  display: 'block',
  margin: '2rem auto',
  fontSize: '2rem',
  padding: '1rem 2rem',
});

export default gradientButton;
