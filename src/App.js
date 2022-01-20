import MyComponent from './MyComponent';

const App = () => {
  {/* Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `MyComponent`, expected `string`. */}
  return <MyComponent name={3}>칠드런</MyComponent>;
};

export default App;
