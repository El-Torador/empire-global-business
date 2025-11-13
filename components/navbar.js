class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        nav {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          padding: .5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          min-height: 90px;
        }
        
        .scrolled {
          padding: 0.75rem 2rem;
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          min-height: 75px;
        }
        
        .logo {
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        
        .logo img {
          max-height: 180px;
          width: auto;
          transition: all 0.3s ease;
        }
        
        .scrolled .logo img {
          max-height: 55px;
        }
        
        .logo span {
          color: #9b2c3d;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }
        
        .nav-links a:hover {
          color: #9b2c3d;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #9b2c3d;
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        /* Mobile menu button - hidden by default */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1001;
          padding: 0.5rem;
          border-radius: 0.25rem;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-btn:hover {
          background: rgba(155, 44, 61, 0.2);
          color: #9b2c3d;
          transform: scale(1.1);
        }
        
        .mobile-menu-btn:active {
          transform: scale(0.95);
        }
        
        /* Close button for mobile menu - hidden by default */
        .close-menu-btn {
          display: none;
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(155, 44, 61, 0.2);
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1001;
          padding: 0.5rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .close-menu-btn:hover {
          background: #9b2c3d;
          transform: rotate(90deg);
        }
        
        /* Desktop styles - ensure normal menu is visible */
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          
          .nav-links {
            position: static;
            display: flex;
            flex-direction: row;
            background: none;
            transform: none;
            opacity: 1;
            height: auto;
            padding: 0;
            gap: 2rem;
          }
          
          .close-menu-btn {
            display: none !important;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          nav {
            padding: 0.75rem 1rem;
          }
          
          .mobile-menu-btn {
            display: block;
            padding: 0.5rem;
            margin-left: auto;
          }
          
          .logo img {
            max-height: 60px;
          }
          
          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(17, 24, 39, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            gap: 3rem;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            height: 100vh;
            overflow-y: auto;
            opacity: 0;
          }
          
          .nav-links.open {
            transform: translateX(0);
            opacity: 1;
          }
          
          .nav-links a {
            font-size: 1.25rem;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            width: 200px;
            text-align: center;
          }
          
          .nav-links a:hover {
            background: rgba(155, 44, 61, 0.1);
            transform: translateY(-2px);
          }
          
          .close-menu-btn {
            display: flex;
          }

          /* Make sure logo stays above menu */
          .logo {
            z-index: 1001;
          }
        }
        
        @media (max-width: 480px) {
          nav {
            padding: 0.5rem 1rem;
          }
          
          .logo img {
            max-height: 35px;
          }
        }
</style>
      <nav id="navbar">
        <div class="logo">
          <img src="https://huggingface.co/spaces/Christraoull/empire-tcham-s-global-business-business-synergy-hub/resolve/main/images/Logo%20Empire%20TCHAM'S.png" alt="Empire Tcham's Logo" width="300" height="300">
        </div>
<ul class="nav-links">
          <button class="close-menu-btn" id="closeMenuBtn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="about.html">À Propos</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
`;

    // Add scroll effect
    const navbar = this.shadowRoot.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
    const closeMenuBtn = this.shadowRoot.getElementById('closeMenuBtn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    closeMenuBtn.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });

    // Close menu when clicking a link
    const links = this.shadowRoot.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close menu when pressing ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
