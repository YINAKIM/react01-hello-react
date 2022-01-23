import MyComponent from './MyComponent';
import MyClassComponent from "./MyClassComponent";

const App = () => {
  // 함수형 컴포넌트인 MyComponent
  // return <MyComponent name="React" favoriteNumber={100}>칠드런</MyComponent>;

  // 클래스형 컴포넌트인 MyClassComponent
  return <MyClassComponent name="마이클래스컴포넌트" favoriteNumber={300}></MyClassComponent>;
};

export default App;
