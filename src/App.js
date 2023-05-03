import React, {useRef, useState} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";


function App() {
  const [inputs, setInputs] = useState({
    username :'',
    email:''
  });
  const {username, email} = inputs;
  const onChange = e=>{
    const{name,value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };
  const [users, setUsers] =useState([
    {
        id: 1,
        username: '가',
        email: '1@gmail.com'
      },
      {
        id: 2,
        username: '나',
        email: '2@gmail.com'
      },
      {
        id: 3,
        username: '다',
        email: '3@gmail.com'
      }
]);
const nextId = useRef(4);
//다음 id값인 4를 넣어준다
const onCreate = () => {
  const user = {
    id : nextId.current,
    username,
    email
  };
  setUsers(users.concat(user));

  setInputs({
    username:'',
    email:''
  });
  nextId.current += 1;
};
return (
  <>
  <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
  <UserList users={users} />
  </>
)
}
export default App;