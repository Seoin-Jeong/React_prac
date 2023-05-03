import React,{useState, useRef} from "react";

function InputSample(){
    const [inputs, setInputs] =useState({
       name: '',
       nickname:'' 
    });
    const nameInput = useRef();

    const {name, nickname} = inputs; 
    //비구조화 할당을 통해 값 추출
    const onChange=(e)=>{
        const {value, name} = e.target;
        console.log(e.target);
        // 먼저, e.target에서 name과 value를 추출
        setInputs({
            ...inputs, //...으로 기존의 input 객체를 복사한 뒤,
            [name]:value //name 키를 가진 값을 value로 설정
        }); 
    };
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
        //초기화 버튼을 누르면 포커스가 초기화 버튼에 남도록 한다.
    };

    return(
        <div>
            <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput}/>
            <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>

    );
}
export default InputSample;