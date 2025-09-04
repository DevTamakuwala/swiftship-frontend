import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Head from 'next/head';

export default function Home() {
  const [trackingId, setTrackingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [clients, setClients] = useState(0);
  const [shipments, setShipments] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [countries, setCountries] = useState(0);
  const router = useRouter();

  // SEO Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.quoracargo.com",
    "name": "Quora Cargo and Logistics LLP",
    "image": "https://www.quoracargo.com/public/image/img1.png",
    "description": "Premier logistics solutions provider in Gujarat offering transportation, warehousing, e-commerce logistics, and milk-run consolidation services.",
    "url": "https://www.quoracargo.com",
    "email": "support@quoracargo.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H. No. 101, Mandir Faliyu, Opp Patel Faliyu, Saroli Gam",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395010",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "State",
      "name": "Gujarat"
    },
    "services": [
      "Transportation & Fleet Management",
      "Warehousing & Distribution",
      "E-commerce Logistics",
      "Milk-Run & Consolidation Models"
    ]
  };

  // Enhanced orange theme colors
  const theme = useMemo(() => ({
    primary: '#FF6B35',      // Vibrant orange
    secondary: '#FF4500',    // Orange red
    accent: '#FFB366',       // Light orange
    light: '#FFF4E6',        // Very light orange
    dark: '#CC4A00',         // Dark orange
    navy: '#1A1A2E',         // Dark navy
  }), []);

  // Initialize AOS and counters
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });

    // Animated counters
    let c = 0, s = 0, r = 0, co = 0;
    const counter = setInterval(() => {
      if (c < 25000) setClients(c += 500);
      if (s < 100000) setShipments(s += 2000);
      if (r < 50000) setReviews(r += 1000);
      if (co < 195) setCountries(co += 4);
      
      if (c >= 25000 && s >= 100000 && r >= 50000 && co >= 195) {
        clearInterval(counter);
      }
    }, 50);

    return () => clearInterval(counter);
  }, []);

  // PRESERVED SWIFTSHIP LOGIC — do not change
  const handleTrackSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    router.push(`/shipmentDetails?trackingId=${trackingId.trim()}`);
  }, [trackingId, router]);

  // Advanced ripple effect
  const createRipple = useCallback((event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  }, []);

  return (
    <>
      <Head>
        <title>SwiftShip — Home</title>
        <meta name="description" content="SwiftShip — Reliable, Fast & Secure Shipping Solutions" />
        <style jsx>{`
          :root {
            --primary: ${theme.primary};
            --secondary: ${theme.secondary};
            --accent: ${theme.accent};
            --light: ${theme.light};
            --dark: ${theme.dark};
            --navy: ${theme.navy};
          }

          * {
            scroll-behavior: smooth;
            box-sizing: border-box;
          }

          body {
            background-color: var(--light);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }

          /* Enhanced Orange Button System */
          .btn-orange {
            background: linear-gradient(135deg, var(--primary), var(--secondary)) !important;
            border: none !important;
            color: white !important;
            padding: 16px 32px !important;
            border-radius: 50px !important;
            font-weight: 700 !important;
            font-size: 16px !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4) !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            overflow: hidden !important;
            min-width: 180px !important;
          }

          .btn-orange::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.6s ease;
          }

          .btn-orange:hover::before {
            left: 100%;
          }

          .btn-orange:hover {
            transform: translateY(-4px) scale(1.05) !important;
            box-shadow: 0 15px 40px rgba(255, 107, 53, 0.6) !important;
            background: linear-gradient(135deg, var(--secondary), var(--dark)) !important;
            color: white !important;
          }

          .btn-orange:active {
            transform: translateY(-2px) scale(1.02) !important;
          }

          .btn-orange-lg {
            padding: 18px 36px !important;
            font-size: 18px !important;
            min-width: 200px !important;
          }

          .btn-outline-orange {
            background: transparent !important;
            border: 3px solid var(--primary) !important;
            color: var(--primary) !important;
            padding: 14px 28px !important;
            border-radius: 40px !important;
            font-weight: 700 !important;
            font-size: 16px !important;
            text-transform: uppercase !important;
            transition: all 0.3s ease !important;
            min-width: 180px !important;
          }

          .btn-outline-orange:hover {
            background: var(--primary) !important;
            color: white !important;
            transform: translateY(-3px) scale(1.05) !important;
            box-shadow: 0 12px 30px rgba(255, 107, 53, 0.4) !important;
            border-color: var(--primary) !important;
          }

          .btn-light-orange {
            background: var(--accent) !important;
            border: 2px solid var(--accent) !important;
            color: var(--dark) !important;
            padding: 14px 28px !important;
            border-radius: 40px !important;
            font-weight: 700 !important;
            font-size: 16px !important;
            text-transform: uppercase !important;
            transition: all 0.3s ease !important;
            min-width: 180px !important;
          }

          .btn-light-orange:hover {
            background: var(--primary) !important;
            border-color: var(--primary) !important;
            color: white !important;
            transform: translateY(-3px) scale(1.05) !important;
            box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4) !important;
          }

          /* Ripple Effect */
          .ripple {
            position: relative;
            overflow: hidden;
          }

          .ripple::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            opacity: 0;
            transition: transform 0.5s, opacity 1s;
          }

          .ripple:active::after {
            transform: scale(2);
            opacity: 0;
            transition: 0s;
          }

          .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            pointer-events: none;
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
          }

          @keyframes ripple-animation {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }

          /* Enhanced Hero Section */
          .hero-section {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('/image/img1.png');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            border-radius: 25px;
            margin: 50px 80px;
            min-height: 700px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-content {
            text-align: center;
            color: white;
            z-index: 2;
            position: relative;
          }

          .hero-title {
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 1.5rem;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
            background: linear-gradient(135deg, #FFE082, #FF6B35, #FFB366);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 2.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            color: white !important;
          }

          /* Clean Form Styles */
          .form-control {
            border: 3px solid #e5e7eb !important;
            border-radius: 15px !important;
            padding: 18px 24px !important;
            font-size: 16px !important;
            font-weight: 500 !important;
            transition: all 0.3s ease !important;
            background: white !important;
          }

          .form-control:focus {
            outline: none !important;
            border-color: var(--primary) !important;
            box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.15) !important;
            transform: translateY(-2px) !important;
          }

          .form-select {
            border: 3px solid #e5e7eb !important;
            border-radius: 15px !important;
            padding: 18px 24px !important;
            font-size: 16px !important;
            font-weight: 500 !important;
            transition: all 0.3s ease !important;
            background: white !important;
          }

          .form-select:focus {
            outline: none !important;
            border-color: var(--primary) !important;
            box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.15) !important;
          }

          /* Enhanced Card System */
          .card-clean {
            background: white;
            border: 2px solid #f3f4f6;
            border-radius: 20px;
            padding: 35px;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          }

          .card-clean:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
            border-color: var(--accent);
          }

          .feature-card {
            background: white;
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid #f3f4f6;
            height: 100%;
          }

          .feature-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(255, 107, 53, 0.2);
            border-color: var(--primary);
          }

          .service-card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            transition: all 0.3s ease;
            border: 2px solid #f3f4f6;
            height: 100%;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 35px rgba(0, 0, 0, 0.12);
          }

          /* Enhanced Stats Counter */
          .stats-card {
            background: linear-gradient(135deg, var(--primary), var(--secondary)) !important;
            color: white;
            border-radius: 20px;
            padding: 35px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .stats-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(transparent, rgba(255, 255, 255, 0.15), transparent);
            animation: rotate 4s linear infinite;
          }

          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .stats-card:hover {
            transform: scale(1.08);
            box-shadow: 0 20px 40px rgba(255, 107, 53, 0.4);
          }

          /* Section Styling */
          .section-title {
            color: var(--secondary);
            font-weight: 800;
            margin-bottom: 1rem;
          }

          .section-subtitle {
            color: #6b7280;
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 3rem;
          }

          /* Enhanced Badges */
          .badge-orange {
            background: linear-gradient(135deg, var(--primary), var(--secondary)) !important;
            color: white !important;
            padding: 10px 20px !important;
            border-radius: 25px !important;
            font-size: 13px !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
          }

          .badge-light {
            background: var(--accent) !important;
            color: var(--dark) !important;
            padding: 10px 20px !important;
            border-radius: 25px !important;
            font-size: 13px !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
          }

          /* Clean divider */
          .divider-orange {
            height: 6px;
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--primary));
            border: none;
            border-radius: 15px;
            margin: 60px auto;
            width: 120px;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
          }

          /* Hover Effects */
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .hover-lift:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          /* Loading Spinner */
          .loading-spinner {
            width: 22px;
            height: 22px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .hero-section {
              margin: 20px;
              min-height: 500px;
            }
            
            .hero-title {
              font-size: 2.5rem;
            }
            
            .hero-subtitle {
              font-size: 1.2rem;
            }
            
            .btn-orange, .btn-outline-orange, .btn-light-orange {
              padding: 14px 24px !important;
              font-size: 14px !important;
              min-width: 150px !important;
            }

            .btn-orange-lg {
              padding: 16px 28px !important;
              font-size: 16px !important;
              min-width: 170px !important;
            }

            .card-clean {
              padding: 25px;
            }
          }
        `}</style>
      </Head>

      <Header />

      <main style={{ backgroundColor: theme.light }}>
        {/* Enhanced Hero Section with Visible Image */}
          {/* HERO */}
        <section
          className="d-flex align-items-center text-white rounded-4 shadow-lg"
          style={{
            backgroundImage: 'url("/image/img1.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "600px",
            margin: "50px 80px",
            position: "relative",
            overflow: "hidden",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          ></div>
          <div
            className="container position-relative text-center"
            data-aos="fade-up"
          >
            <h1 className="display-3 fw-bold mb-3">Welcome to SwiftShip</h1>
            <p className="lead mb-4 fs-4">
              Reliable, Fast & Secure Shipping Solutions
            </p>
            <Link
              href="/track"
              className="btn btn-lg ripple"
              style={{
                backgroundColor: "#f97316",
                border: "none",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "30px",
              }}
            >
              🚀 Track Now
            </Link>
          </div>
        </section>

        <hr className="divider-orange" />

        {/* Track Section
        <section className="py-5" id="track">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-5">
                <i className="fa fa-search me-3" style={{ color: theme.primary }}></i>
                Track Your Shipment
              </h2>
              <p className="section-subtitle">Enter your tracking ID to get real-time updates</p>
            </div>
            
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-8">
                <form onSubmit={handleTrackSubmit} className="card-clean">
                  <div className="row g-3 align-items-end">
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="🚚 Enter your tracking ID..."
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="col-md-4">
                      <button 
                        type="submit" 
                        className="btn btn-orange w-100 ripple" 
                        onClick={createRipple}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <><div className="loading-spinner me-2 d-inline-block"></div>Tracking...</>
                        ) : (
                          <><i className="fa fa-search me-2"></i>Track Now</>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-orange" /> */}

        {/* Quote Section */}
        {/* <section className="py-5 bg-white" id="quote">
          <div className="container">
            <div className="text-center mb-5" data-aos="zoom-in">
              <h2 className="section-title display-5">Get Instant Quote</h2>
              <p className="section-subtitle">Fast and transparent pricing for your shipments</p>
            </div>
            
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-10">
                <form className="card-clean">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <label className="fw-bold mb-2" style={{ color: theme.navy }}>
                        <i className="fa fa-map-marker-alt me-2" style={{ color: theme.primary }}></i>
                        Pickup Location
                      </label>
                      <input type="text" className="form-control" placeholder="📍 Enter pickup address..." />
                    </div>
                    <div className="col-md-4">
                      <label className="fw-bold mb-2" style={{ color: theme.navy }}>
                        <i className="fa fa-flag me-2" style={{ color: theme.secondary }}></i>
                        Delivery Location
                      </label>
                      <input type="text" className="form-control" placeholder="🏁 Enter delivery address..." />
                    </div>
                    <div className="col-md-4">
                      <label className="fw-bold mb-2" style={{ color: theme.navy }}>
                        <i className="fa fa-weight me-2" style={{ color: theme.primary }}></i>
                        Package Weight
                      </label>
                      <input type="number" className="form-control" placeholder="⚖️ Weight in kg..." />
                    </div>
                    <div className="col-12 text-center mt-4">
                      <div className="d-flex flex-wrap justify-content-center gap-3">
                        <button className="btn btn-orange ripple" onClick={createRipple}>
                          <i className="fa fa-calculator me-2"></i>Get Instant Quote
                        </button>
                        <button type="button" className="btn btn-outline-orange ripple">
                          <i className="fa fa-phone me-2"></i>Call for Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-orange" /> */}

        {/* Why Choose Us Section */}
        <section className="py-5" id="info">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4">Why Choose Quora Cargo?</h2>
              <p className="section-subtitle">Discover what makes us the preferred logistics partner</p>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-card">
                  <div className="mb-4">
                    <i className="fa fa-shipping-fast fa-4x" style={{ color: theme.primary }}></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: theme.navy }}>Lightning Fast Delivery</h4>
                  <p className="text-muted mb-4">🚀 On-time delivery with real-time GPS tracking and instant notifications</p>
                  <div className="d-flex justify-content-center gap-2">
                    <span className="badge-orange">Same Day</span>
                    <span className="badge-light">24/7 Support</span>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-card">
                  <div className="mb-4">
                    <i className="fa fa-shield-alt fa-4x" style={{ color: theme.secondary }}></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: theme.navy }}>Ultra Secure Tracking</h4>
                  <p className="text-muted mb-4">🔐 Advanced security with AI monitoring and blockchain verification</p>
                  <div className="d-flex justify-content-center gap-2">
                    <span className="badge-orange">AI Powered</span>
                    <span className="badge-light">Blockchain</span>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-card">
                  <div className="mb-4">
                    <i className="fa fa-dollar-sign fa-4x" style={{ color: theme.primary }}></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: theme.navy }}>Best Price Guarantee</h4>
                  <p className="text-muted mb-4">💰 Transparent pricing with price matching and bulk discounts</p>
                  <div className="d-flex justify-content-center gap-2">
                    <span className="badge-orange">Price Match</span>
                    <span className="badge-light">No Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-orange" />

        {/* Stats Section */}
        <section className="py-5 bg-white" id="facts">
          <div className="container">
            <div className="text-center mb-5" data-aos="zoom-in">
              <h2 className="section-title display-5">Amazing Facts</h2>
              <p className="section-subtitle">#1 Place To Manage All Your Shipments</p>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="stats-card">
                  <i className="fa fa-users fa-3x mb-3"></i>
                  <h2 className="fw-bold mb-2">{clients.toLocaleString()}+</h2>
                  <p className="mb-0 fw-semibold">😊 Happy Clients</p>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="stats-card">
                  <i className="fa fa-boxes fa-3x mb-3"></i>
                  <h2 className="fw-bold mb-2">{shipments.toLocaleString()}+</h2>
                  <p className="mb-0 fw-semibold">📦 Packages Delivered</p>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="stats-card">
                  <i className="fa fa-star fa-3x mb-3"></i>
                  <h2 className="fw-bold mb-2">{reviews.toLocaleString()}+</h2>
                  <p className="mb-0 fw-semibold">⭐ 5-Star Reviews</p>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="stats-card">
                  <i className="fa fa-globe fa-3x mb-3"></i>
                  <h2 className="fw-bold mb-2">{countries}+</h2>
                  <p className="mb-0 fw-semibold">🌍 Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-orange" />

        {/* Services Section */}
        <section className="py-5" id="services">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4">Our Premium Services</h2>
              <p className="section-subtitle">Explore our comprehensive logistics solutions</p>
            </div>
            
            <div className="row g-4">
              {[
                { icon: 'fa-plane', title: 'Air Freight', desc: '✈️ Fast international shipping worldwide', badge1: 'Express', badge2: '24hrs' },
                { icon: 'fa-ship', title: 'Ocean Freight', desc: '🚢 Cost-effective bulk shipping', badge1: 'Bulk', badge2: 'Economy' },
                { icon: 'fa-truck', title: 'Road Freight', desc: '🚛 Reliable ground transportation', badge1: 'Local', badge2: 'Fast' },
                { icon: 'fa-train', title: 'Train Freight', desc: '🚆 Eco-friendly rail transport', badge1: 'Eco', badge2: 'Green' },
                { icon: 'fa-file-alt', title: 'Customs Clearance', desc: '📋 Expert documentation services', badge1: 'Expert', badge2: 'Legal' },
                { icon: 'fa-warehouse', title: 'Warehouse Solutions', desc: '🏭 Secure storage solutions', badge1: 'Secure', badge2: 'Storage' }
              ].map((service, idx) => (
                <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="service-card text-center">
                    <div className="mb-4">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{ 
                          width: '80px', 
                          height: '80px', 
                          background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                        }}
                      >
                        <i className={`fa ${service.icon} fa-2x text-white`}></i>
                      </div>
                      <h4 className="fw-bold mb-3" style={{ color: theme.navy }}>{service.title}</h4>
                      <p className="text-muted mb-4">{service.desc}</p>
                      <div className="d-flex justify-content-center gap-2 mb-3">
                        <span className="badge-orange">{service.badge1}</span>
                        <span className="badge-light">{service.badge2}</span>
                      </div>
                      <button className="btn btn-outline-orange btn-sm">Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider-orange" />

        {/* Features Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <h6 className="text-uppercase fw-bold mb-3" style={{ color: theme.primary }}>Our Features</h6>
                <h2 className="section-title mb-4">We Are Trusted Logistics Company Since 1990</h2>
                
                <div className="d-flex mb-4">
                  <i className="fa fa-globe fa-2x me-4" style={{ color: theme.primary }}></i>
                  <div>
                    <h5 className="fw-bold" style={{ color: theme.navy }}>Worldwide Service</h5>
                    <p className="text-muted mb-0">Global coverage with reliable delivery network spanning across all continents.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <i className="fa fa-shipping-fast fa-2x me-4" style={{ color: theme.primary }}></i>
                  <div>
                    <h5 className="fw-bold" style={{ color: theme.navy }}>On Time Delivery</h5>
                    <p className="text-muted mb-0">99.9% on-time delivery rate with advanced tracking and route optimization.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-0">
                  <i className="fa fa-headphones fa-2x me-4" style={{ color: theme.primary }}></i>
                  <div>
                    <h5 className="fw-bold" style={{ color: theme.navy }}>24/7 Telephone Support</h5>
                    <p className="text-muted mb-0">Round-the-clock customer support for all your logistics needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6" data-aos="fade-left">
                <div className="position-relative">
                  <img className="img-fluid rounded-4 shadow" src="img/feature.jpg" alt="Features" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-orange" />

        {/* Pricing Section */}
        {/* <section className="py-5 bg-white" id="pricing">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4">Perfect Pricing Plan</h2>
              <p className="section-subtitle">Choose the plan that fits your shipping needs</p>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card-clean text-center h-100">
                  <div className="mb-4">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                      }}
                    >
                      <i className="fa fa-box fa-lg text-white"></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: theme.primary }}>Basic Plan</h4>
                    <div className="mb-4">
                      <span className="display-4 fw-bold" style={{ color: theme.navy }}>$49</span>
                      <span className="text-muted">/month</span>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Up to 50 shipments</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Basic tracking</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Email support</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Standard delivery</li>
                  </ul>
                  
                  <button className="btn btn-outline-orange w-100 ripple">Choose Plan</button>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card-clean text-center h-100 position-relative" style={{ border: `3px solid ${theme.primary}` }}>
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge-orange">POPULAR</span>
                  </div>
                  
                  <div className="mb-4 mt-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        background: `linear-gradient(135deg, ${theme.secondary}, ${theme.dark})`
                      }}
                    >
                      <i className="fa fa-rocket fa-lg text-white"></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: theme.primary }}>Standard Plan</h4>
                    <div className="mb-4">
                      <span className="display-4 fw-bold" style={{ color: theme.navy }}>$99</span>
                      <span className="text-muted">/month</span>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Up to 200 shipments</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Advanced tracking</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Priority support</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Express delivery</li>
                  </ul>
                  
                  <button className="btn btn-orange w-100 ripple" onClick={createRipple}>Choose Plan</button>
                </div>
              </div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card-clean text-center h-100">
                  <div className="mb-4">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        background: `linear-gradient(135deg, ${theme.navy}, #475569)`
                      }}
                    >
                      <i className="fa fa-crown fa-lg text-white"></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: theme.primary }}>Premium Plan</h4>
                    <div className="mb-4">
                      <span className="display-4 fw-bold" style={{ color: theme.navy }}>$149</span>
                      <span className="text-muted">/month</span>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Unlimited shipments</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Real-time tracking</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>24/7 phone support</li>
                    <li className="mb-2"><i className="fa fa-check me-2" style={{ color: theme.primary }}></i>Same-day delivery</li>
                  </ul>
                  
                  <button className="btn btn-light-orange w-100 ripple">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider-orange" /> */}

        {/* Team Section */}
        <section className="py-5" id="team">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4">Expert Team Members</h2>
              <p className="section-subtitle">Meet the professionals behind our success</p>
            </div>
            
            <div className="row g-4">
              {[
                { img: 'img/team-1.jpg', name: 'John Smith', role: 'CEO & Founder' },
                { img: 'img/team-2.jpg', name: 'Sarah Johnson', role: 'Operations Manager' },
                { img: 'img/team-3.jpg', name: 'Mike Davis', role: 'Logistics Director' },
                { img: 'img/team-4.jpg', name: 'Emily Brown', role: 'Customer Success' }
              ].map((member, idx) => (
                <div key={idx} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="service-card text-center">
                    <div className="mb-4">
                      <img className="img-fluid rounded-circle mb-3" src={member.img} alt={member.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      <h5 className="fw-bold mb-1" style={{ color: theme.navy }}>{member.name}</h5>
                      <p className="mb-3" style={{ color: theme.primary }}>{member.role}</p>
                      <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-light-orange btn-sm">
                          <i className="fab fa-linkedin"></i>
                        </button>
                        <button className="btn btn-light-orange btn-sm">
                          <i className="fab fa-twitter"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider-orange" />

        {/* Testimonials Section */}
        <section className="py-5 bg-white" id="testimonials">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4">What Our Clients Say</h2>
              <p className="section-subtitle">Hear from our satisfied customers</p>
            </div>
            
            <div className="row g-4">
              {[
                { name: 'John Doe', role: 'CEO, Tech Corp', review: 'SwiftShip has revolutionized our logistics operations. Their service is outstanding and reliable.', rating: 5 },
                { name: 'Sarah Lee', role: 'Manager, Retail Inc', review: 'Excellent service and tracking. My packages always arrive on time and in perfect condition.', rating: 5 },
                { name: 'Mike Wilson', role: 'Director, Global LLC', review: 'The best logistics partner we have ever worked with. Highly professional and efficient.', rating: 5 },
                { name: 'Emma Davis', role: 'Owner, Boutique Co', review: 'Amazing customer support and competitive pricing. SwiftShip exceeded all our expectations.', rating: 5 }
              ].map((testimonial, idx) => (
                <div key={idx} className="col-lg-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="service-card">
                    <div className="d-flex align-items-center mb-3">
                      <img 
                        className="rounded-circle me-3" 
                        src={`img/testimonial-${idx + 1}.jpg`} 
                        alt={testimonial.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: theme.navy }}>{testimonial.name}</h6>
                        <p className="mb-0 small" style={{ color: theme.primary }}>{testimonial.role}</p>
                      </div>
                      <i className="fa fa-quote-right fa-2x ms-auto" style={{ color: theme.accent }}></i>
                    </div>
                    <p className="text-muted mb-3">{testimonial.review}</p>
                    <div className="d-flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fa fa-star" style={{ color: '#fbbf24' }}></i>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className="divider-orange" />

        {/* Contact Section */}
        <section className="py-5" id="contact">
          <div className="container">
            <div className="text-center mb-5" data-aos="zoom-in">
              <h2 className="section-title display-4">Contact Us</h2>
              <p className="section-subtitle">We're here to help with all your shipping needs</p>
            </div>
            
            <div className="row g-5 align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="card-clean">
                  <h4 className="fw-bold mb-4" style={{ color: theme.navy }}>Get in Touch</h4>
                  <p className="text-muted mb-4">Ready to streamline your logistics? Contact our experts today.</p>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        background: theme.primary
                      }}
                    >
                      <i className="fa fa-phone text-white"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: theme.navy }}>24/7 Support</h6>
                      <p className="mb-0" style={{ color: theme.primary, fontWeight: '600' }}>+012 345 6789</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        background: theme.secondary
                      }}
                    >
                      <i className="fa fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: theme.navy }}>Email Us</h6>
                      <p className="mb-0" style={{ color: theme.secondary, fontWeight: '600' }}>support@swiftship.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-7" data-aos="fade-left">
                <form className="card-clean">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="fw-bold mb-2" style={{ color: theme.navy }}>Your Name</label>
                      <input type="text" className="form-control" placeholder="Enter your full name" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold mb-2" style={{ color: theme.navy }}>Your Email</label>
                      <input type="email" className="form-control" placeholder="Enter your email address" />
                    </div>
                    <div className="col-12">
                      <label className="fw-bold mb-2" style={{ color: theme.navy }}>Your Message</label>
                      <textarea className="form-control" rows="5" placeholder="Tell us how we can help you"></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-orange w-100 ripple" onClick={createRipple}>
                        <i className="fa fa-paper-plane me-2"></i>Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
