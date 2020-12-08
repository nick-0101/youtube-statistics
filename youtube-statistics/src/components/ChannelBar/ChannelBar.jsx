import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button, Menu, MenuItem, Typography,ThemeProvider, CssBaseline } from '@material-ui/core';
import cx from 'classnames';
// import Tables from './components/Tables';
import Remove from '@material-ui/icons/Remove';


import styles from './ChannelBar.module.css'


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    action: {
      disabled: '#fff'
    }
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(1),
      textTransform: 'none',
    }
  },
}));


const ChannelBar = ({search}) => {
    const classes = useStyles();
  
   const [anchorEl0, setAnchorE0] = React.useState(null);
   const [anchorEl1, setAnchorE1] = React.useState(null);
   const [anchorEl2, setAnchorE2] = React.useState(null);
   const [anchorEl3, setAnchorE3] = React.useState(null);

   // eslint-disable-next-line


  const handleClick = (event) => {
    setAnchorE0(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE0(null);
  };

   const handleClick1 = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorE1(null);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };
    return (
         <div className={cx(classes.root, styles.container)}>
            <ThemeProvider theme={darkTheme} >
              <div className={cx(styles.buttonWrapper, classes.root)} >
                  {/* <Button style={{ padding: 0 }}disabled><Typography>Popular:</Typography></Button> */}

                  {/* Top 10 channels */}
                  <Button variant="contained"
                    style={{backgroundColor: '#fa52b7', marginRight: 0}} onClick={handleClick3}>
                    Top 10 Channels
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl3}
                    keepMounted
                    open={Boolean(anchorEl3)}
                    onClose={handleClose3}
                    onClick={handleClose3}
                  >
                  <MenuItem onClick={() => search('T-Series')}>#1) T-Series</MenuItem>
                  <MenuItem onClick={() => search('PewDiePie')}>#2) PewDiePie</MenuItem>
                  <MenuItem onClick={() => search('Cocomelon')}>#3) Cocomelon</MenuItem>
                  <MenuItem onClick={() => search('SET India')}>#4) SET India</MenuItem>
                  <MenuItem onClick={() => search('5-Minute Crafts')}>#5) 5-Minute Crafts</MenuItem>
                  <MenuItem onClick={() => search('WWE')}>#6) WWE</MenuItem>
                  <MenuItem onClick={() => search('Kids Diana Show')}>#7) ✿ Kids Diana Show</MenuItem>
                  <MenuItem onClick={() => search('Zee Music Company')}>#8) Zee Music Company</MenuItem>
                  <MenuItem onClick={() => search('Like Nastya Vlog')}>#9) Like Nastya Vlog</MenuItem>
                  <MenuItem onClick={() => search('Canal KondZill')}>#10) Canal KondZill</MenuItem>
                  </Menu>

                  <Button disabled style={{padding: 0, margin: 0}}>
                    <Typography style={{paddingTop: 5}}>
                      <Remove />
                    </Typography>
                  </Button>
                  {/* Dream Team */}
                  <Button variant="contained"
                     style={{backgroundColor: '#83e345'}} onClick={handleClick1}>
                    Dream Team
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl1}
                    keepMounted
                    open={Boolean(anchorEl1)}
                    onClose={handleClose1}
                    onClick={handleClose1}
                  >
                    <MenuItem onClick={() => search('Dream')}>Dream</MenuItem>
                    <MenuItem onClick={() => search('George Not Found')}>George Not Found</MenuItem>
                    <MenuItem onClick={() => search('Sapnap')}>Sapnap</MenuItem>
                  </Menu>

                  {/* Mr Beast */}
                  <Button variant="contained"
                    style={{backgroundColor: '#33a7ee'}} onClick={handleClick}>
                    MrBeast
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl0}
                    keepMounted
                    open={Boolean(anchorEl0)}
                    onClose={handleClose}
                    onClick={handleClose}
                  >
                    <MenuItem onClick={() => search('MrBeast')}>MrBeast</MenuItem>
                    <MenuItem onClick={() => search('MrBeast Gaming')}>MrBeast Gaming</MenuItem>
                    <MenuItem onClick={() => search('MrBeast 2')}>MrBeast 2</MenuItem>
                    <MenuItem onClick={() => search('MrBeast Shorts')}>MrBeast Shorts</MenuItem>
                    <MenuItem onClick={() => search('Beast Reacts')}>Beast Reacts</MenuItem>
                    <MenuItem onClick={() => search('Mr Bro')}>Mr Bro</MenuItem>
                    <MenuItem onClick={() => search('Beast Philanthropy')}>Beast Philanthropy</MenuItem>
                    <MenuItem onClick={() => search('Don\'t Subscribe')}>Don't Subscribe</MenuItem>
                  </Menu>

                  {/* Sidemen */}
                  <Button variant="contained"
                    style={{backgroundColor: '#33ab9f'}} onClick={handleClick2}>
                    Sidemen
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                    onClick={handleClose2}
                  >
                    <MenuItem onClick={() => search('https://www.youtube.com/user/KSIOlajidebt')}>KSI</MenuItem>
                    <MenuItem onClick={() => search('Miniminter')}>Miniminter</MenuItem>
                    <MenuItem onClick={() => search('Zerkaa')}>Zerkaa</MenuItem>
                    <MenuItem onClick={() => search('TBJZL')}>TBJZL</MenuItem>
                    <MenuItem onClick={() => search('Behzinga')}>Behzinga</MenuItem>
                    <MenuItem onClick={() => search('Vikkstar123')}>Vikkstar123 </MenuItem>
                    <MenuItem onClick={() => search('W2S')}>W2S</MenuItem>
                  </Menu>
                  
            </div>
                <CssBaseline />
            </ThemeProvider>
        </div>
    )
};


export default ChannelBar;