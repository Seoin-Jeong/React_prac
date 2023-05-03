import React, {useCallback, useRef, useState} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const initialState ={
  inputs:{
    username:'',
    email:''
  },
  user:[
    {
      id: 1,
      username: '가',
      email: '1@gmail.com'
      //active : true
    },   
    {
      id: 2,
      username: '나',
      email: '2@gmail.com'
      //active : false
    },
    {
      id: 3,
      username: '다',
      email: '3@gmail.com'
     //active: false
    }
  ]   
};
function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
    return {
      ...state,
      inputs:{
        ...state.inputs,
        [action.name]:action.value
      }
    };
    default: return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {user} = state;
  const {username, email} = state.inputs;

  const onChange = useCallback( e=> {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  },[]);

  
return (
  <>
  <CreateUser username={username} email={email} onChange={onChange} />
  <UserList users={users} />
  </>
);
}
export default App;