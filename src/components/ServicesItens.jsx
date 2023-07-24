import React, { useState } from 'react';

export default function ServicesItens({ title, icon, description, embedPdf }) {
  

  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition p-5 rounded-md'>
      <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='font-semibold text-xl text-gray-600 dark:text-gray-200 mb-1'>{title}</h1>
      <p className='text-md text-gray-600 dark:text-gray-300'>{description}</p>
      <div className='w-full mt-4'>
        <div className='mt-8 w-full'>
          <object data={embedPdf} type='application/pdf' width='100%' height='390px'>
            <p>Seu navegador não suporta a visualização de PDFs. Você pode baixar o arquivo 
              <a href={embedPdf}>aqui</a>.
            </p>
          </object>
        </div>
      </div>

    </div>
  );
}