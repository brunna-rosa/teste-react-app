import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom:"20px"
    },
 }));
  
export default function FormScreen(){

    const name = useSelector(state => state.user.name); 
    const age = useSelector(state => state.user.age);
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        dispatch({
            type: 'SET_NAME',
            payload:{
                name: e.target.value
            }
        }); 
    };

    const handleAgeChange = (e) => {
        dispatch({
            type: 'SET_AGE',
            payload:{
                age: e.target.value
            }
        }); 
    };
 
    return (
        <Container>
            <h1>Meu nome é {name}!</h1>
            <h1>Tenho {age} anos!</h1>
            
            <TextField 
                label="Nome" 
                value={name}
                id="outlined-basic" 
                variant="outlined"  
                onChange={handleNameChange} 
                fullWidth
                className={classes.textField}
            />

            <TextField 
                label="Idade"
                value={age}
                type="number" 
                id="outlined-basic" 
                variant="outlined" 
                onChange={handleAgeChange} 
                fullWidth
                className={classes.textField}
            />
        </Container>
    );
}
