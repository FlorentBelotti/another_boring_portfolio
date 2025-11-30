import { useState, useEffect } from 'react'
import Header from './components/common/header'
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

  // Appeler TOUS les composants à chaque rendu (important pour React Hooks)
  const homeBlocks = Home()
  const resumeBlocks = Resume()
  const worksBlocks = Works()

  // Sélectionner les blocs à afficher en fonction de la page courante
  let leftBlock, centerBlock, rightBlock

  switch (currentPage) {
    case 'home':
      leftBlock = homeBlocks.leftBlock
      centerBlock = homeBlocks.centerBlock
      rightBlock = homeBlocks.rightBlock
      break
    case 'resume':
      leftBlock = resumeBlocks.leftBlock
      centerBlock = resumeBlocks.centerBlock
      rightBlock = resumeBlocks.rightBlock
      break
    case 'works':
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
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <Content 
        leftBlock={leftBlock}
        centerBlock={centerBlock}
        rightBlock={rightBlock}
      />
      {/* <Footer /> */}
    </>
  )
}