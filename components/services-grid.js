class ServicesGrid extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const currentScript = document.currentScript || Array.from(document.getElementsByTagName('script')).pop();
    const basePath = currentScript.src.substring(0, currentScript.src.lastIndexOf('/'));

    const sportImg = `${basePath}/../images/sports.jpeg`;
    const importExportImg = `${basePath}/../images/import-export.jpeg`;
    const hebergementImg = `${basePath}/../images/hebergement.jpeg`;
    const mediaImg = `${basePath}/../images/newTeam.jpeg`;
    const amenagementImg = `${basePath}/../images/decoration.jpeg`;
    const tourismeImg = `${basePath}/../images/tourisme.jpeg`;
    const presta = `${basePath}/../images/presta.jpg`;
    this.shadowRoot.innerHTML = `
      <style>
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
        }
        .service-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-10px);
        }
        .service-image {
          height: 200px;
          background-size: cover;
          background-position: center;
        }
        .service-content {
          padding: 1.5rem;
        }
        .service-icon {
          width: 60px;
          height: 60px;
          background: #9b2c3d1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: #9b2c3d;
        }
        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }
        .service-description {
          color: #6b7280;
          line-height: 1.6;
        }
      </style>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-image" style="background-image: url('${sportImg}')"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="award"></i>
            </div>
            <h3 class="service-title">Sports & Culture</h3>
            <p class="service-description">Organisation d'événements sportifs, gestion de talents et développement de projets culturels innovants.</p>
          </div>
        </div>

        <div class="service-card">
          <div class="service-image" style="background-image: url('${presta}')"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="award"></i>
            </div>
            <h3 class="service-title">Prestation de services</h3>
            <p class="service-description">Fourniture de services variés adaptés aux besoins spécifiques de nos clients.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-image" style="background-image: url('${tourismeImg}')"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="globe"></i>
            </div>
            <h3 class="service-title">Hébergement & Tourisme</h3>
            <p class="service-description">Gestion d'hôtels, complexes touristiques et organisation de voyages haut de gamme.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-image" style="background-image: url('${importExportImg}');"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="truck"></i>
            </div>
            <h3 class="service-title">Import-Export</h3>
            <p class="service-description">Commerce international de produits de qualité avec un réseau de partenaires mondiaux.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-image" style="background-image: url('http://static.photos/retail/640x360/4')"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="shopping-cart"></i>
            </div>
            <h3 class="service-title">Commerce Général</h3>
            <p class="service-description">Distribution de produits diversifiés répondant aux besoins des marchés locaux et internationaux.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-image" style="background-image: url('${hebergementImg}')"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="home"></i>
            </div>
            <h3 class="service-title">Gestion Immobilière</h3>
            <p class="service-description">Acquisition, gestion et négociation de biens immobiliers premium avec expertise reconnue.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-image" style="background-image: url('${amenagementImg}')"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="package"></i>
            </div>
            <h3 class="service-title">Ameublement & Décoration</h3>
            <p class="service-description">Conception et fourniture de solutions d'aménagement intérieur haut de gamme.</p>
          </div>
        </div>
        
        <div class="service-card">
          <div class="service-image" style="background-image: url('${mediaImg}')"></div>
          <div class="service-content">
            <div class="service-icon">
              <i data-feather="tv"></i>
            </div>
            <h3 class="service-title">Médias</h3>
            <p class="service-description">Production de contenu médiatique innovant et gestion de plateformes de communication.</p>
          </div>
        </div>
      </div>
    `;
    feather.replace();
  }
}

customElements.define('services-grid', ServicesGrid);
