import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { brand, seo } from '../../data/siteData';

/**
 * Per-page document head: title, meta description, canonical, Open Graph and
 * Twitter tags. Falls back to the site defaults when a prop is omitted.
 *
 * `title` is appended with the brand; pass `bare` to use it verbatim.
 */
export default function Seo({
  title,
  description,
  image,
  type = 'website',
  noindex = false,
  bare = false,
}) {
  const { pathname } = useLocation();

  const fullTitle = title
    ? bare
      ? title
      : `${title} | ${brand.name}`
    : seo.defaultTitle;

  const metaDescription = description || seo.defaultDescription;
  const canonical = `${seo.siteUrl}${pathname === '/' ? '' : pathname}`;
  const ogImage = image || `${seo.siteUrl}${seo.defaultImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
