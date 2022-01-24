import {useState} from "react";

// 하나의 함수형 컴포넌트에서 useState 여러번 사용하기
const SaySaySay = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('하이루');
    const onClickLeave = () => setMessage('바이루');

    const [color, setColor] = useState('black');

    return(
        <>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{color:'red'}} onClick={() => {setColor('red')}}>RED</button>
            <button style={{color:'purple'}} onClick={() => {setColor('purple')}}>PURPLE</button>
            <button style={{color:'blue'}} onClick={() => {setColor('blue')}}>BLUE</button>
        </>
    );
};

export default SaySaySay;