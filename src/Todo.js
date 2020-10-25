import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [input, setInput] = useState(props.todo.todo);

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h1>I am a modal</h1>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>

      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline ⏰"
          />
        </ListItem>
        <button onClick={handleOpen}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          DELETE ME
        </DeleteForeverIcon>
      </List>
    </>
  );
}

export default Todo;
