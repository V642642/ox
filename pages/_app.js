import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./componants/footer/Footer"));

const CallNow = dynamic(() => import("./componants/CallNow/callnow"),{
  ssr: false
});

import Header from "./componants/Navbar/Header";

function MyApp({ Component, pageProps }) 

  {
  return (
    <>
      <Head>
        <title>Oscenox</title>
        <meta name="description" content="Generated by create Oscenox" />
        <link rel="icon" type="image/x-icon" href="/public/image/logo.jp" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/image/favicon-16x16.png"
        />
        <link rel="manifest" href="/image/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      
      {/* Header */}
      <Header />
      <Component {...pageProps} />
      {/* Footer */}
      <div className="mt-5">
        <Footer />
      </div>
      <CallNow />
    </>
  );
}

export default MyApp;
