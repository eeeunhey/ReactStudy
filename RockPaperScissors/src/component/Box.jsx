import React from 'react'

const Box = (props) => {
   //console.log("props",props);
  return (
    <div className={'box'}>
      <h2 >{props.title}</h2>
      <img className = 'item-img' 
      src={props.item?.img ?? "/img/question_mark.png"}/>
      <h3 className={`result-text ${props.result}`}>{props.result}</h3>
      
    </div>
  )
}

export default Box