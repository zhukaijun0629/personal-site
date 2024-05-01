import React, { useEffect, useRef } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import PropTypes from 'prop-types';

// Setup the PDF.js worker
GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js';

const PDFViewer = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const loadingTask = getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport,
        };

        const renderTask = page.render(renderContext);
        await renderTask.promise;
      } catch (error) {
        console.error('Error while loading and rendering PDF: ', error);
      }
    };

    fetchPdf();
  }, [url]); // Re-run this effect if the URL changes

  return <canvas ref={canvasRef} style={{ width: '100%', height: 'auto' }} />;
};

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PDFViewer;
