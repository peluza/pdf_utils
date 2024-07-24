"use client"
import useCurrentSection from '@/hooks/Conan/useCurrentSection';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ContainComponents() {
  const [currentSection, setCurrentSection] = useCurrentSection();


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Merge PDF</Card.Title>
              <Card.Text>
                Combine multiple PDF files into one.
              </Card.Text>
              <Button variant="primary" onClick={setCurrentSection.bind('merge')}>Merge</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Split PDF</Card.Title>
              <Card.Text>
                Divide a PDF file into multiple files.
              </Card.Text>
              <Button variant="primary" onClick={setCurrentSection.bind('split')}>Split</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}