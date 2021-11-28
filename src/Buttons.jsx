import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function QuizButtons(props) {
  let scrollIcon = <i className="fas fa-arrow-up ml-2"></i>;
  if (props.scrollText === " למטה ") {
    scrollIcon = <i className="fas fa-arrow-down"></i>;
  }

  return (
    <>
      <Button className="bottons" onClick={props.checkQuiz}>
        <i className="fas fa-clipboard-check ml-2"></i>
        <strong style={{margin:"5px"}}>  בדיקה  </strong> 
      </Button>
      
      <Button  className="bottons" onClick={props.getQuestions}>
        <i className="fas fa-retweet ml-2"></i>
        <strong style={{margin:"5px"}}>  החלף שאלות </strong> 
      </Button>
      
      <Button className="bottons" 
          onClick={() =>
            window.scrollTo({
              top: props.scrollAxis,
              left: 0,
              behavior: "smooth",
            })
          }
        >
        {scrollIcon}
        {props.scrollText}
      </Button>
      
      <Link to="/">
          <Button className="bottons">
              <i className="fas fa-home ml-2"></i>
              <strong style={{margin:"5px"}}> דף הבית </strong>
          </Button>
      </Link> 
                
    </>
  );
  
} 
 export default QuizButtons; 
