import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ErrorPage(){
    return(
      <div className="error_container">
         <Link to="/">
          <Button id="return_home">
              <i className="fas fa-home ml-2"></i>
              <strong style={{margin:"5px"}}> דף הבית </strong>
          </Button>
        </Link> 
        <h1> 404 הדף  המבוקש לא נמצא</h1>
        <img src=".//404.jpg"></img> 
      </div>
    
    );
}
export default ErrorPage;
