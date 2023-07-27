import React, { useEffect, useState } from 'react'
import HomeSection from './components/HomeSection'
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button type='button' onClick={handleThemeSwitch} className='fixed z-10 right-2 top-2 bg-gray-600 dark:bg-gray-700 text-lg p-2 rounded-full' title='Alternar tema do site'>
        {theme === 'dark' ? '🌛' : '🌞'}
      </button>
      <div className='font-inter bg:white dark:bg-gray-900'>
        <div className='max-w-5xl mx-auto w-11/12'>
          <HomeSection />
          <Services />
        </div>
        <Footer />
      </div>
    </>
  )
}
