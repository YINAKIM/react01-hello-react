import {Component} from "react";

class Counter extends Component {

    // [방법1] 생성자메서드로 state 초기값 설정
   /* constructor(props){
        super(props); // 클래스컴포넌트의 생성자메서드에서 반드시 호출(React.Component.md 메모참고)

        // state의 초기값 설정 : 반드시 {객체}형식으로
        // 직접 할당할 수 있는 곳은 생성자 뿐, 생성자에서 할당, 생성자 밖에서this.setState로 사용한다.
        this.state = {
            number:0, fixedNumber:0
        };
    }
   */

    // [방법1] 생성자메서드로 state 초기값 설정
    state = {
        number:0, fixedNumber:0
    };

    // rneder함수안에서 return 엘리먼트
    render() {
        const {number,fixedNumber} = this.state; // 클래스컴포넌트에서 state조회 : 생성자 밖에서 this.state로 조회

        return(
            <div>
                <h1>바뀌는 state값 : {number}</h1>
                <h1>바뀌지않는 state값 : {fixedNumber}</h1>
                <button
                // 화살표함수로 onClick 이벤트 바인딩
                onClick={
                    // onClick안에 > 화살표함수안에 > this.setState() 여러개 정의 ---> 이렇게 하면 둘 다 적용된다. onClick에 바인딩 된 하나의 함수가 실행되는데 그 안에서 setState()를 여러번 할 뿐이라서
                    // 결과 : +2씩 증가한다.
                    ()=> {
                        // 첫번째 setState
                       this.setState((prevState, props) => {
                           // prevState:기존상태, props:현재 지니고 있는 props(생략가능)

                           return { // 업데이트 하고싶은 내용{}을 반환
                               number: prevState.number + 1
                           }
                       });

                       // 두번째 setState : 첫번때setState와 똑같이 동작하지만, 함수에서 객체를 바로 반환하는 형태의 코드
                       this.setState(prevState => ({
                           number: prevState.number + 1
                       }));
                    }
                }
                >+1</button>
            </div>
        );
    }
}

export default Counter;