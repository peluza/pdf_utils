"use client"
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function MergeComponents() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Merge PDF</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFile">
            <Form.Label>Select PDF Files</Form.Label>
            <Form.Control type="file" accept=".pdf" multiple/>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Merge
        </Button>
      </Form>
    </div>
  );
}