import React from 'react';
import Task from './Task'

const TaskCard = ({task, markComplete, delTask}) => {
    return (
        <div>
            {task.map((task, position) => {
                return (
                    <Task 
                        taskPos = {position}
                        task = {task}
                        key = {position}
                        markComplete = {markComplete}
                        delTask = {delTask}
                    />
                );
            })}
            
        </div>
    );
}

export default TaskCard;
