import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function SuratCargo() {
  const cityData = {
    name: 'Surat',
    serviceAreas: ['Varachha', 'Adajan', 'Katargam', 'Vesu', 'Athwa'],
    features: [
      'Same Day Delivery within Surat',
      'Express Cargo to All Gujarat Cities',
      'Specialized Diamond & Textile Logistics',
      'E-commerce Fulfillment Center',
      '24/7 Cargo Tracking'
    ]
  };

  return (
    <>
      <Head>
        <title>Best Cargo Services in Surat | Same Day Delivery | Quora Cargo</title>
        <meta 
          name="description" 
          content="Leading cargo service in Surat. Same-day delivery, specialized diamond & textile logistics. 100+ vehicles, warehouse in Varachha. Best rates for local & interstate cargo."
        />
        <meta 
          name="keywords" 
          content="cargo service surat, same day delivery surat, textile logistics surat, diamond cargo surat, warehouse varachha, cargo company surat, local cargo service"
        />
        {/* Location-specific meta tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat" />
        <meta name="geo.position" content="21.1702;72.8311" />
        <meta name="ICBM" content="21.1702, 72.8311" />
      </Head>

      <Header />
      <Breadcrumbs />

      <main className="container my-5">
        <h1 className="text-primary mb-4">Premier Cargo Services in Surat</h1>
        
        <section className="mb-5">
          <h2 className="h3 mb-3">Trusted Cargo Solutions in {cityData.name}</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="lead">
                Quora Cargo is Surat's leading logistics partner, specializing in diamond, textile, 
                and e-commerce cargo services. With our strategically located warehouse in Varachha, 
                we offer same-day delivery across Surat and express shipping throughout Gujarat.
              </p>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5 mb-3">We Serve All Areas in Surat:</h3>
                  <ul className="list-unstyled">
                    {cityData.serviceAreas.map(area => (
                      <li key={area} className="mb-2">
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
          <h2 className="h3 mb-4">Why Choose Quora Cargo in Surat?</h2>
          <div className="row g-4">
            {cityData.features.map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 mb-3">{feature}</h3>
                    <p className="card-text">
                      Experience reliable and efficient cargo services tailored for Surat's businesses.
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
              <h2 className="h4 mb-3">Contact Our Surat Office</h2>
              <p>
                <strong>Address:</strong> H. No. 101, Mandir Faliyu, Opp Patel Faliyu, 
                Saroli Gam, Surat, Gujarat 395010
              </p>
              <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
              <p><strong>Email:</strong> surat@quoracargo.com</p>
              <a href="/contact" className="btn btn-primary">
                Contact Us for Cargo Rates
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
