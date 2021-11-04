import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from "react";
import App from './_app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { fontWeight } from '@mui/system';
import CardHeader from '@mui/material/CardHeader';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskIcon from '@mui/icons-material/Task';
import ChatIcon from '@mui/icons-material/Chat';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { CardActionArea, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Router from 'next/router';
import {useEffect, useState} from 'react';
import Tag from './Components/Tag';

const Index = () => {

  const [isLoggedIn, setisLoggedIn]: [boolean, Function] = useState(false);
  const [incorrectCredentials, setincorrectCredentials]: [boolean, Function] = useState(false);
  const [serverError, setserverError]: [boolean, Function] = useState(false);

  const WrongCredentials = () => {
    return (<p>Incorrect Username</p>);
  }
  const ServerError = () => {
    return (<p>Server Error</p>);
  }

  React.useEffect(() => {
    if(isLoggedIn){
      async function getUserTasks() {
        const response = await fetch('/api/Home', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'method': 'getTasks', 'username': username})
        });
        return response;
      }
      
      let serverResponse = getUserTasks();
  
      serverResponse.then(res => { console.log(res); return res.json(); }).then(json => console.log(json));
    }
  });

  let username = "";
  const checkCredentials = async () => {
    
    const response = await fetch('/api/Home/Login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username': username})
    });

    if(response.status !== 200) setserverError(true);

    const json = await response.json();

    if(json.res === 'false') setincorrectCredentials(true);
    else setisLoggedIn(true);
  }

  const createUser = async () => {

    const response = await fetch('/api/Home/CreateUser', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username': username})
    });
    if(response.status === 200) setisLoggedIn(true);
  }

  const loggedOutHomePage = <Box 
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }}
>
  <Card sx={{width: '40vw', height: '60vh'}}>
  <CardHeader sx={{bgcolor: 'primary.main'}}/>
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(5, 1fr)',
        height: '100%'
      }}
    >
      <div style={{display: 'grid', gridTemplateRows: 'repeat(2, 1fr)'}}>
      <h2 
      style={{
        fontFamily: 'Open Sans, sans-serif', 
        marginBottom: '0px', marginTop: '5px', justifySelf: 'center',
      }}>WELCOME TO THE APPLICATION</h2>
      <h6 style={{marginTop: '0px', marginBottom: '0px', justifySelf: 'center'}}>Please login to continue</h6>
      <hr style={{width: '90%'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <TextField placeholder={"User Name..."} style={{width: '90%'}} onChange={(event) => username = event.currentTarget.value}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button type="submit" variant="contained" color="success" onClick={checkCredentials}>
          Login
        </Button>
        <Button type="submit" variant="contained" color="success" onClick={createUser}>
          Create Account
        </Button>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {incorrectCredentials ? <WrongCredentials /> : null}
      </div>
    </Box>
  </Card>
</Box>;

  const loggedInHomePage = <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 1,
    gridTemplateRows: 'auto',
    gridTemplateAreas: `"header header header header header"
      "chat chat chat tasks tasks"
      "chat chat chat tasks tasks"
      "chat chat chat tasks tasks"
      "chat chat chat tasks tasks"
      "chat chat chat tasks tasks"`,
    paddingRight: '10px'
  }}
>
  <h2 style={{
    fontFamily: 'Open Sans, sans-serif', marginBottom: '0px', marginTop: '5px'
    }}
  >Home</h2>
  <Card
  sx={{
    gridArea: 'chat',
    paddingLeft: '15px', 
    paddingRight: '15px',
    paddingBottom: '15px'
  }}>
    <div style={{justifyContent: 'space-between', display: 'flex'}}>
      <div>
        <h2 style={{marginBottom: '0px'}}>Upcoming Tasks</h2>
        <h6 style={{marginTop: '0px', marginBottom: '0px'}}>Tasks that are about to expire soon.</h6>
      </div>
      <div>
      <TaskIcon sx={{marginTop: '20px'}} fontSize="large"/>
      </ div>
    </div>
    <hr style={{width: '100%'}}/>
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{
            borderRight: '1px solid black',
            marginRight: '10px',
            paddingRight: '10px'
          }}>TASK 1</div>
          <Tag color="primary.main" children="URGENT!"></Tag>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{
            borderRight: '1px solid black',
            marginRight: '10px',
            paddingRight: '10px'
          }}>TASK 2</div>
          <Tag color="#ff1a1a" children="CRITICAL!"></Tag>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div style={{
            borderRight: '1px solid black',
            marginRight: '10px',
            paddingRight: '10px'
          }}>TASK 2</div>
          <Tag color="#00b33c" children="TRIVIAL"></Tag>
        </AccordionSummary>
      </Accordion>
  </div>
  </Card>
  <Card
    sx={{
      gridArea: 'tasks',
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingBottom: '15px'
    }}
  >
    <div style={{justifyContent: 'space-between', display: 'flex'}}>
      <div>
        <h2 style={{marginBottom: '0px'}}>Recent Messages</h2>
        <h6 style={{marginTop: '0px', marginBottom: '0px'}}>Recent messages from chat rooms</h6>
      </div>
      <div>
      <ChatIcon sx={{marginTop: '20px'}} fontSize="large"/>
      </ div>
    </div>
    <hr style={{width: '100%'}}/>
    Recent Messages
  </Card>
</Box>

  return(
      <html lang="en">
      <title>Page Title</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300\&display=swap" rel="stylesheet"></link>
      <style>
      </style>
      <script src=""></script>
      <body>
        <div className="">
          {isLoggedIn ? loggedInHomePage : loggedOutHomePage}
        </div>
      </body>
      </html>
  );
}
export default Index