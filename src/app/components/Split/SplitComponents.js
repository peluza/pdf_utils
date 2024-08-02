"use client"
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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
          formData.append('pdfFile', selectedFile);

          const response = await axios.post('http://localhost/api/split', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          setSplitFiles(response.data.splitFiles);
        } catch (error) {
          console.error('Error splitting PDF:', error);
        }
      } else {
        // Handle invalid file type
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
      {/* Display split files (if any) */}
      {splitFiles.length > 0 && (
        <div>
          <h3>Split Files:</h3>
          <ul>
            {splitFiles.map((file, index) => (
              <li key={index}>
                <a href={URL.createObjectURL(file)} download={`split-file-${index + 1}.pdf`}>
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
