
import type { AppProps } from 'next/app';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Link from 'next/link';
import { fontWeight } from '@mui/system';
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


export default function Index(props: propTypes){
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <Card sx={{margin: '5px', width: '60vw', borderRadius: '15px', border: '1px solid black'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h2 
          style={{
          fontFamily: 'Open Sans, sans-serif', 
          marginBottom: '0px', marginTop: '5px',
          }}>Your Tasks</h2>
        </div>
          <hr style={{width: '90%'}}/>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
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
        </div>
      </Card>
      <Card sx={{margin: '5px'}}>
        <Link href='/Task/CreateTask'>
            <Button type="submit" variant="contained" color="success">CREATE TASK</Button>
        </Link>
        <Link href='/Task/CreateTask'>
            <Button type="submit" variant="contained" color="success">Edit TASK</Button>
        </Link>
      </Card>
    </Box>
  );
}

interface propTypes {
  text?: string,
  sx?: object,
  icon?: any
}
