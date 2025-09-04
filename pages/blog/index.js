import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import Link from 'next/link';

export default function BlogIndex() {
  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Logistics Services in Gujarat 2025',
      slug: 'logistics-services-gujarat-guide-2025',
      excerpt: 'Discover everything about modern logistics solutions in Gujarat, from express delivery to warehousing.',
      date: 'September 4, 2025',
      category: 'Industry Insights'
    },
    {
      id: 2,
      title: 'How Milk-Run Logistics is Transforming Supply Chains in India',
      slug: 'milk-run-logistics-india-transformation',
      excerpt: 'Learn how milk-run logistics is helping businesses optimize their supply chain and reduce costs.',
      date: 'September 3, 2025',
      category: 'Supply Chain'
    },
    {
      id: 3,
      title: 'E-commerce Logistics: Surats Growing Demands and Solutions',
      slug: 'ecommerce-logistics-surat-solutions',
      excerpt: 'Exploring the booming e-commerce logistics sector in Surat and innovative solutions.',
      date: 'September 2, 2025',
      category: 'E-commerce'
    }
  ];

  return (
    <>
      <Head>
        <title>Logistics & Cargo Industry Insights | Quora Cargo Blog</title>
        <meta 
          name="description" 
          content="Expert insights on logistics, supply chain management, and cargo services in Gujarat. Latest trends, tips, and industry updates from Quora Cargo's logistics experts."
        />
        <meta 
          name="keywords" 
          content="logistics blog, cargo industry insights, supply chain management, logistics tips, cargo services gujarat, shipping guides"
        />
      </Head>

      <Header />
      <Breadcrumbs />

      <main className="container my-5">
        <h1 className="text-primary mb-4">Logistics & Cargo Industry Insights</h1>
        
        <div className="row g-4">
          {blogPosts.map(post => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <article className="card h-100 shadow-sm hover-shadow transition">
                <div className="card-body">
                  <div className="mb-2">
                    <span className="badge bg-primary">{post.category}</span>
                  </div>
                  <h2 className="h5 card-title">
                    <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="card-text">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{post.date}</small>
                    <Link href={`/blog/${post.slug}`} className="btn btn-sm btn-outline-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
        .transition {
          transition: all .3s ease;
        }
      `}</style>
    </>
  );
}
