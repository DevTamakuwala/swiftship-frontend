import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Breadcrumbs() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  // Generate structured data for breadcrumbs
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pathSegments.map((segment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      "item": `https://www.quoracargo.com/${pathSegments.slice(0, index + 1).join('/')}`
    }))
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="py-2 px-3 bg-light rounded">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          {pathSegments.map((segment, index) => (
            <li
              key={segment}
              className={`breadcrumb-item ${
                index === pathSegments.length - 1 ? 'active' : ''
              }`}
            >
              {index === pathSegments.length - 1 ? (
                <span>{segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}</span>
              ) : (
                <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                  <span>{segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
