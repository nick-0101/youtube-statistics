import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { InputBase, ThemeProvider, CssBaseline } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './Search.module.css'

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
    backgroundColor: '#424242',
    marginLeft: 0,
    width: '100%',
    maxWidth: 800,
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },
}));


const Search = ({ search }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    const keyPress = (e) => {
        if(e.key === 'Enter') {
          if(value == null) {
            return;
          } else {
            search(value)
            setValue('')
          }
        }
    }
  return ( 
  <div className={styles.container}>
      <ThemeProvider theme={darkTheme}>
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
              style={{height: 60}}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={(e) => keyPress(e)}

            />
          </div>
        <CssBaseline />
      </ThemeProvider>
    </div>
 );
}

export default Search;