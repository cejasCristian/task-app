import React from 'react';
import { Card, CardContent, Typography, Container, IconButton} from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';

const Task = ({task, markComplete, delTask}) => {

    let checkedStyle = {textDecoration: 'none'};

    if(task.completed) {
        checkedStyle.textDecoration = 'line-through solid red';
    }else{
        checkedStyle.textDecoration = 'none';
    }


    return (
        <Container>
            <Card
                fullWidth = {true}
                className = 'root'
                variant ='outlined'
                style = {{ marginTop: 35, background: 'rgba(256,256,256,0.7'}}
            >
                <CardContent>
                    <Typography 
                        variant = 'h5' 
                        component = 'h3' 
                        style = {checkedStyle}
                    >
                        <IconButton 
                            onClick = {markComplete.bind(this, task.pos)}
                        >
                            <Check style={{ color: 'green' }} />
                        </IconButton>
                        {task.title}
                        <IconButton 
                            style = {{ float: 'right'}} 
                            onClick = {delTask.bind(this, task.pos)}
                        >
                            <Delete style = {{ color: 'black' }} />
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Task;
