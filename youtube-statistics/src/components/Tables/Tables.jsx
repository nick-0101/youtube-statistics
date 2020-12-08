import React from 'react';
import { Link } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Card, CardContent, Typography, ThemeProvider, CssBaseline, } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VideocamIcon from '@material-ui/icons/Videocam';
import NumAbbr from 'number-abbreviate';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import Search from '../Search/Search';


import styles from './Tables.module.css'


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
        main: red[700],
    }
  },
})


const Tables = ({data: { snippet, stats }, message, query, search}) => {    
    const numAbbr = new NumAbbr()
    if(!query) {
       return <Search search={search}/>
    } 

    if(!snippet || !stats) {
        return <div className={styles.container} style={{textAlign: 'center'}}>
                <ErrorOutlineIcon style={{ fontSize: 50, color: '#d32f2f' }}/>
                <h1 style={{marginTop: '0' }}>We couldn't find the youtuber you searched for</h1>
            </div>;
    }
    
    /* Calculate total money made */
    let rawMoneymade = stats.viewCount * 2.38;
    rawMoneymade = rawMoneymade / 1000;
    // const formatMoneyMade = rawMoneymade.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    
    return (
    <div className={styles.container}>
    <ThemeProvider theme={darkTheme}>
        <Card>
        <div className={styles.cardHeader}>
            <a href={'https://youtube.com/channel/' + snippet.channelId}>
                <img style={{borderRadius: '50%', border: '3px solid red'}} src={snippet.thumbnails.default.url} alt={snippet.title} />
            </a>
        </div>
        <Typography color="textPrimary" style={{textAlign:'center', marginTop:'5px'}}>{snippet.title}</Typography>
        <div className={styles.cardDesc}>
         <Typography color="textSecondary" variant="caption" display="block" gutterBottom>{snippet.description}</Typography>
        </div>
        <CardContent className={styles.cardContent} style={{padding: '20px 80px 20px 80px'}}>
            <div className={styles.cardInfo}>
                <div className={styles.items}> 
                    <YouTubeIcon style={{ textAlign: 'center', fontSize: 60, color: red[600] }} />
                    {(stats.hiddenSubscriberCount === true) ? <Typography  variant="h5" color="textPrimary">--</Typography> :
                    <Typography  variant="h5" color="textPrimary">{numAbbr.abbreviate(stats.subscriberCount)}</Typography>
                    }
                    <Typography color="textSecondary" variant="caption">subscribers</Typography>
                </div>
                <div className={styles.items}>
                    <VisibilityIcon style={{ fontSize: 60, color: red[600] }} />
                    <Typography style={{ textAlign: 'center'}} variant="h5" color="textPrimary">{numAbbr.abbreviate(stats.viewCount)}</Typography>
                    <Typography color="textSecondary" variant="caption">total views</Typography>
                </div> 
                <div className={styles.items}>
                    <VideocamIcon style={{ fontSize: 60, color: red[600] }} />  
                    <Typography variant="h5" color="textPrimary">{numAbbr.abbreviate(stats.videoCount)}</Typography>
                    <Typography color="textSecondary" variant="caption">videos</Typography>
                </div> 
            </div>
        </CardContent>
        <CardContent className={styles.cardContent} style={{padding: '0px 80px 30px 80px'}}>
             <div className={styles.cardInfo}>
                <div className={styles.items}>
                    <MonetizationOnRoundedIcon style={{ fontSize: 60, color: red[600] }} />
                    <Typography style={{ textAlign: 'center'}} variant="h5" color="textPrimary">${numAbbr.abbreviate(rawMoneymade)} USD</Typography>
                    <Typography color="textSecondary" variant="caption">total made <Link className={styles.itemLink} to={{pathname: '/how-we-calculate-revenue'}} >(Learn more)</Link></Typography>
                </div>
             </div>    
        </CardContent>
        </Card>
        <CssBaseline />
    </ThemeProvider>
    </div>
    )
}

export default Tables;