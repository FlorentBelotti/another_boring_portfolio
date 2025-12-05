export type Page = 'home' | 'resume' | 'works'

export interface HeaderProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}