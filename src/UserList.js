import React from "react";

function User({user, onRemove}){
    return (
        <div>
            <b style={{
                cursor: 'pointer',
                color:user.active ? 'green' : 'black'
            }}>{user.username}</b> <span>({user.email})</span>
            <button onClick={()=> onRemove(user.id)}>삭제</button>
            {/* 고유값인 user.id를 이용해 삭제한다.*/}
        </div>
    );
}

function UserList({users, onRemove}){
    
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}
export default UserList;