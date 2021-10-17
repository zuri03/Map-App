import Card from '@mui/material/Card';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Tag (props: propTypes) {

    return (
        <Box sx={{
                bgcolor: props.color, 
                borderRadius: '20px',
                width: '6em',
                textAlign: 'center',
                color: '#ffffff',
                fontFamily: 'roboto',
            }}>
            {props.children}
        </Box>
    );
}

interface propTypes {
    children?: string,
    color: string,
}