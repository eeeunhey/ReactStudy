const ScoreCard = (props) => {
  return (
    <div className="score-card">
      <span className="label">{props.label}</span>
      <strong className="score">{props.score}</strong>
    </div>
  );
};

export default ScoreCard;
