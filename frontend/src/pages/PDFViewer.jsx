import React from 'react';

const PDFViewer = ({ file }) => {
  const fileUrl = `http://localhost:5000/uploads/${file}`;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src={fileUrl}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;