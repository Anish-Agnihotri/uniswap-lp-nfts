import Head from "next/head"; // Html head
import styles from "styles/Layout.module.scss"; // Component styles

export default function Layout({ children }) {
  return (
    <div>
      {/* Meta + Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Uniswap LP Art</title>
        <meta name="title" content="Uniswap LP Art" />
        <meta
          name="description"
          content="Explore and manipulate the art behind Uniswap's Liquidity Provider Non-Fungible Token positions."
        />

        {/* Open Graph + Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniswaplpart.com/" />
        <meta property="og:title" content="Uniswap LP Art" />
        <meta
          property="og:description"
          content="Explore and manipulate the art behind Uniswap's Liquidity Provider Non-Fungible Token positions."
        />
        <meta
          property="og:image"
          content="https://uniswaplpart.com/images/meta.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://uniswaplpart.com" />
        <meta property="twitter:title" content="Uniswap LP Art" />
        <meta
          property="twitter:description"
          content="Explore and manipulate the art behind Uniswap's Liquidity Provider Non-Fungible Token positions."
        />
        <meta
          property="twitter:image"
          content="https://uniswaplpart.com/images/meta.png"
        />

        {/* Font preload */}
        <link
          rel="preload"
          href="/fonts/CourierNew.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Header content */}
      <div className={styles.layout__header}>
        <img src="/vectors/logo.svg" alt="Uniswap logo" />
        <h1>Uniswap LP Art</h1>
        <p>
          Quick{" "}
          <a
            href="https://github.com/anish-agnihotri/uniswap-lp-nfts"
            target="_blank"
            rel="noopener noreferrer"
          >
            side project
          </a>{" "}
          by{" "}
          <a
            href="https://anishagnihotri.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anish
          </a>{" "}
          to showcase the incredible work by{" "}
          <a
            href="https://etherscan.io/address/0xe8ab59d3bcde16a29912de83a90eb39628cfc163"
            target="_blank"
            rel="noopener noreferrer"
          >
            0xe8...c163
          </a>
          ,{" "}
          <a
            href="https://twitter.com/_callil"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_callil
          </a>
          , and{" "}
          <a
            href="https://twitter.com/crypt0glitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            @crypt0glitter
          </a>
          .
        </p>
      </div>

      {/* Content */}
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
}
