import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Box,AppBar,Toolbar,IconButton,Menu,MenuList,MenuItem, Typography,List,ListItem,ListItemText,Stack} from '@mui/material';
import {MenuOutlined} from '@mui/icons-material';
// import Icon from '@material-ui/core/Icon';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   icon: {
//     fontSize: 30,
//     color: 'black',
//     float: 'left' 
//   },
// });
export function PageNav(){
 // const totalItem=3;
//  const classes = useStyles();
 const [anchorEl, setAnchorEl] = useState(null);
 const isMenuOpen = Boolean(anchorEl);

 const handleMenuClick = (event) => {
   setAnchorEl(anchorEl ? null : event.currentTarget);
 };

 const handleMenuClose = () => {
   setAnchorEl(null);
 };
     return(

        <AppBar position='fixed' sx={{backgroundColor:'transparent', borderRadius:'0.5rem'}}>
            <Toolbar>
            
                      {/* <Icon className={classes.icon}>menu</Icon> */}
                      <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton edge="start" color="success" aria-label="menu" onClick={handleMenuClick}>
            {/* <Icon className={classes.icon}>menu</Icon> */}
            <MenuOutlined/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{textDecorationLine:'none'}}
          >
            {['Home', 'About', 'Services', 'Reservation'].map((text) => (
              <MenuItem onClick={handleMenuClose} key={text} sx={{textDecorationLine:'none'}}>
                <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                  {text}
                </Link>
              </MenuItem>
            ))}
          </Menu>

                     
                </Box>
              <Typography variant='subtitle1' sx={{flexGrow:1,color:'black'}} component='p' >Baricho<Typography variant='h6' sx={{color:'green'}} component='span' >Mechanic</Typography></Typography>
              
                 <Box  >
                 <Stack gap={2} direction='row'>
                      <Box sx={{display:{xs:'none' ,sm:'block'}}}>
                      
                        {['Home','About', 'Services', 'Reservation'].map((text) => (
                          < Typography component='span' sx={{padding:'1rem',textDecoration:'none'}}>
                            <Link to={`/${text.toLowerCase()}`}  sx={{textDecoration:'none'}}>
                            <Typography  sx={{textDecoration:'none',fontSize:'0.8rem',color:'green'}} component='span'>{text}</Typography>
                            </Link>
                            </Typography>
                            
                       
                        ))}
                    
                </Box> 
                  
                </Stack>
                </Box>  

            </Toolbar>
        </AppBar>
       
     )
};
// export default PageNav;