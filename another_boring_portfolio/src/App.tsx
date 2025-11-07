import { useState } from 'react'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Content from './components/common/content'
import Home from './components/pages/home'
import Resume from './components/pages/resume'
import Works from './components/pages/works'

type Page = 'home' | 'resume' | 'works'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'resume':
        return <Resume />
      case 'works':
        return <Works />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <Content> {renderPage()} </Content>
      
      <Footer />
    </>
  )
}