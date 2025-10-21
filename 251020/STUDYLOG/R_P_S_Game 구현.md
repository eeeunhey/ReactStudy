1. Box 컴포넌트 만들기
2. Box (타이틀 , 이미지, 승패 표시하기)
3. app.css에서 스타일 지정하기
4. Box 태그에 스타일 넣기 
5. YOU /  Computer 값이 바뀌므로 Box 컴포넌트에 (props) 추가
6. Box title="" 가져오기 위해 porps.title로 바꿔준다
    기존 <h1>타이틀</h1>  ->  <h1>{props.title}</h1>

### 버튼 클릭 시 이벤트 발생 게임 로직 만들기
1. const choice = {} 객체를 만든다
2. Rock, Scissors, Paper 각각 name, img를 지정한다

```jsx

  const choice = {
    rock: {
      name: "Rock",
      img: "/img/Rock.png",
    },
    scissors: {
      name: "Scissors",
      img: "/img/Scissors.png",
    },
    paper: {
      name:"Paper",
      img:"/img/Paper.png",
    },
  }

```

3. 버튼에 클릭 이벤트를 주자 
<button onClick={play}>

4. return 위 const play = () => {} 추가한다
5. console.log ("선택됨") => 콘솔확인시 버튼 선택을 확인
6. 뭐가 선택됬는지 모름 -> 매개변수값을 지정하자
```jsx
 <button  onClick={play("scissors")}>가위</button>
```
7. 선택한 값을 play에 반영하기 위해 const play = (userChoice) => { } 추가한다
8. 이미 실행되어 프린트 되어 버린다.. 왜 그럴까
```jsx
  const play = (userChoice) =>{
    console.log("선택됨", userChoice);

```
9. 리액트는 실행될 때 UI렌더할 떄 아래 코드는 그리는 동시에 실행시켜 버린다
<button onClick={play("scissors")}>가위</button>

10. 그래서 콜백함수 형태로 넣어줘야한다
<button onClick={() => play("scissors")}>가위</button>

### 유저가 선택한 아이템 보여주기
1. 유저가 선택한 값을 이제 UI로 띄워보자
2. state를 만들어보자
3.   const [userSelect, setUserSelect] = useState(null); 
4. state 변할 때마다 ui가 변할거다
5. useState로 값을 바꿔준다
6. const play = (userChoice) => {} 
7. userSelct = choice[userChoice] 값을 들고온다 -> 안된다
8. setUserSelct(choice[userChoice]) 형태로 들고온다
9. Box title="YOU" item={userSelect} 
9. Box 컴포넌트에 값을 반영해보자
10.    console.log("props",props); 값이 잘들오는지 확인 -> 잘들어온다 반영해보자
11.       <img className = 'item-img' src={props.item.img}/> 근데 에러남
12. useSlect 유저가 선택하기 전에 널 상태이다가 선택하면 값이 들어옴
13. 처음에 그려야 하는데 널상태라서 에러를 발생 -> src={props.item && props.item.img} 수정하면 잘나옴
14. 맨 처음 값 셋팅이 안되어있을경우 가드를 쓴다 null - false 리턴한다
15. 

