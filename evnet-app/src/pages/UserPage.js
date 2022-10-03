import React from "react";
import "./css/FutureEvent.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/esm/Button";

export default function FutureEvent() {
  return (
    <div className="landing-page" id="Home-Page">
      <p>
        Your favorite events:
      </p>
      <Card className="card">
      <Card.Body>
        <Card.Title>New Service Offerings for SAP Customer Data Solutions</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item className='black-1'>Host Time: 2022-10-11</ListGroup.Item>
        <ListGroup.Item className='black-2'>Location: Online</ListGroup.Item>
        <ListGroup.Item className='black-2'>Host: vincent</ListGroup.Item>

      </ListGroup>
      </Card.Body>
    </Card>
      <p>
        Events that you are going to attend:
      </p>
      <Card className="card">
      <Card.Body>
        <Card.Title>New Service Offerings for SAP Customer Data Solutions</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item className='black-1'>Host Time: 2022-10-11</ListGroup.Item>
        <ListGroup.Item className='black-2'>Location: Online</ListGroup.Item>
        <ListGroup.Item className='black-2'>Host: vincent</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    <div>
      <Button>Create you own event</Button>
    </div>
    </div>
  );
}
