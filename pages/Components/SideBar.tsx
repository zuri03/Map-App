import Card from '@mui/material/Card';
import React from 'react';
import PropTypes from 'prop-types';
import SideBarItem from './SideBarItem';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SideBar (): PropTypes.ReactElementLike{
    return (
        <Card
            sx={{
                height: "100%",
                display: 'grid',
                gridTemplateRows: '10% 10% 10% 10% 10% 50%',
                pt: '15%', pb: '15%',
                boxShadow: 5
            }}
        >
            <SideBarItem text="HOME" icon={<HomeIcon fontSize="large" />}/>
            <SideBarItem text="TASKS" icon={<TaskIcon fontSize="large"/>}/>
            <SideBarItem text="TEAMS" icon={<PeopleIcon fontSize="large"/>}/>
            <SideBarItem text="GITHUB" icon={<GitHubIcon fontSize="large"/>}/>
        </Card>
    );
}