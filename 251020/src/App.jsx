import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

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

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }

  // const play = (userChoice) =>{
  //   console.log("선택됨", userChoice);
  // }

  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect}/>
        <Box title="COMPUTER" />
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")} >보</button>
      </div>
    </div>
  );
}

export default App;
