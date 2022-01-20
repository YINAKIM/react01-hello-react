import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
    //const { name, children } = props; //  비구조화할당으로 name이라는 상수에 name값이 있고, children이라는 상수에 children값이 있다.
    return (
        <div>
            Hi, 내 이름은 {name}다. <br />
            children값은 {children}<br />
            이다.
            <hr />
            표현식안에 props. 을안쓰고 prop명으로 쓸 수 있다.
        </div>
    );
};

MyComponent.defaultProps={
    name:"이나킴"
};

MyComponent.propTypes={
    name:PropTypes.string  // name값은 무조건 string형으로 전달해야 한다.
};
export default MyComponent;