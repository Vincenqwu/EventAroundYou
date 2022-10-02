import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./css/Card.css";

export default function EventDetail() {
  return (
    <Card className='specialCard'>
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
  )
}
