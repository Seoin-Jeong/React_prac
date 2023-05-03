import React from "react";//react component

function Hello({color, name, isSpecial}) {
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            Hello {name}
        </div>
        
    )
}
Hello.defaultProps ={
    name : '이름없음'
}

export default Hello;