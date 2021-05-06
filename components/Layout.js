import Head from "next/head"; // Html head
import styles from "styles/Layout.module.scss"; // Component styles

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<link
					rel="preload"
					href="/fonts/CourierNew.ttf"
					as="font"
					type="font/ttf"
					crossOrigin="anonymous"
				/>
			</Head>

			{/* Header content */}
			<div className={styles.layout__header}>
				<img src="/vectors/logo.svg" alt="Uniswap logo" />
				<h1>LP Art Generator</h1>
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
