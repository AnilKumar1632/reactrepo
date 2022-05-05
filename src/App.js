import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
/* import {Greet} from './components/Greet'; */
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component{
  render(){
    return (
      <div className="App">
        <NameList />
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind />
        <FunctionClick></FunctionClick> */}
        {/* 
        <Counter />
        <Message />
        <Greet name='anil'>
          <p>Hello World</p>
        </Greet> 
        
        <Greet name='kumar'>
          <button>Submit</button>
          </Greet>
        <Greet name='reddy' />
        <Welcome name='Anil'></Welcome> */}
      </div>
    );
  }  
}

export default App;
