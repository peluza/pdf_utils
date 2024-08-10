"use client"
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function SplitComponents() {
  const [splitFiles, setSplitFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        try {
          const formData = new FormData();
          formData.append('pdf_file', selectedFile);

          const response = await fetch('http://localhost:3002/split-pdf/', { 
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const zipBlob = await response.blob();
            const zipUrl = URL.createObjectURL(zipBlob);
            setSplitFiles([zipUrl]); 
          } else {
            console.error('Error splitting PDF:', response.statusText);
          }
        } catch (error) {
          console.error('Error splitting PDF:', error);
        }
      } else {
        console.error('Invalid file type. Please select a PDF file.');
      }
    } else {
      console.log('Please select a PDF file.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Split PDF</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFile">
            <Form.Label>Select PDF File</Form.Label>
            <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" disabled={!selectedFile}>
          Split
        </Button>
      </Form>

      {splitFiles.length > 0 && (
        <div>
          <h3>Split Files:</h3>
          <ul>
            {splitFiles.map((fileUrl, index) => (
              <li key={index}>
                <a href={fileUrl} download={`split-file-${index + 1}.zip`}>
                  Download File {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
