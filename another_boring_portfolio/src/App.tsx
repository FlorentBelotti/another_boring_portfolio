import { useState, useEffect } from 'react'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Content from './components/common/content'
import Home from './components/pages/home'
import Resume from './components/pages/resume'
import Works from './components/pages/works'
import { useTransitionStore } from './stores/transitionStore'

type Page = 'home' | 'resume' | 'works'

export default function App() {
  
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const { startTransition, endTransition } = useTransitionStore()

  const handlePageChange = (page: Page) => {

    startTransition()
    
    setTimeout(() => {
      setCurrentPage(page)
    }, 500)
    
    setTimeout(() => {
      endTransition()
    }, 1200)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return Home()
      case 'resume':
        return Resume()
      case 'works':
        return Works()
      default:
        return Home()
    }
  }

  const { leftBlock, centerBlock, rightBlock } = renderPage()

  return (
    <>
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <Content 
        leftBlock={leftBlock}
        centerBlock={centerBlock}
        rightBlock={rightBlock}
      />
      
      <Footer />
    </>
  )
}