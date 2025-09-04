import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CargoRoutes() {
  const majorRoutes = [
    {
      from: 'Delhi',
      to: 'Mumbai',
      features: ['Express Delivery', '24-48 Hour Transit', 'Daily Departures']
    },
    {
      from: 'Mumbai',
      to: 'Bangalore',
      features: ['Next Day Delivery', 'Temperature Controlled', 'Live Tracking']
    },
    {
      from: 'Bangalore',
      to: 'Chennai',
      features: ['Same Day Delivery', 'Multi-Modal Options', 'Bulk Cargo']
    },
    {
      from: 'Chennai',
      to: 'Kolkata',
      features: ['Express Cargo', 'Warehousing', 'Port Connectivity']
    },
    {
      from: 'Delhi',
      to: 'Surat',
      features: ['Textile Specialists', 'Express Route', 'Daily Service']
    }
  ];

  const regions = [
    {
      name: 'North India',
      cities: ['Delhi', 'Chandigarh', 'Lucknow', 'Jaipur', 'Kanpur']
    },
    {
      name: 'South India',
      cities: ['Bangalore', 'Chennai', 'Hyderabad', 'Kochi', 'Coimbatore']
    },
    {
      name: 'West India',
      cities: ['Mumbai', 'Surat', 'Ahmedabad', 'Pune', 'Vadodara']
    },
    {
      name: 'East India',
      cities: ['Kolkata', 'Bhubaneswar', 'Guwahati', 'Patna', 'Ranchi']
    }
  ];

  return (
    <>
      <Head>
        <title>Pan-India Cargo Routes & Network | Express Cargo Services</title>
        <meta 
          name="description" 
          content="Nationwide cargo service network connecting all major Indian cities. Express delivery, real-time tracking, and reliable logistics solutions across India."
        />
        <meta 
          name="keywords" 
          content="cargo routes india, express cargo services, nationwide logistics, pan india cargo network, interstate cargo service"
        />
      </Head>

      <Header />
      <Breadcrumbs />

      <main className="container my-5">
        <h1 className="text-primary mb-4">Pan-India Cargo Network</h1>

        <section className="mb-5">
          <h2 className="h3 mb-4">Major Express Routes</h2>
          <div className="row g-4">
            {majorRoutes.map((route, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 mb-3">{route.from} ↔ {route.to}</h3>
                    <ul className="list-unstyled">
                      {route.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={`/quote?from=${route.from}&to=${route.to}`} className="btn btn-outline-primary">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h3 mb-4">Regional Networks</h2>
          <div className="row g-4">
            {regions.map((region, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 mb-3">{region.name}</h3>
                    <ul className="list-unstyled">
                      {region.cities.map((city, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="fas fa-map-marker-alt text-primary me-2"></i>
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="h4">Coverage Highlights</h2>
              <div className="row g-4 mt-2">
                <div className="col-md-3">
                  <div className="text-center">
                    <h3 className="h2 text-primary">100+</h3>
                    <p>Cities Covered</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <h3 className="h2 text-primary">24/7</h3>
                    <p>Customer Support</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <h3 className="h2 text-primary">500+</h3>
                    <p>Daily Routes</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center">
                    <h3 className="h2 text-primary">98%</h3>
                    <p>On-Time Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quora Cargo",
            "url": "https://www.quoracargo.com",
            "logo": "https://www.quoracargo.com/public/image/logo.png",
            "description": "Pan-India cargo and logistics services with nationwide network coverage.",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceArea": regions.map(region => ({
              "@type": "City",
              "name": region.cities.join(", ")
            }))
          })}
        </script>
      </main>

      <Footer />
    </>
  );
}
