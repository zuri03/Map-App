import Card from '@mui/material/Card';
import React from 'react';
import PropTypes from 'prop-types';
import SideBarItem from './SideBarItem';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

export default function SideBar (): PropTypes.ReactElementLike{
    return (
        <Card
            sx={{
                height: "100%",
                display: 'grid',
                gridTemplateRows: '10% 10% 10% 10% 10% 50%',
                pt: '15%', pb: '15%',
                boxShadow: 5
            }}>
            <Link href='/'>
                <a><SideBarItem text="HOME" icon={<HomeIcon fontSize="large" />}/></a>
            </Link>
            <Link href='/Tasks/Index'>
                <a><SideBarItem text="TASKS" icon={<TaskIcon fontSize="large"/>}/></a>
            </Link>
            <SideBarItem text="TEAMS" icon={<PeopleIcon fontSize="large"/>}/>
            <SideBarItem text="GITHUB" icon={<GitHubIcon fontSize="large"/>}/>
        </Card>
    );
}