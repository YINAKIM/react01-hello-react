## 함수형컴포넌트의 useState
```
const [state, setState] = useState(initialState);
```
* 상태유지값(state)과 그 값을 갱신하는 함수(setState)를 반환
* initialState : 첫번째 전달되는 인자, 최초렌더링될 때 반횐된 state(state)값과 같다.
* setState()는 새로운 state"값"을 받아서 컴포넌트를 리렌더링큐에 등록한다. 즉, "값"을 바꾼 state를 렌더링한다.
* useState로 상태값이 변할 때,    
  리렌더링될 때마다 useState의 return값의 첫번째값(위의 코드에서 배열 0번째요소인 state)은 
  항상 "최신state"가 된다. 