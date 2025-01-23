import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CalculatorCall = ({ show, onHide }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input); 
        setResult(evalResult);
        setInput('');
      } catch (error) {
        setResult('Math Error');
        setInput('');
      }
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Calculator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="calculator">
          <div className="screen">
            <input type="text" readOnly value={input} placeholder="0" className="form-control mb-2" />
            <input type="text" readOnly value={result} placeholder="Result" className="form-control mb-2" />
          </div>
          <div className="button-row">
            {['7', '8', '9', '/'].map((item) => (
              <Button variant="outline-dark" key={item} onClick={() => handleClick(item)}>
                {item}
              </Button>
            ))}
            {['4', '5', '6', '*'].map((item) => (
              <Button variant="outline-dark" key={item} onClick={() => handleClick(item)}>
                {item}
              </Button>
            ))}
            {['1', '2', '3', '-'].map((item) => (
              <Button variant="outline-dark" key={item} onClick={() => handleClick(item)}>
                {item}
              </Button>
            ))}
            <Button variant="outline-dark" onClick={() => handleClick('0')}>
              0
            </Button>
            <Button variant="outline-dark" onClick={() => handleClick('+')}>
              +
            </Button>
            <Button variant="outline-primary" onClick={() => handleClick('=')}>
              =
            </Button>
            <Button variant="outline-danger" onClick={() => handleClick('Clear')}>
              Clear
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CalculatorCall;
