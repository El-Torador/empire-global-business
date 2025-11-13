class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #111827;
          color: white;
          padding: 4rem 2rem 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .footer-logo span {
          color: #9b2c3d;
        }
        
        .footer-about {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: #d1d5db;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .footer-social a:hover {
          background: #9b2c3d;
          transform: translateY(-3px);
        }
        
        .footer-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #9b2c3d;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .footer-links a:hover {
          color: #9b2c3d;
          transform: translateX(5px);
        }
        
        .footer-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          color: #d1d5db;
        }
        
        .footer-contact-item i {
          margin-right: 1rem;
          color: #9b2c3d;
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <div class="footer-logo">EMPIRE <span>TCHAM'S</span> SARL</div>
            <p class="footer-about">Leader multisectoriel offrant des solutions intégrées dans huits domaines clés pour répondre aux besoins complexes des marchés modernes.</p>
            <div class="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61582798185925">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@empire.tchams.glo?_r=1&_t=ZN-91JppZydf4I">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 8.245V15.5a6.5 6.5 0 1 1-5-6.326v3.163a3.5 3.5 0 1 0 2 3.163V2h3a5 5 0 0 0 5 5v3a7.97 7.97 0 0 1-5-1.755"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/empire-tcham-s-global-service-sarl-7b162b398?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCV3VS1nBQwSSQi%2F9hZe80g%3D%3D">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
              </a>
              <a href="https://www.instagram.com/empire_tchams_sarl2019">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
              </a>
            </div>
          </div>
          
          <div class="footer-links-container">
            <h3 class="footer-title">Liens Rapides</h3>
            <ul class="footer-links">
              <li><a href="index.html">Accueil</a></li>
              <li><a href="about.html">À Propos</a></li>
              <li><a href="index.html#services">Services</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-services-container">
            <h3 class="footer-title">Nos Services</h3>
            <ul class="footer-links">
              <li><a href="index.html#services">Sports et Culture</a></li>
              <li><a href="index.html#services">Prestation de services</a></li>
              <li><a href="index.html#services">Hébergement et Tourisme</a></li>
              <li><a href="index.html#services">Import-Export</a></li>
              <li><a href="index.html#services">Commerce Général</a></li>
              <li><a href="index.html#services">Gestion Immobilière</a></li>
              <li><a href="index.html#services">Ameublement et Décoration</a></li>
              <li><a href="index.html#services">Médias</a></li>
            </ul>
          </div>
          
          <div class="footer-contact-container">
            <h3 class="footer-title">Contact</h3>
            <div class="footer-contact-item">
              <i data-feather="map-pin"></i>
              <span>Rue Ambassade d'Espagne, Bastos<br>Bp: 35040 Yaoundé-Cameroun</span>
            </div>
            <div class="footer-contact-item">
              <i data-feather="map-pin"></i>
              <span>+237 688 13 02 10</span>
            </div>
            <div class="footer-contact-item">
              <i data-feather="map-pin"></i>
              <span>+237 678 58 97 75</span>
            </div>
            <div class="footer-contact-item">
              <i data-feather="mail"></i>
              <span class="footer-links">
              <a class="mail" href="mailto:contact@empire-tchams-global-business.com">contact@empire-tchams-global-business.com</a>
              </span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Empire Tcham's Global Business. Tous droits réservés.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
