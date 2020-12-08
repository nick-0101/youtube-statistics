import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, InputBase, ThemeProvider, CssBaseline, LinearProgress  } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

import styles from './Header.module.css'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
        main: red[700],
    }
  },
})
const useStyles = makeStyles((theme) => ({
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    // borderBottom: '1px solid #fff',
    marginLeft: 0,
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
     "&::placeholder": {
      color: "#fff",
      opacity: 1,
      fontWeight: 'normal',
      letterSpacing: 0.7,
      fontSize: 15
    }
  },
  
  colorPrimary: {
    backgroundColor: '#0000',
    height: 2,

  },
  barColorPrimary: {
    backgroundColor: '#fff',
    height: 2,
  }
}));


const Header = ({ loading, search, error }) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = React.useState(null);


    const keyPress = (e) => {
      // if(error) {
      //   return null;
      // } else if(e.key === 'Enter'){
      //   search(searchValue)
      // }

      if(e.key === 'Enter'){
        search(searchValue)
      }
    }
    
    return (
    <ThemeProvider theme={darkTheme}>
      {loading ? (
            <LinearProgress classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/>
          ) : (
            null
          )}
        <AppBar position="static" >
            <Toolbar>
                <Typography onClick={() => window.location.reload(true)} className={styles.title} variant="h6">
                  YT Stats  <TrendingUpRoundedIcon style={{ fontSize: 30, marginLeft: 5}}/>
                </Typography>
           <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for a channel..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={(e) => {
                keyPress(e)
              }}

            />
          </div>
            </Toolbar>
        </AppBar>
        <CssBaseline />
    </ThemeProvider>
    )
}

export default Header;