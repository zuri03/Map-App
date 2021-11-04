
import React, { Component } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';


import PrimarySearchAppBar from "./AppHeader";
import SideBar from './SideBar';

export default function Layout ({children}: {children: PropTypes.ReactElementLike}): PropTypes.ReactElementLike {
  
    return(
      <div>
        <Box sx={{height: '10vh'}}>
          <PrimarySearchAppBar />
        </Box>
        <Box
          sx={{
            display: 'grid', 
            gridTemplateColumns: '1fr 6fr',
            gridTemplateRows: `repeat(1, 1fr)`,
            gap: 1,
            ml: "1vw",
            height: "85vh"
          }}
        >
          <Box sx={{bgcolor: 'white', mt: "1vh", mb: "1vh"}}><SideBar/></Box>
          <Box sx={{bgcolor: "#ffffff",  }}>{children}</Box>
        </Box>
        <div className="footer">
          <Box
            sx={{
              width: "100%",
              bgcolor: 'primary.main',
              height: "5vh"
            }}
          >
            THIS IS THE FOOTER
            
          </Box>
        </div>
      </div>
    );
}