import React, {useEffect} from "react";

function User({user, onRemove, onToggle}){
    useEffect(()=>{
        console.log('component in');
        return () => {
            console.log('component out')
        };
    }, []);
    return (
        <div>
            <b style={{
                cursor: 'pointer',
                color:user.active ? 'green' : 'black'
            }}
                onClick={()=> onToggle(user.id)}
            >{user.username}</b> 
            &nbsp;
            <span>({user.email})</span>
            <button onClick={()=> onRemove(user.id)}>삭제</button>
            {/* 고유값인 user.id를 이용해 삭제/수정한다.*/}
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
    
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}
export default UserList;