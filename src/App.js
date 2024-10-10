//import logo from './logo.svg';
//import './App.css';
import React,{Fragment} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  Applayout  from './Components/Applayout';
import {Home} from './Components/Home/Home';
const defaultTheme = createTheme({
  //  palette:{
  //    mode:"dark"
  // }
});
function App() {
  const router=  createBrowserRouter([{
    element:<Applayout/>,
  
    children:[
         {
          path:'/',
          element:<Home/>
         }
         
         
        ],
   },
   
       ]);
  
    return (
      <ThemeProvider theme={defaultTheme}> 
      <CssBaseline></CssBaseline> 
      <Fragment>
        
        <RouterProvider router={router}/>
        
      
      </Fragment>
      </ThemeProvider>
    );
 
}

export default App;
