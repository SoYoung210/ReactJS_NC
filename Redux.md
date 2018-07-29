## 리덕스(Redux)란 무엇인가?

[Redux repo 분리](https://github.com/SoYoung210/Redux)

### 핵심
리덕스는 어플리케이션의 clinet쪽 `state` 를 관리하기 위한 거대한 event-loop 이다. 
> React의 state 에 대한 개념이 필요하다. (아래는 sample jsx code)

1.search-bar.js
```jsx
class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {term : ''}; //여기에 값을셋팅 하는건 placeholder 와는 다름. 실제 값임.
    }
}

// SearchBar 컴포넌트는 term 이라는 state값을 가진다. 
```
```
액션  == 이벤트
리듀서 == 이벤트에 대한 반응 
```
다음과 같이 두 가지로 살펴볼 수 있다.  

### Redux의 동기
Redux는 앱의 복잡성을 제어하기 위한 하나의 state 제어 수단이다.(일종의 방법론)
> 그도 그럴 것이, `search-bar.js` 에서 여러개의 state를 가지고.. 만약 컴포넌트가 조금만 많아지면 각 컴포넌트의 무수히 많은 state를 어떻게 관리할 것인가?   
> 리액트는 **state가 변할때 마다** 본인과 그 child component까지 re-render하는 작업이 일어나는데.. 이런점을 생각해보면 state변화를 예측하는 것은 어느정도 필수적이다.

### Redux의 원리

Application(이하 App) 전체에는 store라는 **하나의** state가 존재하는데, 이것이 App의 state를 총괄한다.  
이 store의 state는 그 자체를 직접 변형할 수 없고, 오직 **순수 함수** 인 `Reducer`로만 새로운 형ㅌ로 갈아치우는 것이 가능하다. (new 개념이라고 이해하면 됨.)  
  
Reducer는 `type` 과 `payloads` (속성이름은 그냥 예시 ) 를 속성으로 갖는 단순 객체인 `action` 이벤트가 발생했을 때에만 동작하며  
`action` 이벤트를 발생시키는 방법은 `dispatch` 라는 함수에 단순 객체인 `action`을 넣는 것으로 가능하게 한다.  

시간 순서대로 정리해보면 다음과 같다.  

```
dispatch(action) => 리듀서 작동 => store의 state변경 => 변경된 state가 state를 subscribe하고 있는 컴포넌트에 전달
```

### Redux의 장점

App의 state변화가 예측 가능해 진다.  
특정 액션 이벤트 발생에만 reducer가 작동하게 했기 때문에 store state가 변한 경우 그것이 정확히 `어떠한 액션 이벤트로 부터` 변경된 것인지 알 수 있다.  
  
또한, 정확히 어떤 액션 이벤트로 부터 변경된 것인지 알기 때문에 `Time travel debugging` 이 가능해 진다.  
요약 --> 이제까지 store state가 변화해온 과정을 마치 뒤로가기 버튼이 있는 것처럼 하나하나 확인해 볼 수 있다.  
  
그리고, 리듀서가 **순수함수**(외부에 영향을 끼치지 않는 함수 ex: api calling이 없는 함수) 이기 때문에 test코드를 짤 수 있다는 장점도 존재 
(이 부분은 나는 와닿지 않는다. ~~사용해볼일이 아직까지..까마득해서 ?~~)

### Redux와 MiddleWare
> 이 부분은 추후에 업데이트 예정 . 


[참고_출처](https://voidsatisfaction.github.io/2017/02/24/what-is-redux/)
