const IterationSample = () => {
    const names = ['눈사람','얼음','눈','바람'];

    // arr.map(callBack [,thisArg]);
    // map(
    //  새로운배열요소 생성하는콜백함수(현재처리중인요소, 현재요소의index, 현재요소의원본array), thisArg(필요시this바인딩)
    // );
    const nameList = names.map(  (name,index) => <li key={index}>{name}</li> );

    /* key가 없이도 렌더링은 된다. 그러나 있으면 더 빠르게 렌더링할 수 있다.
       ( 브라우저 콘솔에서 Warning: Each child in a list should have a unique "key" prop. )
       - key가 없으면 ?? VDOM을 비교하는 과정에서 리스트를 순차적으로 비교, 변화감지 (약간 DB에서 풀스캔..양이 많을수록 인덱스스캔보다 느리다)
       - key가 있으면 ?? 이 key값을 사용하여 어떤변화가 일어났는지 더욱 빠르게 감지  (약간 DB에서 인덱스캔..양이 많을수록 풀스캔보다 빠르다)
    */
    return <ul>{nameList}</ul>;
};

export default IterationSample;