import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./css/Card.css";
import "./css/EventDetail.css";
import SingleQuestion from "../components/Question"
import { useState } from "react";
import data from "../components/data"
export default function EventDetail() {
  const [questions, setQuestions] = useState(data)
  return (
    <div className='cardContainer'>
    <div className='box'>
      <div className='specialCard'>
    <Card >
      <Card.Body>
        <Card.Title>New Service Offerings for SAP Customer Data Solutions</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item className='black-1'>Host Time: 2022-10-11</ListGroup.Item>
        <ListGroup.Item className='black-2'>Location: Online</ListGroup.Item>
        <ListGroup.Item className='black-2'>Host: vincent</ListGroup.Item>
        <ListGroup.Item>Description: Please join us for a review of Service Offerings for SAP Customer Data Cloud and SAP Customer Data Platform.</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    </div>
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
  )
}
