import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  })
);

export default function IntroductionPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Typography variant="h5" noWrap gutterBottom>
        Welcome to the CCXT Trade Manager.
      </Typography>

      <Typography variant="body1" gutterBottom>
        The CCXT Trade Manager allows traders to execute safer trades on popular
        cryptocurrency exchanges by placing stop-loss and take-profit orders as
        soon as possible on an exchange, preventing orders from executing
        without proper safety nets in place.
      </Typography>
    </div>
  );
}
