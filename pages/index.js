import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';

export default function index() {
  return (
    <div>
      <Head>
        <title>UI Developer | portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body>
        <Layout>
          <Home />
        </Layout>
      </body>
    </div>
  )
}
