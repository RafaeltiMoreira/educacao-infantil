import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ServicesItens({ title, icon, description, embedPdf, workUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.1);
  const [pdfLoaded, setPdfLoaded] = useState(false);

  useEffect(() => {
    // Carregar PDF
    const loadPdf = async () => {
      try {
        await pdfjs.getDocument(embedPdf).promise;
        setPdfLoaded(true);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };
    loadPdf();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-md'>
      <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1'>{title}</h1>
      <p className='text-md font-semibold text-gray-600 dark:text-gray-300'>{description}</p>
      <div className='lg:w-full md:w-auto'>

        {pdfLoaded ? (
          <div className='mt-12 mb-5 overflow-auto' style={{ maxHeight: '1350px', minHeight: '350px' }}>
            {/* @vite-ignore */}
            <Document className='' file={embedPdf} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page className='mb-2' key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} renderTextLayer={false} width={879} />
              ))}
            </Document>
          </div>
        ) : (
          <div className='text-gray-800'>Carregando PDF...</div>
        )}

        <div className='flex justify-center flex-wrap'>
          <a href={workUrl} target='_blank' rel='noreferrer' className='font-semibold mx-2 px-3 py-1 bg-cyan-500 dark:bg-cyan-600 text-white rounded-md'>Ler</a>
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