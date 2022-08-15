import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'ecoBantu Solutions (Pty) Ltd is a South African Level-1 BBBEE Company that supplies and does install solar panel systems for its clients. We are gradually expanding our product range to include solar generators and the like.',
  author = 'Marothi Codes',
  meta,
  title = 'ecoBantu Solutions (Pty) Ltd',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en-za`,
  meta: [],
};
