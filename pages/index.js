import { useState } from "react"; // State management
import Layout from "components/Layout"; // Layout wrapper
import generateSVG from "utils/NFTSVG"; // SVG rendering utils
import styles from "styles/Home.module.scss"; // Page styles

/*const getMinTick = (tickSpacing) =>
	Math.ceil(-887272 / tickSpacing) * tickSpacing;
const getMaxTick = (tickSpacing) =>
	Math.floor(887272 / tickSpacing) * tickSpacing;*/

/*
TODO:
1. Selectors
2. Meta
4. Mobile responsive
6. Download
*/
export default function Home() {
	// State management (should refactor to object)
	const [x1, setX1] = useState(192);
	const [x2, setX2] = useState(243);
	const [x3, setX3] = useState(37);
	const [y1, setY1] = useState(362);
	const [y2, setY2] = useState(362);
	const [y3, setY3] = useState(131);
	const [isRare, setIsRare] = useState(true);
	const [tokenId, setTokenId] = useState(123);
	const [feeTier, setFeeTier] = useState(0.05);
	const [color0, setColor0] = useState("123456");
	const [color1, setColor1] = useState("abcdea");
	const [color2, setColor2] = useState("678901");
	const [color3, setColor3] = useState("fabcdf");
	const [tickUpper, setTickUpper] = useState(2000);
	const [tickLower, setTickLower] = useState(-1000);
	const [tickSpacing, setTickSpacing] = useState(60);
	const [baseTokenSymbol, setBaseTokenSymbol] = useState("WETH");
	const [quoteTokenSymbol, setQuoteTokenSymbol] = useState("UNI");
	const [quoteToken, setQuoteToken] = useState(
		"0x1234567890123456789123456789012345678901"
	);
	const [baseToken, setBaseToken] = useState(
		"0xabcdeabcdefabcdefabcdefabcdefabcdefabcdf"
	);

	return (
		<Layout>
			{/* Generated SVG Art */}
			<div
				// Classname to apply font
				className={styles.home__svg}
				// Inject SVG to render
				dangerouslySetInnerHTML={{
					__html: generateSVG({
						quoteToken,
						baseToken,
						quoteTokenSymbol,
						baseTokenSymbol,
						feeTier: `${feeTier}%`,
						tickLower,
						tickUpper,
						tickSpacing,
						overRange: "",
						tokenId,
						color0,
						color1,
						color2,
						color3,
						x1,
						x2,
						x3,
						y1,
						y2,
						y3,
						isRare,
					}),
				}}
			/>

			{/* Generated SVG options */}
			<div className={styles.home__options}>
				<h3>Colors</h3>
				<p>Configure colors and color positions.</p>
				<div></div>

				<h3>Rarity (isRare, tokenId)</h3>
				<p>Configure rarity and token ID.</p>
				<div>
					<input
						type="number"
						value={tokenId}
						onChange={(e) => setTokenId(e.target.value)}
						placeholder="Token ID"
					/>
				</div>

				<h3>General</h3>
				<p>Configure pair and curve details.</p>
				<div>
					<input
						type="text"
						placeholder="Base Token Symbol (WETH)"
						value={baseTokenSymbol}
						onChange={(e) => setBaseTokenSymbol(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Quote Token Symbol (UNI)"
						value={quoteTokenSymbol}
						onChange={(e) => setQuoteToken(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Base Token Address"
						value={baseToken}
						onChange={(e) => setBaseToken(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Quote Token Address"
						value={quoteToken}
						onChange={(e) => setQuoteToken(e.target.value)}
					/>
				</div>
				<p>tickUpper, tickLower, tickSpacing, quoteToken, baseToken, feeTier</p>
			</div>
		</Layout>
	);
}
