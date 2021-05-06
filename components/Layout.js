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

			<div className={styles.layout__header}>
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
					</a>
				</p>
			</div>
			<div>{children}</div>
		</div>
	);
}
