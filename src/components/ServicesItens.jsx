import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ServicesItens({ title, icon, description, embedPdf }) {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleZoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.25, 0.25));
  }

  function handleZoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.25, 3.0));
  }

  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-md'>
      <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1'>{title}</h1>
      <p className='text-md font-semibold text-gray-600 dark:text-gray-300'>{description}</p>
      <div className='lg:w-full md:w-auto'>

        <div className='mt-12 mb-5 overflow-auto' style={{ maxHeight: '650px' }}>
          <Document file={embedPdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page className='mb-2' key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} renderTextLayer={false} width={879} />
            ))}
          </Document>
        </div>

        <div className='react-pdf__Page__canvas' style={{ height: '--scale-factor: auto' }}>
        </div>

        <div className='react-pdf__Page__annotations annotationLayer' style={{ height: '--scale-factor: auto' }}>   </div>

        <div className='flex justify-center flex-wrap'>
          <button
            className='font-semibold mx-2 px-3 py-1 bg-cyan-500 dark:bg-cyan-600 text-white rounded-md'
            onClick={handleZoomOut}
            disabled={scale <= 0.25}
          >
            Zoom -
          </button>
          <button
            className='font-semibold mx-2 px-3 py-1 bg-cyan-500 dark:bg-cyan-600 text-white rounded-md'
            onClick={handleZoomIn}
            disabled={scale >= 3.0}
          >
            Zoom +
          </button>
          <a
            href={embedPdf}
            download={`${title}.pdf`}
            className='font-semibold mx-2 px-3 py-1 bg-cyan-500 dark:bg-cyan-600 text-white rounded-md'
          >
            Baixar
          </a>
        </div>

      </div>
    </div>
  );
}