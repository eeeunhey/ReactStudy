import { use, useState } from "react";
import "./App.css";
import Box from "./component/Box";
import ScoreCard from "./component/ScoreCard";

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
    name: "Paper",
    img: "/img/Paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let resultValue = judgement(choice[userChoice], computerChoice);
    setResult(resultValue);
    scoreCount(resultValue);
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    //console.log("item array",itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    //console.log("random value", randomItem);
    let final = itemArray[randomItem];
    //console.log("final", final);
    return choice[final];
  };

  const judgement = (user, computer) => {
    console.log("user", user);
    console.log("computer", computer);

    //user === computer tie
    // user === "rock", computer === "scissors"  user win
    // user === "rock", computer === "paper"  user lose
    // user === "scissors", computer === "rock"  user lose
    // user === "scissors", computer === "paper"  user win
    // user === "paper", computer === "scissors"  user lose
    // user === "paper", computer === "rock"  user win

    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "WIN" : "LOSE";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "WIN" : "LOSE";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "WIN" : "LOSE";
  };

  const scoreCount = (result) => {
    // if(result === "WIN") setUserScore(result +1);
    if (result === "WIN") setUserScore((count) => count + 1);
    if (result === "LOSE") setComputerScore((count) => count + 1);
  };

  const resetScore = () => {
    setUserScore(0);
    setComputerScore(0);
    setComputerSelect(null);
    setUserSelect(null);
    setResult("");
  };

  // const play = (userChoice) =>{
  //   console.log("선택됨", userChoice);
  // }

  return (
    <div className="rps">
      <div className="rps_header">
        <h1>Rock Paper Scissors GAME ✊🖐✌</h1>
      </div>

      <section className="rps_score">
        <ScoreCard label="PLAYER" score={userScore} />
        <div className="vs">VS</div>
        <ScoreCard label="COMPUTER" score={computerScore} />
        {/* <div className="score-card">
          <span className="label">PLAYER</span>
          <strong className="score">{userScore}</strong>
        </div>

        <div className="score-card">
          <span className="label">COMPUTER</span>
          <strong className="score">{computerScore}</strong>
        </div> */}
      </section>
      <section className="rps_choices">
        <Box title="PLAYER" item={userSelect} result={result} />
        <Box
          title="COMPUTER"
          item={computerSelect}
          result={
            !result
              ? ""
              : result === "WIN"
              ? "LOSE"
              : result === "LOSE"
              ? "WIN"
              : "TIE"
          }
        />
      </section>
      <section className="rps_buttons">
        <button className="icon-btn brown" onClick={() => play("rock")}>
          ✊
        </button>
        <button className="icon-btn blue" onClick={() => play("paper")}>
          🖐
        </button>
        <button className="icon-btn orange" onClick={() => play("scissors")}>
          ✌
        </button>
      </section>
            <div className="rps_buttons">
        <button className="pill-btn" onClick={resetScore}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
