import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://moahub.co.kr/privacy.html" target="_blank" rel="noopener noreferrer">
            개인정보처리방침
          </a>
          <span className="footer-separator">·</span>
          <a href="https://moahub.co.kr/terms.html" target="_blank" rel="noopener noreferrer">
            이용약관
          </a>
          <span className="footer-separator">·</span>
          <a href="mailto:baejeong-gil@baejeong-gil.com">문의</a>
        </div>
        <p className="footer-copyright">© 2024 Moahub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
