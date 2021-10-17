import Card from '@mui/material/Card';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { borderLeft } from '@mui/system';
import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
});

export default class SideBarItem extends React.Component<propTypes, itemState>{

    constructor(props: propTypes){
        super(props);
        this.state = {
            backgroundColor: "",
            borderLeft: 0
        }
    }

    render(){
        return (
            <Box 
                sx={{
                    width: "100%",
                    fontSize: '25px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    backgroundColor: this.state.backgroundColor,
                    fontFamily: 'roboto',
                    borderLeft: this.state.borderLeft,
                    borderColor: 'primary.main',
                    height: "2em"
                }}
                onMouseOver={() => {
                    this.setState({backgroundColor: '#c2c2d6', borderLeft: 5})
                }}
                onMouseLeave={() => {this.setState({backgroundColor: "#ffffff", borderLeft: 0})}}
            >
                <Box sx={{display: 'flex', justifyContent: 'start', fontFamily: 'Open Sans, sans-serif;'}}>
                    {this.props.text}
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    {this.props.icon}
                </Box>
            </Box>
        );
    }
}

interface propTypes {
    text?: string,
    sx?: object,
    icon?: any
}

interface itemState {
    backgroundColor: string,
    borderLeft: number,
    
}