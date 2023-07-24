import React from 'react';
import { pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ServicesItens({ title, icon, description, embedPdf }) {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition p-5 rounded-md'>
      <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='font-semibold text-xl text-gray-600 dark:text-gray-200 mb-1'>{title}</h1>
      <p className='text-md text-gray-600 dark:text-gray-300'>{description}</p>
      <div className='w-full mt-4'>
        <div className='w-full'>
          {embedPdf}
        </div>
      </div>
    </div>
  );
}