import { useState } from "react"; // State management
import Layout from "components/Layout"; // Layout wrapper
import generateSVG from "utils/NFTSVG"; // SVG rendering utils
import { HuePicker } from "react-color"; // Color picker
import styles from "styles/Home.module.scss"; // Page styles

// Constant: token name and address mapping
const TOKENS = [
  { name: "DAI", address: "0x6b175474e89094c44da98b954eedeac495271d0f" },
  { name: "USDC", address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" },
  { name: "WETH", address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" },
  { name: "AAVE", address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9" },
  { name: "BADGER", address: "0x3472a5a71965499acd81997a54bba8d852c6e53d" },
  { name: "COMP", address: "0xc00e94cb662c3520282e6f5717214004a7f26888" },
  { name: "CRV", address: "0xd533a949740bb3306d119cc777fa900ba034cd52" },
  { name: "MKR", address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2" },
  { name: "POOL", address: "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e" },
  { name: "REN", address: "0x408e41876cccdc0f92210600ef50372656052a38" },
  { name: "SOCKS", address: "0x23b608675a2b2fb1890d3abbd85c5775c51691d5" },
  { name: "SUSHI", address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2" },
  { name: "TORN", address: "0x77777feddddffc19ff86db637967013e6c6a116c" },
  { name: "UMA", address: "0x04fa0d235c4abf4bcf4787af4cf447de572ef828" },
  { name: "UNI", address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984" },
];

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
  const [tickUpper, setTickUpper] = useState(3000);
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

  // Prepare data object
  const NFTData = {
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
  };

  /**
   * Selects random item from array based on array length
   * @param {type[]} array containing items
   * @returns arrayItem
   */
  const selectRandomItemFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Tick spacing calculations from Uniswap test suite
  const getMinTick = (tickSpacing) =>
    Math.ceil(-887272 / tickSpacing) * tickSpacing;
  const getMaxTick = (tickSpacing) =>
    Math.floor(887272 / tickSpacing) * tickSpacing;

  /**
   * Randomizes all NFT parameters based on their type
   */
  const randomizeNFT = () => {
    // Background positions
    for (const positionSetter of [setX1, setX2, setX3, setY1, setY2, setY3]) {
      // Select random position between 0 -> 501
      positionSetter(Math.floor(Math.random() * 501));
    }

    // Colors
    for (const colorSetter of [setColor0, setColor1, setColor2, setColor3]) {
      // Generate random hex colors
      colorSetter(Math.floor(Math.random() * 16777215).toString(16));
    }

    // Rarity chance based on tokenId (this is not accurate to spec but close)
    const tokenId = Math.floor(Math.random() * 100001);
    setTokenId(tokenId);
    setIsRare(
      // If tokenId is under 100
      tokenId <= 100
        ? // Apply 10% chance of getting a rare LP position
          Math.random() < 0.1
          ? true
          : false
        : // Else, apply a 0.03% chance
        Math.random() < 0.03
        ? true
        : false
    );

    // Fee tier
    setFeeTier(selectRandomItemFromArray([0.05, 0.1, 0.3]));

    // Ticks
    const tickSpacing = selectRandomItemFromArray([10, 60, 200]);
    setTickSpacing(tickSpacing);
    setTickUpper(Math.floor((Math.random() * getMaxTick(tickSpacing)) / 10));
    setTickLower(
      Math.floor((Math.random() * getMinTick(tickSpacing) * -1) / 10)
    );

    // Tokens
    const token0 = selectRandomItemFromArray(TOKENS);
    const token0OmittedTokens = TOKENS.filter(
      (token) => token.address != token0.address
    );
    const token1 = selectRandomItemFromArray(token0OmittedTokens);
    setBaseTokenSymbol(token0.name);
    setBaseToken(token0.address);
    setQuoteTokenSymbol(token1.name);
    setBaseToken(token1.address);
  };

  return (
    <Layout>
      {/* Generated SVG Art */}
      <div
        // Classname to apply font
        className={styles.home__svg}
        // Inject SVG to render
        dangerouslySetInnerHTML={{ __html: generateSVG(NFTData) }}
      />

      <div className={styles.home__random}>
        <button onClick={randomizeNFT}>Randomize</button>
      </div>

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
              <div key={i} className={styles.home__options_colors}>
                <HuePicker
                  color={`#${fields.value}`}
                  onChange={(color) => fields.setter(color.hex.substring(1))}
                />
              </div>
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
