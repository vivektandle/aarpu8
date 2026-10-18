import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Aarpu | Award-Winning Minimal Aluminium Doors & Windows',
  description = 'Aarpu manufactures ultra-minimal aluminium sliding doors, invisible frames, casement windows and glass curtain walls for luxury architectural villas and towers.',
  keywords = 'Aarpu, aluminium doors, minimal sliding doors, invisible frame, architectural glass, luxury windows, curtain wall, Orama minimal frames, zero threshold sliding door',
  canonicalUrl = 'https://aarpu-architecture.com',
  type = 'website'
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Aarpu Architectural Aluminium',
    'url': canonicalUrl,
    'logo': `${canonicalUrl}/logo.png`,
    'description': description,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Industrial Park West 14',
      'addressLocality': 'Zurich',
      'postalCode': '8005',
      'addressCountry': 'Switzerland'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+41-44-892-1000',
      'contactType': 'customer service',
      'availableLanguage': ['English', 'German', 'French']
    }
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Aarpu Architectural Aluminium" />

      {/* Twitter Cards Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org JSON-LD Markup */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
}
