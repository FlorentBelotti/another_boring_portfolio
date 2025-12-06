import { useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Header from './components/common/header'
import Content from './components/common/content'
import Home from './components/pages/home'
import Resume from './components/pages/resume'
import Works from './components/pages/works'
import HomeMobile from './components/mobile/homeMobile'
import ResumeMobile from './components/mobile/resumeMobile'
import WorksMobile from './components/mobile/worksMobile'
import { useTransitionStore } from './stores/transitionStore'
import { useIsMobile } from './hooks/useIsMobile'

type Page = 'home' | 'resume' | 'works'

function PageContent() {
  const navigate = useNavigate()
  const { startTransition, endTransition } = useTransitionStore()
  const location = useLocation()
  const isMobile = useIsMobile(768)

  const handlePageChange = (page: Page, index?: number) => {
    startTransition()
    setTimeout(() => {
      if (page === 'works' && typeof index === 'number') {
        navigate(`/works/${index}`)
      } else {
        navigate(page === 'home' ? '/' : `/${page}`)
      }
    }, 500)
    setTimeout(() => {
      endTransition()
    }, 1200)
  }

  // Utiliser useMemo pour éviter de recalculer les blocs inutilement
  const { leftBlock, centerBlock, rightBlock } = useMemo(() => {
    if (location.pathname === '/') {
      return isMobile 
        ? HomeMobile({ onNextPage: () => handlePageChange('resume') })
        : Home({ onNextPage: () => handlePageChange('resume') })
    } else if (location.pathname === '/resume') {
      return isMobile
        ? ResumeMobile({ onSeeProject: () => handlePageChange('works') })
        : Resume({ onSeeProject: () => handlePageChange('works') })
    } else if (location.pathname.startsWith('/works')) {
      return isMobile
        ? WorksMobile()
        : Works()
    } else {
      return isMobile 
        ? HomeMobile({ onNextPage: () => handlePageChange('resume') })
        : Home({ onNextPage: () => handlePageChange('resume') })
    }
  }, [location.pathname, isMobile])

  return (
    <>
      <Header currentPage={
        location.pathname === '/' ? 'home' :
        location.pathname === '/resume' ? 'resume' :
        location.pathname.startsWith('/works') ? 'works' : 'home'
      } onPageChange={handlePageChange} />
      <Content 
        leftBlock={leftBlock}
        centerBlock={centerBlock}
        rightBlock={rightBlock}
      />
    </>
  )
}

export default function App() {
  return (
    <Router basename="/another_boring_portfolio">
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/resume" element={<PageContent />} />
        <Route path="/works" element={<PageContent />} />
        <Route path="/works/:index" element={<PageContent />} />
      </Routes>
    </Router>
  )
}