import Head from 'next/head'

export const GenericMeta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
