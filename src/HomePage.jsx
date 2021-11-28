import React from "react";
import { Link } from "react-router-dom";
import './App.css';


function HomePage(props){

      function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }

    return(

        <div className="home">
            <h1>מבחן תיאוריה אונליין</h1>
            
            <section id="logo">

                <img src=".//logo.png" width="100px" height="100px"></img> 
                <p id="welcome"> 
                 <h2>ברוכים הבאים לאתר מבחן תיאוריה </h2>
                 באתר זה ניתן לתרגל שאלות ממבחן התיאוריה הרישמי של משרד התחבורה     
                </p>
    
            </section>

            <button id="buttonStart" onClick="">
                <Link to="/quiz"> התחל מבחן </Link>
            </button>

            <details>
                <summary>  למידע נוסף  <i class='fas fa-info-circle'></i></summary>
                <p>האתר נבנה במסגרת פרוייקט ראשון בReact JS.<br></br>
                האתר מדמה מבחן תיאוריה עם שאלות מהמאגר הרישמי של משרד התחבורה.
                <br></br>המבחן כולל 10 שאלות ללא הגבלת זמן וניתן בכל שלב לבדוק את התשובות<br></br>
                <br></br>  <a id="git" href="https://github.com/NeriyaZudi/Theory-Quiz-Recat-App" target="_blank">
                     github </a>  כאן ניתן לצפות בקוד המקור <br></br>
                </p>
            </details>
 
            <img src=".//symbolsPic.jpg" id="symbol" ></img> 

         </div>   
    );
}

export default HomePage;