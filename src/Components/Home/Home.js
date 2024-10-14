
import React,{useState, useEffect, useRef} from 'react';
import { Box,Typography,Fade,Grid,Button,Card,CardActions,CardContent,CardMedia,TextField,Rating} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import vida from '../../Vida/Vida2.mp4';
import ima9 from '../../Pics/images (9).jpeg';
import ima7 from '../../Pics/images (7).jpeg';
import ima13 from '../../Pics/images (13).jpeg';
import ima22 from '../../Pics/images (22).jpeg';
import ima21 from '../../Pics/images (21).jpeg';
import ima16 from '../../Pics/images (16).jpeg';
import ima17 from '../../Pics/images (17).jpeg';
import ima4 from '../../Pics/images (4).jpeg';

export function Home(){
  const [name,setNname]=useState('');
  const[nameValid,setNameValid]=useState(true);
  const [nameerror,setNameError]=useState('');
  const[email,setEmail]=useState('');
  const[emailValid,setEmailValid]=useState(true);
  const[emailError,setEmailError]=useState('');
  const[issue,setIssue]=useState('');
  const[issueValid,setIssueValid]=useState(true);
  const[issueError,setIssueError]=useState('');
  const[phone,setPhone]=useState('');
  const[phoneValid,setPhoneValid]=useState(true);
  const[phoneError,setPhoneError]=useState('');
  const[thank,setThankyou]=useState('');
  const[thankDisplay,setThankyouDispaly]=useState(false);
  
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [visibleBoxes, setVisibleBoxes] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
  });
  
  const fadeRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleBoxes((prev) => ({
              ...prev,
              [entry.target.dataset.box]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  

  const position = [-1.30214,36.82562];
  ///-1.3025154566,36.8213467146
  const nameHandler=(e)=>{
     setNname(e.target.value);
     setNameValid(true);
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value);
    setEmailValid(true);
 }
 const issueHandler=(e)=>{
  setIssue(e.target.value);
  setIssueValid(true);
 }
 const phoneHandler=(e)=>{
  setPhone(e.target.value);
  setPhoneValid(true);
 }

 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const phoneRegex = /^(07|01)\d{8}$/;
 const submitHandler=(e)=>{
  e.preventDefault();
  if(name.trim().length===0){
    setNameValid(false);
    setNameError('Enter your name');
    return;
  }

  if (!emailRegex.test(email) && email.trim().length===0 ) {
    setEmailValid(false);
    setEmailError('Invalid email address');
    return;
  }
  if(!phoneRegex.test(phone)){
   setPhoneValid(false);
   setPhoneError('Phone should be ten digits and start with 07 or 01');
   return;
  }

  if(issue.trim().length===0){
    setIssueValid(false);
    setIssueError('Enter your car issue');
    return;
  }
  setThankyou(`Your information has been received and will get back to you shortly ${name} .`)
  setNname('');
  setEmail('');
  setPhone('');
  setIssue('');
  setThankyouDispaly(true);
 }


   return(
     <Box>
          <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh', // or any specific height you want
        overflow: 'hidden',
        backgroundImage: isSmallScreen ? `url(${ima17})` : 'none', // Background image on small screens
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',

      }}
    >
      {!isSmallScreen && (
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
        >
          <source src={vida} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          color: 'white', // Adjust based on your need
          p: 3,
          top:'25%',
          left:'10%',
          maxWidth:'80%',
          backgroundColor:'rgba(0,0,0,0.5)',
          borderRadius:'0.9rem',
          textAlign:'center'
        }}
      >
        {/* Your content here */}
        <Typography variant='subtitle1' sx={{textAlign:'center'}} >
            Welcome to
        </Typography>
        <Typography sx={{textAlign:'center' ,fontSize:{xs:'2.3rem',sm:'3.3rem'}}} >
            Baricho Mechanics Automotives.
        </Typography>
        <Typography variant='h6' sx={{textAlign:'center'}}>
            "We believe the key to effective service is working with the right Mechanics"
             </Typography>

             <Button variant='contained' color='success' sx={{
                   
                   alignContent:'center',
                   alignItems:'center',
                   fontSize:'0.7rem',
                   borderRadius:'0.5rem',
                   marginTop:'2rem'
                }}>
                   Learn More
                </Button>
      </Box>
                
    </Box>

       <Box  ref={(el) => (fadeRefs.current[0] = el)} data-box="box1">
       <Fade in={visibleBoxes.box1} timeout={1000}>
       <Box>
               <Typography variant='h4' sx={{textAlign:'center', color:'darkolivegreen',fontStyle:'bold'}}>
                    About Us
                </Typography> 
       <Grid container spacing={2} padding={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={ima7}
        alt="Card Image"
      />
      <CardContent>
         <Typography variant='h6' color="secondary">Mechanics in Baricho</Typography>
        <Typography variant="body2" >
          At this workshop we understand how frustrating it can 
          be when you breakdown by the side of the road. 
          If you're looking for a car mechanic service in 
          Nairobi we offer mechanics capable of engine diagnostics,
           clutch replacement, carbon cleaning,
            health check,timing belt replacement 
            as well as brake tuning and much more. 
            Give us a call on +254704878850 to find out more.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={ima13}
        alt="Card Image"
      />
      <CardContent>
          <Typography variant='h6' color="secondary">Modern Equipments</Typography>
        <Typography variant="body2">
         We believe the key to effective service is working with the 
         right tools – as a result, we only work with the best equipment.
          You have nothing to worry about when we come to your car for repairs. 
          We understand that the industry is constantly changing, 
          as new ways of solving auto problems arise, 
          and we are dedicated to keeping ourselves updated with new trends.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
              </Grid>
         <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={ima9}
        alt="Card Image"
      />
      <CardContent>
         <Typography variant='h6' color="secondary">Our Expert staff</Typography>
        <Typography variant="body2">
          We boast of a range of well-trained mechanics with years of 
          experience in servicing and repairing different mobile cars. 
          Our team consists of highly dedicated and committed 
          professionals with a passion and love for cars – as a result, 
          we treat every single car as though it were our own. 
          Car owners loves it when we are working on their vehicles,
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>     

        </Grid>
       </Box>
    </Fade>
       </Box> 

       <Box ref={(el) => (fadeRefs.current[1] = el)} data-box="box2" sx={{marginTop:'2%',marginBottom:'2%'}}>
          <Fade in={visibleBoxes.box2} timeout={1000}> 
          <Box>
            <Typography variant='h4' sx={{textAlign:'center', color:'darkolivegreen',fontStyle:'bold'}}>
                    What We Offer
                </Typography>
                <Box sx={{height:'0.1rem', width:'100%',backgroundColor:'black'}}></Box>
                <Grid container columnSpacing={2} rowSpacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: '10%',backgroundColor:'lightgreen'}}>
                            
                         <CardContent>
                          <Box sx={{padding:'10%'}}>
                           <Typography variant='h5'color="secondary" > Clutch Replacement</Typography> 
                            <Typography variant='body2'>
                            Clutch replacement is part of dalily schedules in our workshop.
                            Many problems may occur with this wear part
                         </Typography>
                          </Box>
                          
                         </CardContent>
                         
                      </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                     <Card sx={{ borderRadius: '10%',backgroundColor:'lightgreen'}}>
                            
                         <CardContent>
                          <Box sx={{padding:'10%'}}>
                           <Typography variant='h5' color="secondary">Belt Replacement </Typography> 
                            <Typography variant='body2'>
                             A timing chain is part of an internal combustion engine that syncronizes the rotation.
                            Therefore it needs a proper service.
                         </Typography>
                          </Box>
                          
                         </CardContent>
                         
                      </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: '10%', backgroundColor:'lightgreen'}}>
                            
                         <CardContent>
                          <Box sx={{padding:'10%'}}>
                           <Typography variant='h5' color="secondary"> Carbon Cleaning</Typography> 
                            <Typography variant='body2'>
                            Baricho mechanics have experts that leaves the client with a smile in their face.
                         </Typography>
                          </Box>
                          
                         </CardContent>
                         
                      </Card>
                       
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ borderRadius: '10%',backgroundColor:'lightgreen'}}>
                            
                         <CardContent>
                          <Box sx={{padding:'10%'}}>
                           <Typography variant='h5' color="secondary">Brakes, Servo and hydrolic repair</Typography> 
                            <Typography variant='body2'>
                            Baricho mechanics are committed to giving their clients the best when it comes to hydraulic services.
                         </Typography>
                          </Box>
                          
                         </CardContent>
                         
                      </Card>
                      
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: '10%',backgroundColor:'lightgreen'}}>
                            
                         <CardContent>
                          <Box sx={{padding:'10%'}}>
                           <Typography variant='h5' color="secondary">Car recovery</Typography> 
                            <Typography variant='body2'>
                            If you need quick recovery service just reach to us throught this contact.
                         </Typography>
                          </Box>
                          
                         </CardContent>
                         
                      </Card>
                        
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ borderRadius: '10%',backgroundColor:'lightgreen'}}>
                            
                            <CardContent>
                             <Box sx={{padding:'10%'}}>
                              <Typography variant='h5' color="secondary">Full Repair</Typography> 
                              <Typography variant='body2'>
                               We lead in Nairobi when in it comes to full services,visit us be assured of a safe ride.
                         </Typography>
                             </Box>
                             
                            </CardContent>
                            
                         </Card>
                  </Grid>
                </Grid>
                </Box>
                </Fade>
       </Box>

       <Box ref={(el) => (fadeRefs.current[2] = el)} data-box="box3">
       <Fade in={visibleBoxes.box3} timeout={1000}>
       <Box>
            <Typography variant='h4' sx={{textAlign:'center', color:'darkolivegreen',fontStyle:'bold'}}>Book An Appointment</Typography>
            <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 700,
        margin: 'auto',
        padding: 2,
      }}
    >
      <Typography variant="h5" component="h2">
      Book an appointment with us and enjoy the amazing serives.
      </Typography>

      <TextField
        label="Name"
        variant="outlined"
        name="name"
        onChange={nameHandler}
        error={!nameValid}
        helperText={!nameValid && nameerror}
        
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        onChange={emailHandler}
        error={!emailValid}
        helperText={!emailValid && emailError}
       
      />
      <TextField
        label="Phone"
        variant="outlined"
        type="number"
        name="Phone no"
        onChange={phoneHandler}
        error={!phoneValid}
        helperText={!phoneValid && phoneError}
       
      />
      <TextField
        label="Car Issue"
        variant="outlined"
        multiline
        rows={4}
        onChange={issueHandler}
        error={!issueValid}
        helperText={!issueValid && issueError}
        
      />
      {thankDisplay && <Typography variant='body2'>{thank}</Typography>}
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
    </Box>
    </Fade>
    </Box>
     
   
    <Box ref={(el) => (fadeRefs.current[3] = el)} data-box="box4">
    <Fade in={visibleBoxes.box4} timeout={1000}>
     <Box 
        sx={{
          display: 'flex',          
          justifyContent: 'center', 
          alignItems: 'center',     
          flexDirection: 'column',  
          width: '100%',            
          padding: 2,
        }}
     >
    
    <Typography variant='h4' sx={{textAlign:'center', color:'darkolivegreen',fontStyle:'bold'}}>
                    Where we are located
                    
                </Typography>
        <Box 
           sx={{
            width: '100%',          // Ensure the box takes full width
            maxWidth: '900px',       // Constrain maximum width for larger screens
            height: '400px',         // Set a fixed height
            margin: '0 auto',        // Center the map on the page
            overflow: 'hidden',      // Prevent any overflow issues
          }}
        >        
                <MapContainer  center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      {/* Tile layer using OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for Nairobi, Kenya */}
      <Marker position={position}>
        <Popup>
          Carrefour Supermarket<br /> Latitude: -1.30214 <br /> Longitude: 36.82562
        </Popup>
      </Marker>
    </MapContainer>
    </Box>
    </Box>
    </Fade>
    </Box>
    <Box ref={(el) => (fadeRefs.current[4] = el)} data-box="box5">
    <Fade in={visibleBoxes.box5} timeout={1000}>
    <Box>
        <Typography variant='h4' sx={{textAlign:'center', color:'darkolivegreen',fontStyle:'bold'}}>
            Reviews from Customers
        </Typography>
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={4} md={3}>
          <Card>
          <CardMedia
              component="img"
              height="140"
              src={ima22}
              alt="Card Image"
            />
              <CardContent>
                <Typography variant="subtitle1" >Emma Akoth</Typography>
                <Typography variant="subtitle1" >Rating {"    "}
                  <Rating name="read-only" value={5} readOnly />
                </Typography>
                <Typography variant='body2' sx={{fontStyle:'italic'}}>"Have had several issues with my car even after bieng serviced by other mechanics, but from the moment i heard of the Barcho gurus the problem is gone."</Typography>
              </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
            <CardMedia
              component="img"
              height="140"
              src={ima17}
              alt="Card Image"
            />
              <CardContent>
                <Typography variant="subtitle1" >Toby Ochollah</Typography>
                <Typography variant="subtitle1" >Rating {"    "}
                  <Rating name="read-only" value={5} readOnly />
                </Typography>
                <Typography variant='body2' sx={{fontStyle:'italic'}}>"Have had several issues with my car even after bieng serviced by other mechanics, but from the moment i heard of the Barcho gurus the problem is gone."</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Card>
          <CardMedia
              component="img"
              height="140"
              src={ima16}
              alt="Card Image"
            />
              <CardContent>
                <Typography variant="subtitle1">Olian Marube</Typography>
                <Typography variant="subtitle1" >Rating {"    "} 
                  <Rating name="read-only" value={5} readOnly />
                </Typography>
                <Typography variant='body2' sx={{fontStyle:'italic'}}>"Have had several issues with my car even after bieng serviced by other mechanics, but from the moment i heard of the Barcho gurus the problem is gone."</Typography>
              </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Card>
          <CardMedia
              component="img"
              height="140"
              src={ima21}
              alt="Card Image"
            />
              <CardContent>
                <Typography variant="subtitle1" >Naomy Awelo</Typography>
                <Typography variant="subtitle1" >Rating {"    "}
                  <Rating name="read-only" value={5} readOnly />
                </Typography>
                <Typography variant='body2' sx={{fontStyle:'italic'}}>"Have had several issues with my car even after bieng serviced by other mechanics, but from the moment i heard of the Barcho gurus the problem is gone."</Typography>
              </CardContent>
          </Card>
          </Grid>

        </Grid>
          <Typography variant='h6' sx={{fontStyle:'italic',textAlign:'center'}}>Leave a comment</Typography>
          <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 700,
            margin: 'auto',
            padding: 2,
          }}
          >

<TextField
        label="Leave a comment"
        variant="outlined"
        multiline
        rows={4}
        onChange={issueHandler}
        error={!issueValid}
        helperText={!issueValid && issueError}
        
      />
       <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      </Box>
      </Box>
      </Fade>
    </Box>
    
    </Box>
   )
}
//export default Home;