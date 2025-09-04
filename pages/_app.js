// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="canonical" href="https://www.quoracargo.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
