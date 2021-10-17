
import type { AppProps } from 'next/app'
import React, { Component } from "react";
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

const dataFetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  if(response.status !== 200) throw new Error(data.message);

  return data
}

const loginUser = async (userName: string) => {

    const response = await fetch('/api/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'userName': userName})
    });

    const serverResponse = await response.json();
    console.log(`status: ${response.status}`);
    if(response.status !== 200) return 'not found';
    else {
        //Router.push('/Home');
        return 'we found it';
    }
}
export default function Login(props: propTypes){

  const { query } = useRouter();
  //const {data, error} = useSWR('/api/Home/Login', dataFetcher);
  
  let userInput = "";
  const registerUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    userInput = event.currentTarget.value;
    console.log(userInput);
  }
  const submitUserInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInput);
    loginUser(userInput).then(result => console.log(`res: ${result}`));
    //window.location.reload();
  }

  return (
    <Box 
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
          <form onSubmit={submitUserInput} /*onChange={submitUserInput}*/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <TextField placeholder={"User Name..."} style={{width: '90%'}} onChange={registerUserInput}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type="submit" variant="contained" color="success">
              Sign Up
            </Button>
            </div>
          </form>
        </Box>
      </Card>
    </Box>
  );
}

interface propTypes {
  text?: string,
  sx?: object,
  icon?: any
}
