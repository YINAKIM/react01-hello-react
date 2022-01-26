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

    const nameList = names.map(  name => <li key={name.id}>{name.text}</li> );
    return <ul>{nameList}</ul>;
};

export default IterationSample;