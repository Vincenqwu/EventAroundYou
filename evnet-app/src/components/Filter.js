import React from "react";
import "./css/Filter.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Filter() {
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button className="me-3" variant="secondary">Vancouver</Button>
        <Button className="button me-3" variant="secondary" bsClass='custom-class'>
          Los Angeles
        </Button>
        <Button className="button me-3" variant="secondary">
          Toronto
        </Button>
        <Button className="button me-3" variant="secondary">
          Tokyo
        </Button>
        <Button className="button me-3" variant="secondary">
          Shanghai
        </Button>
        <Button className="button me-3" variant="secondary">
          Singapore
        </Button>
        <Button className="button me-3" variant="secondary">
          India
        </Button>
        <Button className="button me-3" variant="secondary">
          Paris
        </Button>
        <Button className="button me-3" variant="secondary">
          London
        </Button>
      </ButtonGroup>
    </div>
  );
}
