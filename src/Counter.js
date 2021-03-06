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
                onClick={
                    ()=> {
                        this.setState(
                            // 첫번째인자 state
                            {number: number+1}

                            // 두번째인자 callback
                            ,()=>{
                                console.log('방금setState가 호출되었다.');
                                console.log(this.state);
                                console.log(this.state.number);
                            }
                        );
                    }
                }
                >+1</button>
            </div>
        );
    }
}

export default Counter;