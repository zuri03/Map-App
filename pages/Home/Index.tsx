
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
import Tag from '../Components/Tag'
import TaskIcon from '@mui/icons-material/Task';
import ChatIcon from '@mui/icons-material/Chat';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { CardActionArea, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const dataFetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  if(response.status !== 200) throw new Error(data.message);

  return data
}
export default function Home(props: propTypes){

  const { query } = useRouter();
  const {data, error} = useSWR('/api/Home/Login', dataFetcher);

  return (
    <Box
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
      }}
      >
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
  );
}

interface propTypes {
  text?: string,
  sx?: object,
  icon?: any
}
