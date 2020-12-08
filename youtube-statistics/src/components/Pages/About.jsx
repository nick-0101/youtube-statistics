import React from 'react';
import { Link } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import { createMuiTheme, fade, makeStyles } from '@material-ui/core/styles';
import { Typography, ThemeProvider, CssBaseline,  AppBar, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

import styles from './About.module.css'


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


const About = ({history, search}) => {
    const classes = useStyles();

    const keyPress = (e) => {
        if(e.key === 'Enter') {
          history.push('/');
        }
    }
    return (
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" >
                    <Toolbar>
                    <Link to={'/'} className={styles.link}>
                        <Typography variant="h6" className={styles.title} >
                            YT Stats <TrendingUpRoundedIcon style={{ fontSize: 30, marginLeft: 5}}/>
                        </Typography>
                    </Link>
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
                    onKeyPress={(e) => {
                        keyPress(e)
                    }}
                    />
                </div>
                    </Toolbar>
                </AppBar>
                <div className={styles.container}>
                    <div className={styles.articleTitle}>
                        <Typography variant="h2" style={{textAlign: 'center'}}>How we calculate revenue</Typography>
                    </div>
                </div>
                <div className={styles.articleWrapper}>
                    <Typography variant="body1" style={{ lineHeight: '2' }} gutterBottom>
                        The revenue shown on each youtubers card is an estimate. 
                        We estimate by the money made by getting the youtubers total 
                        views x by our custom RPM (Revenue per 1,000 Impressions). This RPM range 
                        is after the cut Google takes from Adsense earnings which is 45%.

                    </Typography>
                    <Typography variant="body1" style={{ lineHeight: '2' }}> 
                       NOTE: The revenue estimate shown is only for the total VIEWS, we don't 
                       take into account YouTube Red Views, Channel Memberships, Super Chat, Super Stickers, 
                       merchandise etc. Therefore earnings are likely more than the estimate
                       given. For more information visit: <a className={styles.linkStyle} style={{textDecoration: 'underline'}} 
                       target="_blank" rel="noopener noreferrer" href="https://support.google.com/youtube/thread/57999713?hl=en" >Introducing RPM – new monetization metric in YouTube Analytics</a>
                    </Typography>
                </div>
                <CssBaseline />
            </ThemeProvider>
        
    )
}

export default About;