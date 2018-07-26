# ReactJS_NC
NomadCoders에서 배우는 ReactJS 학습창이다. 
`create-react-app` 을 통해서 진행.

### 시작 방법
`movie_app` 디렉토리에서 `yarn start

### 일반 html이랑 다른점.
1. div의 class -> className
2. img src = {logo} , logo는 `import logo from './logo.svg';` 이렇게 정의.

### 동작 방식.
모든 `js` 파일의 내용을 `/public` 의 `index.html` 에 넣고 render.  

`ReactDOM.render(<App />, document.getElementById('root'));
--> ReactDOM이 <App>의 react를 그리고, index.html의 root div 에, 

### React vs ReactDOM?
`react` 는 ui라이브러리. `react dom`은 리액트를 출력하는 것. 

### big issue
```javascript
componentWillMount()
componentWillReceiveProps()
componentWillUpdate()
```

위 3개의 `LifeCycle method` 들은 React17 에서 **사용권장하지 않음** 상태.(update 필요.)  
`UNSAFE_ prefix` 로 남는다고... 

### React16 은 정말 멋지다. (강조 매우강조)
[Return Type과 Portals 간단 정리 ](https://github.com/SoYoung210/ReactJS_NC/issues/16)
> 링크 클릭하기 귀찮은 분들이 보실수도 있어서 바로 적자면, `<Fragment>` 로 불필요한 `<div>` 태그 ~~남발~~ 을 줄일 수 있고, 
  포탈은 리액트로 접근할 수 있는 영역을 확장해주었다. 
