### 리액트 왜 쓸까
1. document.getElementById(") 태그를 일일이 지정해줘야 해서불편
2. js HTML 파일 따로놈
3. 모바일앱처럼 동작

### 환경설정하기
npm create vite@latest
npm i

### 리액트 기초 구성 이론 
1. 리액트 HTML 한페이지밖에 없다 JS가 그려준다
2. main.jsx document.getElementById('root')
 html에 있는걸 그려준다
3. APP.jsx js에 html을 반환 이게 컴포넌트이다
4. 컴포넌트는 항상 대문자로 시작한다
5. import 해서 태그처럼 사용할 수 있다
6. App.css 기본 스타일 제공


### 컴포넌트 만들기
![alt text](image.png)
이런식으로 컴포넌트를 적용하면 유지보수할 때 편하다
1. box 만들기 css 적용
2. 하나의 태그로 쌓여있어야 한다 jsx 하나로 묶어서 반환
3. component/Box.js 
4. rafce 기본 셋팅
5. Box 컴포넌트 만듬
```js
    <div className="box">
    Box1
    <p>리사</p>
    </div>
```
6. <Box/> 적용할 수 있다

### props 함수 매개변수 적용하기
1. <Box name="속성값을 넣어준다"/>
2. Box = (props) => { .. } 
3. console.log props 출력하면 속성값이 들어있다
4. <p>{props.name}</p> 객체속성값을 가져와서 넣어준다
5. <Box name="속성값을 넣어준다" num={1}/>
6. Box{props.num}


### 버튼이벤트 발생하면 증가
1. <button> 클릭 </button>
2. 숫자가 증가하면 반영되야하니깐 다이나믹한 값이 들어간다
    <div>{counter}</div>
3. 카운터 변수를 만든다
    let counter = 0;
4. 버튼에 이벤트를 적용한다 increase
    <button onClick={increase}>
5. 이벤트 발생시 값을 바꿔주는 increase 함수를 만든다
    웹으로 보니깐 갑싱 반영이 안된다 
    const increase = () => {
        counter = counter + 1
    }
6. 콘솔에서 확인하면 반영이 된다 왜 그럴까
    -> state에만 반응한다 일반 변수는 ui 반영을 안한다

### State를 적용해보자
1. import {useState} from "react"
2. const [counter2, setConter2] = useState(0 "초기값");
3. const ["초기값", "초기값 변경함수"]
4. state는 변수같은 형태로 값이 안변함 무조건 함수로만 값이 변한다
5. 
```jsx
<div>state:{counter2}</div>

```
6. 
```jsx
const increase = () => {
    setCounter2(counter2+1);
}

```
7. state 는 UI 렌더링 하는데 시간이 걸림 비동기적 
increase 함수가 다 끝나야 실행된다
그래서 counter2 값이 바로 안변함 
변수는 리렌더링 되면 초기화가 되어버림...
1. 버튼 클릭 -> 2. counter+1 -> setState 호출 -> 콘솔 실행 (변수는 1로 state는 아직 안변한 상태)
함수 끝 -> 다시 그려짐 초기화
변수는 다시 그리면 초기화...
스테이트는 비동기라 함수끝나야 반영


