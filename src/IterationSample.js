const IterationSample = () => {
    const names = ['눈사람','얼음','눈','바람'];

    // arr.map(callBack [,thisArg]);
    // map(
    //  새로운배열요소 생성하는콜백함수(현재처리중인요소, 현재요소의index, 현재요소의원본array), thisArg(필요시this바인딩)
    // );
    const nameList = names.map(name => <li>{name}</li>);

    return <ul>{nameList}</ul>;
};

export default IterationSample;