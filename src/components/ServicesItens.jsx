import React from 'react';
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ServicesItens({ title, icon, description, embedPdf, workUrl, imgUrl }) {

  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 rounded-md'>
      <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1'>{title}</h1>
      <p className='text-md font-semibold text-gray-600 dark:text-gray-300 py-2'>{description}</p>
      <div className='lg:w-full md:w-auto'>
        <img src={imgUrl} alt={title} className='object-cover' />
        <div className='flex justify-end flex-wrap py-6'>
          <a href={workUrl} target='_blank' rel='noreferrer' className='font-semibold mx-2 px-3 py-1 bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white rounded-md'>Ler</a>
          <a
            href={embedPdf}
            download={`${title}.pdf`}
            className='font-semibold mx-2 px-3 py-1 bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white rounded-md'
          >
            Baixar
          </a>
        </div>
      </div>
    </div>
  );
} 