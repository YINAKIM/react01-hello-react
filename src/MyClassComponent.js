import { Component } from 'react';
import PropTypes from 'prop-types';


// 클래스형 컴포넌트에서 props사용하기
class MyClassComponent extends Component {
    render(){
        // props 선언(구조분해할당 적용)
        const { name, favoriteNumber, children } = this.props;

        return (
            <div>
                Hi, 내 이름은 {name}다. <br />
                children값은 {children}<br />
                이다.
                <br/>
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );

    }
}

MyClassComponent.defaultProps={
    name:"기본이름"
};

MyClassComponent.propTypes={
    name : PropTypes.string
    ,favoriteNumber : PropTypes.number.isRequired
};

export default MyClassComponent;