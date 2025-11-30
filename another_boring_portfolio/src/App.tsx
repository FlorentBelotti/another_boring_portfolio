import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Header from './components/common/header'
import Content from './components/common/content'
import Home from './components/pages/home'
import Resume from './components/pages/resume'
import Works from './components/pages/works'
import { useTransitionStore } from './stores/transitionStore'

type Page = 'home' | 'resume' | 'works'

function PageContent() {
  const navigate = useNavigate()
  const { startTransition, endTransition } = useTransitionStore()
  const location = useLocation()

  const handlePageChange = (page: Page) => {
    startTransition()
    setTimeout(() => {
      navigate(page === 'home' ? '/' : `/${page}`)
    }, 500)
    setTimeout(() => {
      endTransition()
    }, 1200)
  }

  const homeBlocks = Home({ onNextPage: () => handlePageChange('resume') })
  const resumeBlocks = Resume({ onSeeProject: () => handlePageChange('works') })
  const worksBlocks = Works()

  let leftBlock, centerBlock, rightBlock

  switch (location.pathname) {
    case '/':
      leftBlock = homeBlocks.leftBlock
      centerBlock = homeBlocks.centerBlock
      rightBlock = homeBlocks.rightBlock
      break
    case '/resume':
      leftBlock = resumeBlocks.leftBlock
      centerBlock = resumeBlocks.centerBlock
      rightBlock = resumeBlocks.rightBlock
      break
    case '/works':
      leftBlock = worksBlocks.leftBlock
      centerBlock = worksBlocks.centerBlock
      rightBlock = worksBlocks.rightBlock
      break
    default:
      leftBlock = homeBlocks.leftBlock
      centerBlock = homeBlocks.centerBlock
      rightBlock = homeBlocks.rightBlock
  }

  return (
    <>
      <Header currentPage={
        location.pathname === '/' ? 'home' :
        location.pathname === '/resume' ? 'resume' :
        location.pathname === '/works' ? 'works' : 'home'
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
      </Routes>
    </Router>
  )
}