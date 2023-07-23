import React from 'react'
import Titles from './Titles'
import services from '../data/services'
import ServicesItens from './ServicesItens'

export default function Services() {
  return (
    <div className='py-12 mb-40'>
      <Titles>PDFs para leitura</Titles>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-6'>
        {services.map(service => (
          <div key={service.title} className='w-full'>
            <ServicesItens
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
              embedPdf={service.embedPdf}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
