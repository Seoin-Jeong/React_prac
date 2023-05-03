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

const onRemove = id =>{
  //user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
  // = user.id 가 id인 것을 제거함
  setUsers(users.filter(user => user.id !== id));

};

const onToggle = id => {
  setUsers(
    //user.map(user=>user.id === id?{...user, active: !user.active } : user)
    //user.id가 id랑 같을 때, 기존 user 받아오고 active는 user.active와 반대로 설정?
    );
};
return (
  <>
  <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
  <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
  </>
);
}
export default App;