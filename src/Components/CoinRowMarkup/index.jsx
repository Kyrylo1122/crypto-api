// import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { Box } from "../Box";
import { isTrendGoUp } from "../IconTrend";
import PriceChange from "../PriceChange";
import { toFixPrice } from "../Tools";
import { CoinLink, CoinName } from "./index.style";

export default function CoinRowMarkup({ coin }) {
  const {
    name,
    market_cap_rank,
    image,
    current_price,
    price_change_24h,
    market_cap,
  } = coin;

  const changedPrice = toFixPrice(price_change_24h);

  return (
    <>
      <td>{market_cap_rank}</td>

      <td>
        <CoinLink to={`/${coin.id}`} location={coin.id}>
          <Box display="flex" alignItems="center">
            <img src={image} alt={name} width="50px" />
            <CoinName> {name}</CoinName>
          </Box>
        </CoinLink>
      </td>
      <td>{current_price}$</td>
      <td>
        <PriceChange price={changedPrice} sign="$" />
      </td>

      <td>$ {market_cap} </td>
    </>
  );
}
