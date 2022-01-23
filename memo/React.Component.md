
### 클래스형 컴포넌트의 생성자메서드 사용 

## super(props) 

* 클래스형 컴포넌트의 constructor(props)메서드에서는
  반드시 super(props) 를 호출해야 한다.
* 왜?   
> super(props)호출한다는건?    
> 해당 클래스컴포넌트가 exgtends하는 React.Component의 생성자 함수를 호출하는 것

---
* React 컴포넌트의 생성자는 해당 컴포넌트가 마운트되기 전에 호출됩니다.(클래스컴포넌트 lifeCycle참고) 
* React.Component를 상속한 컴포넌트의 생성자를 구현할 때에는 다른 구문에 앞서 super(props)를 호출해야 합니다. 그렇지 않으면 this.props가 생성자 내에서 정의되지 않아 버그로 이어질 수 있습니다.
---

## constructor(props) 메서드
#### React에서 생성자의 두 가지 목적 

>1. this.state에 객체를 할당하여 지역 state를 초기화
>2. 인스턴스에 이벤트 처리 메서드를 바인딩

* constructor() 내부에서 setState()를 호출하면 안됨. 왜 ?    
  생성자는 this.state를 직접 할당할 수 있는 유일한 곳이기 때문.

* 컴포넌트에 지역 state가 필요하다면, 생성자 내에서 this.state에 초기 state 값을 할당하면 됨 
* 그 외의 메서드에서는 this.setState()를 사용해야 한다.

```

```