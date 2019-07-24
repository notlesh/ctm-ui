import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UsersIcon from '@material-ui/icons/PermIdentity';

import UserManagement from './UserManagement';

function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function IntroductionPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0); // TODO: use redux

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="off">
          <Tab icon={<UsersIcon />} aria-label="Phone" />
          <Tab icon={<UsersIcon />} aria-label="Other" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><UserManagement /></TabContainer>}
      {value === 1 && <TabContainer>Other (Placeholder)</TabContainer>}
    </div>
  );
}
