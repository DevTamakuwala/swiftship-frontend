import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function DelhiCargo() {
  const cityData = {
    name: 'Delhi',
    serviceAreas: ['South Delhi', 'North Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'Noida', 'Gurgaon', 'Faridabad'],
    features: [
      'Express Cargo Services Pan-India',
      'Same Day Delivery in Delhi-NCR',
      'E-commerce Fulfillment Hub',
      'Multi-Modal Transportation',
      'Advanced Cargo Tracking'
    ],
    routes: [
      'Delhi-Mumbai Express Cargo',
      'Delhi-Bangalore Fast Delivery',
      'Delhi-Kolkata Logistics Route',
      'Delhi-Chennai Cargo Services',
      'Delhi-Surat Trade Route'
    ]
  };

  return (
    <>
      <Head>
        <title>Cargo Services in Delhi NCR | Pan-India Logistics Network | Quora Cargo</title>
        <meta 
          name="description" 
          content="Premium cargo services in Delhi NCR. Express delivery across India, e-commerce fulfillment, warehousing solutions. Connected to all major Indian cities with same-day delivery options."
        />
        <meta 
          name="keywords" 
          content="cargo service delhi, logistics company delhi ncr, same day delivery delhi, warehouse delhi, cargo to mumbai from delhi, pan india cargo services, express cargo delhi"
        />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
      </Head>

      <Header />
      <Breadcrumbs />

      <main className="container my-5">
        <h1 className="text-primary mb-4">Premier Cargo Services in Delhi NCR</h1>
        
        <section className="mb-5">
          <h2 className="h3 mb-3">Comprehensive Logistics Solutions in {cityData.name}</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="lead">
                Quora Cargo offers comprehensive logistics solutions in Delhi NCR, connecting businesses 
                to pan-India markets. Our strategic hub in Delhi ensures rapid cargo movement across 
                the country with real-time tracking and guaranteed delivery timelines.
              </p>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5 mb-3">Service Areas in Delhi NCR:</h3>
                  <ul className="list-unstyled row">
                    {cityData.serviceAreas.map(area => (
                      <li key={area} className="col-md-6 mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h3 mb-4">Pan-India Connectivity</h2>
          <div className="row g-4">
            {cityData.routes.map((route, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 mb-3">{route}</h3>
                    <p className="card-text">
                      Fast and reliable cargo services with real-time tracking and guaranteed delivery.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h3 mb-4">Our Services in Delhi</h2>
          <div className="row g-4">
            {cityData.features.map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 mb-3">{feature}</h3>
                    <p className="card-text">
                      Professional logistics solutions designed for businesses across India.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="h4 mb-3">Contact Our Delhi Office</h2>
              <p>
                <strong>Address:</strong> [Your Delhi Address]
              </p>
              <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
              <p><strong>Email:</strong> delhi@quoracargo.com</p>
              <a href="/contact" className="btn btn-primary">
                Get Cargo Rates
              </a>
            </div>
          </div>
        </section>

        {/* Rich Snippet for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Quora Cargo Delhi",
            "image": "https://www.quoracargo.com/public/image/delhi-office.jpg",
            "description": "Premier cargo and logistics services in Delhi NCR, offering pan-India connectivity and express delivery solutions.",
            "@id": "https://www.quoracargo.com/cities/delhi",
            "url": "https://www.quoracargo.com/cities/delhi",
            "telephone": "+91-XXXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "[Your Delhi Address]",
              "addressLocality": "New Delhi",
              "postalCode": "110001",
              "addressRegion": "Delhi",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.6139,
              "longitude": 77.2090
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Delhi"
              },
              {
                "@type": "City",
                "name": "Noida"
              },
              {
                "@type": "City",
                "name": "Gurgaon"
              },
              {
                "@type": "City",
                "name": "Faridabad"
              }
            ],
            "service": cityData.features
          })}
        </script>
      </main>

      <Footer />
    </>
  );
}
