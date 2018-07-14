# ReactJS_NC
NomadCoders에서 배우는 ReactJS 학습창이다. 
`create-react-app` 을 통해서 진행.

### 일반 html이랑 다른점.
1. div의 class -> className
2. img src = {logo} , logo는 `import logo from './logo.svg';` 이렇게 정의.

### 동작 방식.
모든 `js` 파일의 내용을 `/public` 의 `index.html` 에 넣고 render.  

`ReactDOM.render(<App />, document.getElementById('root'));
--> ReactDOM이 <App>의 react를 그리고, index.html의 root div 에, 

### React vs ReactDOM?
`react` 는 ui라이브러리. `react dom`은 리액트를 출력하는 것. 
