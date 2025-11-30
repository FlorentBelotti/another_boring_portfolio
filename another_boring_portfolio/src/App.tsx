import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'
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
  const params = useParams<{ index?: string }>()

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

  const homeBlocks = Home({ onNextPage: () => handlePageChange('resume') })
  const resumeBlocks = Resume({ onSeeProject: () => handlePageChange('works') })

  // Ajout de la gestion de l'index pour Works
  const worksIndex = params.index ? parseInt(params.index, 10) : undefined
  const worksBlocks = Works({ index: worksIndex, onSelectProject: (i: number) => handlePageChange('works', i) })

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