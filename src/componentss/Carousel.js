import Carousel from "react-bootstrap/Carousel";
// import React, { useState, useEffect } from "react";
// import { db } from "../firebase.config";
// import Spinner from "./Spinner";
// import {
//   collection,
//   getDoc,
//   query,
//   orderBy,
//   limit,
//   getDocs,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
function UncontrolledExample() {
  return (
    <>
      <div className="slider" >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
              style={{height:"600px"}}
            />
            <Carousel.Caption>
              <h3>The Best Room in this Area </h3>
              <p>You can Rnet to stay solo or With Your Faimaly</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
              style={{height:"600px"}}
            />

            <Carousel.Caption>
              <h3>The Best Room in this Area </h3>
              <p>You can Rnet to stay solo or With Your Faimaly</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
              style={{height:"600px"}}
            />

            <Carousel.Caption>
              <h3>The Best Room in this Area </h3>
              <p>You can Rnet to stay solo or With Your Faimaly</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default UncontrolledExample;
