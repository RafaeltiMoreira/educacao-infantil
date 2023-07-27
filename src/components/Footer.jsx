import React from 'react'
import { VscArrowCircleUp, VscGithubInverted } from 'react-icons/vsc';

export default function Footer() {
  return (
    <div className='py-5 dark:bg-slate-800 bg-gray-600 text-center text-gray-300'>
        <a href="#home" className='block text-xl md:text-2xl font-semibold'><VscArrowCircleUp className='absolute h-8 w-8 md:h-10 md:w-10 end-10 md:end-32 hover:text-gray-900  dark:hover:text-white' title='Voltar ao topo'/></a>
        
        <a href="https://github.com/RafaeltiMoreira"
            className='lg:text-lg md:text-sm dark:text-gray-400 text-white' target='_blank' title='GitHub'
        ><VscGithubInverted className='inline-block mb-1' /> RafaeltiMoreira</a>

        <p className='lg:text-lg md:text-sm mt-2 dark:text-gray-400 text-white'>&copy; Desenvolvido por Rafael Moreira &middot; {new Date().getFullYear()} &middot; <span className='md:inline-block block'>Todos os direitos reservados.</span></p>
    </div>
  )
}