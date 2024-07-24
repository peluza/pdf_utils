"use client"
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function SplitComponents() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Split PDF</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFile">
            <Form.Label>Select PDF File</Form.Label>
            <Form.Control type="file" accept=".pdf" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Split
        </Button>
      </Form>
    </div>
  );
}