import Layout from "components/Layout";
import generateSVG from "../utils/NFTSVG";

/*const getMinTick = (tickSpacing) =>
	Math.ceil(-887272 / tickSpacing) * tickSpacing;
const getMaxTick = (tickSpacing) =>
	Math.floor(887272 / tickSpacing) * tickSpacing;*/

/*
TODO:
1. Selectors
2. Meta
3. Better background
4. Mobile responsive
5. Font
6. Download
*/
export default function Home() {
	const NFTParamsExtended = {
		quoteToken: "0x1234567890123456789123456789012345678901",
		baseToken: "0xabcdeabcdefabcdefabcdefabcdefabcdefabcdf",
		poolAddress: "",
		quoteTokenSymbol: "UNI",
		baseTokenSymbol: "WETH",
		feeTier: "0.05%",
		tickLower: -1000,
		tickUpper: 2000,
		tickSpacing: 60,
		overRange: "",
		tokenId: 123,
		color0: "123456",
		color1: "abcdea",
		color2: "678901",
		color3: "fabcdf",
		x1: 192,
		y1: 325,
		x2: 243,
		y2: 362,
		x3: 37,
		y3: 131,
		isRare: true,
	};

	return (
		<Layout>
			<div
				className="injected_svg"
				dangerouslySetInnerHTML={{ __html: generateSVG(NFTParamsExtended) }}
			/>
		</Layout>
	);
}
