import React, { useState, useEffect} from 'react';
import InputStyle from '../../components/InputStyle';
import Container from '@material-ui/core/Container';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    
}));
  
export default function ToDoScreen(){
  const[list, setList] = useState([]);
  const classes = useStyles();

  useEffect(()=>{
    setList([
      {title:'Tarefa 01', done:false},
      {title:'Tarefa 02', done:false},
      {title:'Tarefa 03', done:true},
    ]);

  }, []);

  // Adiciona tarefa
  function addAction(newItem) {
    let newList = [ ...list ];
    newList.push( {title:newItem, done:false} );

    setList(newList);
  }

  // Remove tarefa
  function removeAction(index) {
    let newList = [ ...list ];
    newList.splice(index, 1);

    setList(newList);
  }

  // Finaliza tarefa
  function handleToggleDone(index) {
    let newList = [ ...list ];
    newList[index].done = !newList[index].done;

    setList(newList);
  }

  return(
    <Container>
        <h1>Todo App</h1>
        <h2>App para gerenciamento de tarefas do dia a dia</h2>
        
        <List subheader="Lista de tarefas" className={classes.root}>
            {list.map((item, index)=>(
                <ListItem 
                  button 
                  key={index} 
                  onClick={()=>handleToggleDone(index)}
                  style={{ textDecoration : item.done ? 'line-through' : 'none' }} 
                >                         
                    <ListItemIcon>
                        {item.done &&
                            <ClearIcon />
                        }
                        {!item.done &&
                            <CheckIcon />
                        }
                    </ListItemIcon>
                    <ListItemText 
                        primary={item.title}
                    />
                    <ListItemSecondaryAction onClick={()=>removeAction(index)}>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon color="secondary" />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>                
            ))}
        </List>

        <InputStyle
            placeholder="Qual é a nova tarefa?"
            onEnter={addAction}
        />
    </Container>
  );
}