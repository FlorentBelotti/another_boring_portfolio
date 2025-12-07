export type Page = 'home' | 'resume' | 'works'

export interface HeaderProps {
  currentPage: Page | '404'
  onPageChange: (page: Page) => void
}