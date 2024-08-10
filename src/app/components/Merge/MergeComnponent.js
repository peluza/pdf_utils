"use client";
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function MergeComponents() {
  const [mergedPdfUrl, setMergedPdfUrl] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFiles.length > 0) {
      try {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
          formData.append('pdf_files', file); 
        });

        const response = await fetch('http://127.0.0.1:3002/merge-pdf/', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const pdfBlob = await response.blob();
          const pdfUrl = URL.createObjectURL(pdfBlob);
          setMergedPdfUrl(pdfUrl);
        } else {
          console.error('Error merging PDFs:', response.statusText);
        }
      } catch (error) {
        console.error('Error merging PDFs:', error);
      }
    } else {
      console.log('Please select at least one PDF file.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Merge PDF</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFile">
            <Form.Label>Select PDF Files</Form.Label>
            <Form.Control type="file" accept=".pdf" multiple onChange={handleFileChange} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" disabled={selectedFiles.length === 0}>
          Merge
        </Button>
      </Form>

      {mergedPdfUrl && (
        <div>
          <h3>Merged PDF:</h3>
          <a href={mergedPdfUrl} download="merged.pdf">
            Download Merged PDF
          </a>
        </div>
      )}
    </div>
  );
}
