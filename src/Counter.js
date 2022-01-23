import {Component} from "react";

class Counter extends Component {

    // 생성자메서드로 state설정
    constructor(props){
        super(props); // 클래스컴포넌트의 생성자메서드에서 반드시 호출(React.Component.md 메모참고)

        // state의 초기값 설정 : 반드시 {객체}형식으로
        // 직접 할당할 수 있는 곳은 생성자 뿐, 생성자에서 할당, 생성자 밖에서this.setState로 사용한다.
        this.state = {
            number:0
        };
    }


    // rneder함수안에서 return 엘리먼트
    render() {
        const {number} = this.state; // 클래스컴포넌트에서 state조회 : 생성자 밖에서 this.state로 조회

        return(
            <div>
                <h1>{number}</h1>
                <button
                // 화살표함수로 onClick 이벤트 바인딩
                onClick={
                    ()=> {
                       this.setState({ number : number+1 }); // this.setState로 새로운 값 set
                                                                   // 클래스컴포넌트에서 state사용 : 생성자 밖에서 this.setState로 사용
                    }
                }
                >+1</button>
            </div>
        );
    }
}

export default Counter;