import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 'express-cargo',
      title: 'Express Cargo Services',
      description: 'Next-day and same-day delivery services across major Indian cities.',
      features: [
        'Door-to-Door Delivery',
        'Real-Time Tracking',
        'Insurance Coverage',
        'Priority Handling'
      ]
    },
    {
      id: 'ecommerce-fulfillment',
      title: 'E-commerce Fulfillment',
      description: 'Complete e-commerce logistics solutions with pan-India warehousing.',
      features: [
        'Warehouse Management',
        'Order Processing',
        'Last-Mile Delivery',
        'Returns Management'
      ]
    },
    {
      id: 'bulk-cargo',
      title: 'Bulk Cargo Transportation',
      description: 'Nationwide bulk cargo movement with specialized vehicles.',
      features: [
        'Multi-Modal Transport',
        'Load Planning',
        'Route Optimization',
        'Cargo Insurance'
      ]
    },
    {
      id: 'specialized-logistics',
      title: 'Specialized Logistics',
      description: 'Industry-specific solutions for sensitive and high-value cargo.',
      features: [
        'Temperature Control',
        'High-Value Goods',
        'Dangerous Goods',
        'Time-Critical Delivery'
      ]
    }
  ];

  const industries = [
    'E-commerce',
    'Manufacturing',
    'Pharmaceuticals',
    'Textiles',
    'Electronics',
    'Automotive',
    'FMCG',
    'Retail'
  ];

  return (
    <>
      <Head>
        <title>Comprehensive Logistics & Cargo Services Across India | Quora Cargo</title>
        <meta 
          name="description" 
          content="Complete cargo and logistics solutions across India. Express delivery, e-commerce fulfillment, specialized cargo services, and bulk transportation with nationwide coverage."
        />
        <meta 
          name="keywords" 
          content="cargo services india, logistics company, express cargo, ecommerce fulfillment, bulk cargo transport, specialized logistics, pan india cargo"
        />
      </Head>

      <Header />
      <Breadcrumbs />

      <main className="container my-5">
        <h1 className="text-primary mb-4">Nationwide Logistics Solutions</h1>

        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="h3">Pan-India Cargo Services</h2>
              <p className="lead">
                Comprehensive logistics solutions covering all major cities and regions across India. 
                From express delivery to specialized cargo handling, we've got your logistics needs covered.
              </p>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5 mb-3">Industries We Serve</h3>
                  <div className="row">
                    {industries.map((industry, index) => (
                      <div key={index} className="col-6 mb-2">
                        <i className="fas fa-industry text-primary me-2"></i>
                        {industry}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h3 mb-4">Our Services</h2>
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="h4 mb-3">{service.title}</h3>
                    <p className="mb-4">{service.description}</p>
                    <ul className="list-unstyled">
                      {service.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={`/contact?service=${service.id}`} className="btn btn-primary mt-3">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quora Cargo",
            "url": "https://www.quoracargo.com",
            "description": "Pan-India cargo and logistics services provider",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Logistics Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                }
              }))
            }
          })}
        </script>
      </main>

      <Footer />
    </>
  );
}
