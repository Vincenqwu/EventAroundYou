import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import "./css/Card.css";
import "./css/EventDetail.css";
import SingleQuestion from "../components/Question";
import { useState } from "react";
import data from "../components/data";
import Button from "react-bootstrap/Button";
export default function EventDetail() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="cardContainer">
      <div className="box">
        <div className="specialCard">
          <Card>
            <Card.Body>
              <Card.Title>Succeeding in the new world of mobility</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="black-1">
                  Host Time: 2022-10-11 18:00PM
                </ListGroup.Item>
                <ListGroup.Item className="black-2">
                  Location: Online
                </ListGroup.Item>
                <ListGroup.Item className="black-2">
                  Company Branch: Vancouver
                </ListGroup.Item>
                <ListGroup.Item className="black-2">
                  Host: Vincent
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: Please join us for a review of Service Offerings
                  for SAP Customer Data Cloud and SAP Customer Data Platform.
                </ListGroup.Item>
                <ListGroup.Item className="black-2">
                  Event TimeZone: ET
                </ListGroup.Item>
                <ListGroup.Item className="black-2">
                  Your Time: 15:43PM
                </ListGroup.Item>
                <ListGroup.Item className="black-2">
                  People who are going to join: John Smith, Mary White
                </ListGroup.Item>
                <ListGroup.Item className="black-2">
                  People who Likes this event: Chris Evan
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Button className="btn btn-success">Join the Event</Button>
          <Button className="btn btn-warning">Add to my Calendar</Button>
          <Button className="btn btn-info">
            Share this event with your friend
          </Button>
          
          <Button className="btn btn-dark">Share via Twitter</Button>
          <div>
          <br/>
          <br/>
          <br/>
          <Card>
            <p><strong>Reviews:</strong></p>
            <hr />
            Meimei Li: I like this event a lot
            <br />
            Peter Lin: Just say yes to this event
          </Card>
          </div>
        </div>
        <div>
          <Button className="btn btn-success">Add review</Button>
          <Button className="btn btn-warning">Delete the review</Button>
        </div>
        <br/>
          <br/>
          <br/>
        <Card>
            <p>Ask a question to the event host:</p>
            <hr />
            question 1: what is the dress code?
            <br />
            Host Answer: You can dress whatever you want.

            <hr />
            question 2: can we bring family and friends?
            <br />
            Host Answer: Yes, family are welcomed!
          </Card>
        <div>
          <div className="event-container">
            <h3>Ideas and Gains from other Locations</h3>
            <section className="info">
              {questions.map((question) => (
                <SingleQuestion key={question.id} {...question} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
