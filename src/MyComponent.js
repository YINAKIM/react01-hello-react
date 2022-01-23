import PropTypes from 'prop-types';

// 함수형 컴포넌트에서 props사용하기
const MyComponent = ({ name,favoriteNumber,children }) => {  //  props선언(구조분해할당 적용)
    return (
        <div>
            Hi, 내 이름은 {name}다. <br />
            children값은 {children}<br />
            이다.
            <br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};

MyComponent.defaultProps={
    name:"기본이름"
};

MyComponent.propTypes={
     name : PropTypes.string
    ,favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;