export type Page = "home" | "resume" | "works" | "token";

export interface HeaderProps {
  currentPage: Page | "404";
  onPageChange: (page: Page) => void;
}
