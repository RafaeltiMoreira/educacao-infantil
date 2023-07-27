import React from 'react'
import { VscArrowCircleUp, VscGithubInverted } from 'react-icons/vsc';

export default function Footer() {
  return (
    <div className='py-5 dark:bg-slate-800 bg-gray-600 text-center text-gray-300'>
        <a href="#home" className='block text-xl md:text-2xl font-semibold'><VscArrowCircleUp className='absolute h-8 w-8 md:h-10 md:w-10 end-10 md:end-32 hover:text-gray-900  dark:hover:text-white' title='Voltar ao início'/></a>
        
        <a href="https://github.com/RafaeltiMoreira"
            className='text-base md:text-md dark:text-gray-400 text-white' target='_blank' title='GitHub'
        ><VscGithubInverted className='inline-block mb-1' /> RafaeltiMoreira</a>

        <p className='text-base mt-2 dark:text-gray-400 text-white'>&copy; Desenvolvido por Rafael Moreira &middot; {new Date().getFullYear()} &middot; Todos os direitos reservados.</p>
    </div>
  )
}