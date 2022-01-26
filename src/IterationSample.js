import { useState } from "react";

const IterationSample = () => {
    //useState에 initalState로 "객체가 요소인 배열"을 준다.
    const [names,setNames] = useState([
        { id:1, text:'눈사람'},
        { id:2, text:'얼음'},
        { id:3, text:'눈'},
        { id:4, text:'바람'}
    ]);

    const [inputText,setInputText] = useState('');
    const [nextId,setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        setNextId(nextId+1);    // id부여(key값)
        setNames(nextNames);          // names값 업데이트
        setInputText('');       // input clear
        debugger;

    };

    const nameList = names.map( name => <li key={name.id}>{name.text}</li> );


    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <hr />
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;