import React, { useState , useEffect} from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';


import "./docus.css"
import { Cloudinary } from 'cloudinary-core';



const AdminDocumentPage = () => {
  const [open, setOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [pdfLink, setpdfLink] = useState(''); // New state for online link


  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
  
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setDocumentData({ ...documentData, pdfFile: file });
    }
  };


  const [documentData, setDocumentData] = useState({
    private: false,
    type: '',
    year: '',
    session: '',
    paper: '',
    subPaper: '',
    note: '',
    linkk: '',
    pdfFile: null, // Initialize with null

  });
  

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSaveDocument = () => {
    const newDocument = { ...documentData };
    // Handle PDF upload
    if (documentData.pdfFile) {
      // Upload the PDF file to the backend or storage service
      // Here, you can perform the necessary API call to upload the PDF
      // For demonstration purposes, we're just saving the file name
      newDocument.pdfFileName = documentData.pdfFile.name;
    }
    setDocuments([...documents, newDocument]);
  
    // Reset documentData
    setDocumentData({
      private: false,
      type: 'pdf',
      year: '',
      session: '',
      paper: '',
      subPaper: '',
      note: '',
      linkk: '',

      pdfFile: null,
    });
    setOpen(false);
  };
  
  useEffect(() => {
    // Fetch your documents from a backend API or storage here
    // Update the documents state with fetched data
  }, []);
  return (
    <div>
      <Button variant="contained" onClick={handleOpenModal}>
        Add Document
      </Button>
      <div className="document-details">
  {selectedCard !== null && (
    <div className="selected-card">
      {/* <p>Type: {documents[selectedCard].type}</p> */}
      <p>Year: {documents[selectedCard].year}</p>
      <p>Session: {documents[selectedCard].session}</p>
      <p>Paper: {documents[selectedCard].subPaper}</p>
      {documents[selectedCard].linkk && (
    <p>
      Link:{" "}
      <a href={documents[selectedCard].linkk} target="_blank" rel="noopener noreferrer">
        {documents[selectedCard].linkk}
      </a>
    </p>
  )}  
      {/* ... and so on for other fields */}
    </div>
  )}
</div>
      <div className="document-cards">
  {documents.map((document, index) => (
     <div
     key={index}
     className={`document-card ${selectedCard === index ? 'selected' : ''}`}
     onClick={() => setSelectedCard(index)}
   >
          {/* Render document details here */}
      {/* For example: */}
      <p>Type: {document.type}</p>
            <p>Year: {document.year}</p>
            <p>Session: {document.session}</p>
            {/* Display uploaded PDF if available */}
            {document.pdfFileName && (
        <p>
          PDF File:{' '}
          <a
            href={URL.createObjectURL(document.pdfFile)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {document.pdfFileName}
          </a>
              </p>
            )}
          </div>
  ))}
</div>




      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Add Document</DialogTitle>
        <DialogContent>
          <FormControlLabel
                control={<Checkbox
                  checked={documentData.private}
                  onChange={(e) => setDocumentData({ ...documentData, private: e.target.checked })}
                  color="primary" />}
                label="Private" />
          <FormControl fullWidth>
            <InputLabel>Document Type</InputLabel>
            
            <Select
              value={documentData.type}
              onChange={(e) => setDocumentData({ ...documentData, type: e.target.value })}
            >
              <MenuItem value="pdf">PDF</MenuItem>
              {/* Add other types */}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <TextField
              value={documentData.year}
              onChange={(e) => setDocumentData({ ...documentData, year: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Session</InputLabel>
            <Select
              value={documentData.session}
              onChange={(e) => setDocumentData({ ...documentData, session: e.target.value })}
            >
              <MenuItem value="May/June">May/June</MenuItem>
              <MenuItem value="October/November">October/November</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Paper</InputLabel>
            <Select
              value={documentData.paper}
              onChange={(e) => setDocumentData({ ...documentData, paper: e.target.value })}
            >
              <MenuItem value="old syllabus">Old Syllabus</MenuItem>
              <MenuItem value="new syllabus">New Syllabus</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
            </Select>
          </FormControl>
          {documentData.paper === 'old syllabus' && (
            <FormControl fullWidth>
              <InputLabel>Sub Paper (Old Syllabus)</InputLabel>
              <Select
                value={documentData.subPaper}
                onChange={(e) => setDocumentData({ ...documentData, subPaper: e.target.value })}
              >
                <MenuItem value="Paper 1">Paper 1</MenuItem>
                <MenuItem value="Paper 3">Paper 3</MenuItem>
                <MenuItem value="Paper 6">Paper 6</MenuItem>
                <MenuItem value="GradeBoundries">Grade Boundries</MenuItem>
              </Select>
            </FormControl>
          )}
          {documentData.paper === 'new syllabus' && (
            <><FormControl fullWidth>
              <InputLabel>Sub Paper (New Syllabus)</InputLabel>
              <Select
                value={documentData.subPaper}
                onChange={(e) => setDocumentData({ ...documentData, subPaper: e.target.value })}
              >
                <MenuItem value="Paper 2">Paper 2</MenuItem>
                <MenuItem value="Paper 4">Paper 4</MenuItem>
                <MenuItem value="Paper 6">Paper 6</MenuItem>
                <MenuItem value="GradeBoundries">Grade Boundries</MenuItem>
              </Select>
            </FormControl></>
          
          )}

<TextField
              label="https://dynamicpapers.com/wp-content/uploads/2015/09/0610_w02_qp_1.pdf"
              fullWidth
              value={documentData.linkk}
              onChange={(e) => setDocumentData({ ...documentData, linkk: e.target.value })}
              sx={{ marginBottom: '10px' }}
            />
          <div
    className={`file-input ${isDragging ? 'dragging' : ''}`}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
  >
    <input
      type="file"
      accept=".pdf"
      onChange={(e) => setDocumentData({ ...documentData, pdfFile: e.target.files[0] })}
    />
    Drag & Drop PDF or Click to Upload
  </div>
</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleSaveDocument} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminDocumentPage;
