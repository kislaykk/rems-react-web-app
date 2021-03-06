import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function UserAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleClick = (text) => {
    if (text === 'Add Property') history.push('/user/property/add');
    else if (text === 'Property List') history.push('/user/property');
    else if (text === 'Hunt Property') history.push('/user/property/all');
    else if (text === 'Requests') history.push('/user/requests');
  };
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Add Property', 'Property List', 'Hunt Property', 'Requests'].map((text) => (
          <ListItem button key={text} onClick={() => handleClick(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <React.Fragment key="left">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>

              <MenuIcon />

            </IconButton>

            <Drawer
              anchor="left"
              open={state.left}
              onClose={toggleDrawer('left', false)}
            >

              {list('left')}

            </Drawer>
          </React.Fragment>
          <IconButton onClick={() => history.push('/user')}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              window.location.reload();
            }}
          >
            <PowerSettingsNewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
