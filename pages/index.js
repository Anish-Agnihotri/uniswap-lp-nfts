import { useState } from "react"; // State management
import Layout from "components/Layout"; // Layout wrapper
import generateSVG from "utils/NFTSVG"; // SVG rendering utils
import styles from "styles/Home.module.scss"; // Page styles

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
				<div>
					<h4>Colors</h4>
					{[
						{ name: "Color 0", value: color0, setter: setColor0 },
						{ name: "Color 1", value: color1, setter: setColor1 },
						{ name: "Color 2", value: color2, setter: setColor2 },
						{ name: "Color 3", value: color3, setter: setColor3 },
					].map((fields, i) => {
						return (
							<input
								key={i}
								type="text"
								value={fields.value}
								onChange={(e) => fields.setter(e.target.value)}
								placeholder={fields.name}
							/>
						);
					})}
					<h4>X/Y Background Positions</h4>
					{[
						{ name: "X1 Position", value: x1, setter: setX1 },
						{ name: "Y1 Position", value: y1, setter: setY1 },
						{ name: "X2 Position", value: x2, setter: setX2 },
						{ name: "Y2 Position", value: y2, setter: setY2 },
						{ name: "X3 Position", value: x3, setter: setX3 },
						{ name: "Y3 Position", value: y3, setter: setY3 },
					].map((fields, i) => {
						return (
							<input
								key={i}
								type="number"
								value={fields.value}
								onChange={(e) => fields.setter(e.target.value)}
								placeholder={fields.name}
							/>
						);
					})}
				</div>

				<h3>Rarity</h3>
				<p>Configure rarity and token ID.</p>
				<div>
					<button onClick={() => setIsRare((previous) => !previous)}>
						Toggle Rare
					</button>
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
					{[
						{
							name: "Base Token Symbol (WETH)",
							value: baseTokenSymbol,
							setter: setBaseTokenSymbol,
							number: false,
						},
						{
							name: "Quote Token Symbol (UNI)",
							value: quoteTokenSymbol,
							setter: setQuoteTokenSymbol,
							number: false,
						},
						{
							name: "Base Token Address",
							value: baseToken,
							setter: setBaseToken,
							number: false,
						},
						{
							name: "Quote Token Address",
							value: quoteToken,
							setter: setQuoteToken,
							number: false,
						},
						{
							name: "Upper Tick",
							value: tickUpper,
							setter: setTickUpper,
							number: true,
						},
						{
							name: "Lower Tick",
							value: tickLower,
							setter: setTickLower,
							number: true,
						},
						{
							name: "Tick Spacing",
							value: tickSpacing,
							setter: setTickSpacing,
							number: true,
						},
						{
							name: "Fee Tier",
							value: feeTier,
							setter: setFeeTier,
							number: true,
						},
					].map((fields, i) => {
						return (
							<input
								key={i}
								type={fields.number ? "number" : "text"}
								value={fields.value}
								onChange={(e) => fields.setter(e.target.value)}
								placeholder={fields.name}
							/>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}
