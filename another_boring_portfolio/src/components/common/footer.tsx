export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          {/* © {currentYear} Florent Belotti. All rights reserved. */}
        </p>
      </div>
    </footer>
  )
}