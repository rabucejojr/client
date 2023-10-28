import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { Delete, Update } from "@mui/icons-material";

import "../index.css";
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const handleUpdateTask = (index) => {
    console.log("Update Here...");
  };

  return (
    <>
      <Grid container spacing={2} id="main">
        <Grid item xs={7} id="secondDiv">
          <Grid item xs={10}>
            <TextField
              id="inputs"
              label="New Task"
              variant="outlined"
              fullWidth
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button id="btn" variant="contained" onClick={handleAddTask}>
              Add Task
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={7} id="thirdDiv">
          <Grid item xs={12}>
            <List>
              {tasks.map((t, index) => (
                <ListItem key={index}>
                  <ListItemText primary={t} />
                  <Button color="error" onClick={() => handleUpdateTask(index)}>
                    <Update />
                  </Button>
                  <Button color="error" onClick={() => handleDeleteTask(index)}>
                    <Delete />
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Todo;
