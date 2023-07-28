import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    top: 0,
    backgroundColor: '#292929cd',
    backdropFilter: 'blur(5px)',
    zIndex: 100,
    height: 60,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Trending"
        icon={<WhatshotIcon />}
        onClick={() => navigate('/')}
        style={{ color: '#fff' }}
      />

      <BottomNavigationAction
        label="Movies"
        icon={<MovieIcon />}
        onClick={() => navigate('/movies')}
        style={{ color: '#fff' }}
      />
      <BottomNavigationAction
        label="TV Series"
        icon={<TvIcon />}
        onClick={() => navigate('/series')}
        style={{ color: '#fff' }}
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        onClick={() => navigate('/search')}
        style={{ color: '#fff' }}
      />
    </BottomNavigation>
  );
}
