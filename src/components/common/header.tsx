import { useState } from "react";
import type { HeaderProps } from "../../interfaces/header";
import styles from "./header.module.scss";

import Eye from "../fragments/home/bloc-1/eye";

// Ajout de l'import du PDF
import resumePDF from "../../assets/resume.pdf";

export default function Header({
  currentPage,
  onPageChange,
}: HeaderProps & { currentPage: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePageChange = (page: "home" | "resume" | "works" | "token") => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.mobileHeader}>
          <div className={styles.mobileTitle}>
            <div className={styles.img_container}>
              <Eye />
            </div>
            <div className={styles.titleText}>
              <span className={styles.titleHeading}>Another Boring</span>
              <span className={styles.titleDisplay}>PORTFOLIO</span>
            </div>
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? styles.open : ""}></span>
            <span className={isMenuOpen ? styles.open : ""}></span>
            <span className={isMenuOpen ? styles.open : ""}></span>
          </button>
        </div>

        <nav className={styles.nav}>
          <a
            href={resumePDF}
            download="resume.pdf"
            className={`${styles.fontHeading} ${styles.neonUnderline}`}
            tabIndex={0}
          >
            DOWNLOAD
          </a>

          <button
            className={`${styles.fontHeading} ${
              currentPage === "resume" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "resume"
                ? undefined
                : () => onPageChange("resume")
            }
            type="button"
            disabled={currentPage === "resume"}
            style={
              currentPage === "resume"
                ? { cursor: "default", color: "var(--color-accent)" }
                : {}
            }
          >
            Resume
          </button>

          <button
            className={`${styles.fontHeading} ${
              currentPage === "works" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "works" ? undefined : () => onPageChange("works")
            }
            type="button"
            disabled={currentPage === "works"}
            style={
              currentPage === "works"
                ? { cursor: "default", color: "var(--color-accent)" }
                : {}
            }
          >
            Works
          </button>

          <button
            className={`${styles.fontHeading} ${
              currentPage === "token" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "token" ? undefined : () => onPageChange("token")
            }
            type="button"
            disabled={currentPage === "token"}
            style={
              currentPage === "token"
                ? { cursor: "default", color: "var(--color-accent)" }
                : {}
            }
          >
            Token
          </button>

          <button
            className={`${styles.fontHeading} ${
              currentPage === "home" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "home" ? undefined : () => onPageChange("home")
            }
            type="button"
            disabled={currentPage === "home"}
            style={
              currentPage === "home"
                ? { cursor: "default", color: "var(--color-accent)" }
                : {}
            }
          >
            Home
          </button>
        </nav>

        <nav
          className={`${styles.mobileNav} ${
            isMenuOpen ? styles.mobileNavOpen : ""
          }`}
        >
          {/* Bouton DOWNLOAD pour mobile */}
          <a
            href={resumePDF}
            download="resume.pdf"
            className={`${styles.fontHeading} ${styles.neonUnderline}`}
            tabIndex={0}
            style={{ textAlign: "right", width: "100%" }}
          >
            DOWNLOAD
          </a>

          <button
            className={`${styles.fontHeading} ${
              currentPage === "resume" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "resume"
                ? undefined
                : () => handlePageChange("resume")
            }
            type="button"
            disabled={currentPage === "resume"}
          >
            Resume
          </button>
          <button
            className={`${styles.fontHeading} ${
              currentPage === "works" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "works"
                ? undefined
                : () => handlePageChange("works")
            }
            type="button"
            disabled={currentPage === "works"}
          >
            Works
          </button>
          <button
            className={`${styles.fontHeading} ${
              currentPage === "token" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "token"
                ? undefined
                : () => handlePageChange("token")
            }
            type="button"
            disabled={currentPage === "token"}
          >
            Token
          </button>
          <button
            className={`${styles.fontHeading} ${
              currentPage === "home" ? styles.neonGlow : styles.neonUnderline
            }`}
            onClick={
              currentPage === "home"
                ? undefined
                : () => handlePageChange("home")
            }
            type="button"
            disabled={currentPage === "home"}
          >
            Home
          </button>
        </nav>
      </div>
    </header>
  );
}
