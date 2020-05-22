import React, {useState} from 'react';
import { FormControl, Container, TextField, Button } from '@material-ui/core';
import { AddCircleOutline } from "@material-ui/icons";

const TaskInput = ({addTask}) => {

    const [text, setText] = useState('');

    const createTask = (e) => {
      e.preventDefault();
      addTask(text);
      setText('');
      e.target.reset();
    };



    return (
        <Container maxWidth = 'sm'>
            <form onSubmit = {createTask}>
                <FormControl fullWidth = {true} marginTop = 'normal'>
                    <TextField 
                        label = 'New task' 
                        variant = 'filled'
                        color = 'secondary'
                        required = {true} 
                        style = {{marginTop: 10}}
                        onChange = {e => setText(e.target.value)}
                    />
                    <Button 
                        variant = 'contained' 
                        color = 'secondary' 
                        type = 'submit' 
                        style = {{marginTop: 5}}
                    >
                        <AddCircleOutline />        
                            ADD TASK
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TaskInput;
