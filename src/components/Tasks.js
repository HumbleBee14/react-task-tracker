// import React from 'react'

// import { useState } from 'react'

import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        // <h3 key={task.id}>{task.text}</h3>
        // Instead of directly using tasks data over here, we are now creating Task comoponent for each
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
