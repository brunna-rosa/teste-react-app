import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, PageBody } from "./AppStyled";
import Header from "./components/Header"; 

// Verificação de Login
// import PrivateRoute from './components/PrivateRoute';

// Páginas
import HomeScreen from './pages/HomeScreen';
import FormScreen from './pages/FormScreen';
import ToDoScreen from './pages/ToDoScreen';
import GithubScreen from './pages/GithubScreen';
 

export default function App() {

    return (
        <BrowserRouter>
            <Container> 
                
                <Header /> 
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route> 
                        <Route path="/form">
                            <FormScreen />
                        </Route>
                        <Route path="/todo">
                            <ToDoScreen />
                        </Route>
                        <Route path="#">
                            <GithubScreen />
                        </Route>
                    </Switch>
                </PageBody>          

            </Container>
        </BrowserRouter>
    );
} 