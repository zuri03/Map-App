
import type { AppProps } from 'next/app'
import React, { Component } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Router from 'next/router';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import { TextField } from '@mui/material';
import { defaultHead } from 'next/head';

export default function CreateTask(props: propTypes){

  let newTask: NewTask = {
    title: '',
    description: '',
    urgency: '',
    dueDate: ''
  };

  const updateNewTaskObject = (event: React.ChangeEvent<HTMLInputElement>): void => {

    event.preventDefault();

    switch(event.currentTarget.id){
        case 'title':       newTask.title = event.currentTarget.value; break;
        case 'description': newTask.description = event.currentTarget.value; break;
        case 'urgency':     newTask.urgency = event.currentTarget.value; break;
        case 'dueDate':     newTask.dueDate = event.currentTarget.value; break;
        default:            console.log("incorrect input"); break;
    }
  }

  const submitNewTask = async () => {
    fetch('/api/Home/CreateUser', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({'task': newTask})
    });
  }
  
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <Card sx={{width: '40vw', height: '60vh'}}>
        <CardHeader sx={{bgcolor: 'primary.main'}}/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 
            style={{
            fontFamily: 'Open Sans, sans-serif', 
            marginBottom: '0px', marginTop: '5px',
            }}>Create Task</h2>
          </div>
            <hr style={{width: '90%'}}/>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <div style={{display: 'grid', gridTemplateRows: 'repeat(5, 1fr)', width: '80%'}}>
              <TextField id="title" placeholder={"Title..."} onChange={updateNewTaskObject}/>
              <TextField id="description" placeholder={"Description..."} onChange={updateNewTaskObject} />
              <TextField id="urgency" placeholder={"Urgency..."} onChange={updateNewTaskObject}/>
              <TextField id="dueDate" placeholder={"Due Date..."} onChange={updateNewTaskObject}/>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={submitNewTask} variant="outlined">CREATE A NEW TASK</Button>
          </div>
      </Card>
    </Box>
  );
}

interface propTypes {
  text?: string,
  sx?: object,
  icon?: any
}

interface NewTask {
    title: string,
    description: string,
    urgency: string,
    dueDate?: string
}
 