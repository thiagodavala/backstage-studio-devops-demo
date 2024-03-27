import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyCustomLogoFull from './logo/logo.png';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoFull = () => {
  return <img src={MyCustomLogoFull} />;
};

export default LogoFull;
