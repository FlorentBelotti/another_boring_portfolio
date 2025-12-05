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

  // Utiliser les composants mobile ou desktop selon la taille d'écran
  const homeBlocks = isMobile 
    ? HomeMobile({ onNextPage: () => handlePageChange('resume') })
    : Home({ onNextPage: () => handlePageChange('resume') })
    
  const resumeBlocks = isMobile
    ? ResumeMobile({ onSeeProject: () => handlePageChange('works') })
    : Resume({ onSeeProject: () => handlePageChange('works') })

  const worksBlocks = isMobile
    ? WorksMobile()
    : Works()

  let leftBlock, centerBlock, rightBlock

  if (location.pathname === '/') {
    leftBlock = homeBlocks.leftBlock
    centerBlock = homeBlocks.centerBlock
    rightBlock = homeBlocks.rightBlock
  } else if (location.pathname === '/resume') {
    leftBlock = resumeBlocks.leftBlock
    centerBlock = resumeBlocks.centerBlock
    rightBlock = resumeBlocks.rightBlock
  } else if (location.pathname.startsWith('/works')) {
    leftBlock = worksBlocks.leftBlock
    centerBlock = worksBlocks.centerBlock
    rightBlock = worksBlocks.rightBlock
  } else {
    leftBlock = homeBlocks.leftBlock
    centerBlock = homeBlocks.centerBlock
    rightBlock = homeBlocks.rightBlock
  }

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
    <Router>
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/resume" element={<PageContent />} />
        <Route path="/works" element={<PageContent />} />
        <Route path="/works/:index" element={<PageContent />} />
      </Routes>
    </Router>
  )
}