import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
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
      if (page === 'works') {
        // Si c'est works, utiliser l'index fourni ou 0 par défaut
        navigate(`/works/${typeof index === 'number' ? index : 0}`)
      } else {
        navigate(page === 'home' ? '/' : `/${page}`)
      }
    }, 500)
    setTimeout(() => {
      endTransition()
    }, 1200)
  }

  // Normaliser le pathname pour enlever le basename si présent
  const currentPath = location.pathname.replace('/another_boring_portfolio', '') || '/'

  // Appeler tous les composants pour respecter les règles des hooks
  const homeBlocks = (isMobile ? HomeMobile : Home)({ onNextPage: () => handlePageChange('resume') })
  const resumeBlocks = (isMobile ? ResumeMobile : Resume)({ onSeeProject: () => handlePageChange('works') })
  const worksBlocks = (isMobile ? WorksMobile : Works)()

  // Sélectionner les blocs à afficher selon la page
  let leftBlock, centerBlock, rightBlock

  if (currentPath === '/') {
    ({ leftBlock, centerBlock, rightBlock } = homeBlocks)
  } else if (currentPath === '/resume') {
    ({ leftBlock, centerBlock, rightBlock } = resumeBlocks)
  } else if (currentPath.startsWith('/works')) {
    ({ leftBlock, centerBlock, rightBlock } = worksBlocks)
  } else {
    ({ leftBlock, centerBlock, rightBlock } = homeBlocks)
  }

  return (
    <>
      <Header currentPage={
        currentPath === '/' ? 'home' :
        currentPath === '/resume' ? 'resume' :
        currentPath.startsWith('/works') ? 'works' : 'home'
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
        <Route path="/works" element={<Navigate to="/works/0" replace />} />
        <Route path="/works/:index" element={<PageContent />} />
      </Routes>
    </Router>
  )
}