import React from "react";
import { Card } from "react-bootstrap";
import './App.css';

function QuestionBox(props){
  return (
    <Card
      style={{ width: "100%" }}
      key={props.questionIndex}
      id={`card:${props.questionIndex}`}
    >
      <Card.Body className="CardBody">
        
      <Card.Title id="title">
          שאלה {props.questionIndex + 1} : 
      </Card.Title>
        
      <Card.Title>{props.title}</Card.Title>

        <div onChange={props.onChange}>
          {[].slice.call(props.options).map((option, index) => {
            return (
              <p
                key={index}
                id={`p-question:${props.questionIndex}answer:${index}`}
              >
                <input
                  type="radio"
                  value={index}
                  name={props.questionIndex}
                  id={`input-question:${props.questionIndex}answer:${index}`}
                  className="ml-2"
                />
                <label
                  style={{ display: "inline" }}
                  htmlFor={`input-question:${props.questionIndex}answer:${index}`}
                >
                  {option.innerHTML.replace(/<\/?[^>]+(>|$)/g, "")}
                </label>
              </p>
            );
          })}
        </div>

        <div
          className="mb-3"
          dangerouslySetInnerHTML={{ __html: props.image }}
        ></div>
      </Card.Body>
    </Card>
  );
}

export default QuestionBox;