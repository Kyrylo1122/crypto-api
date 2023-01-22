import { Box } from "../../Box";
import { isTrendGoUp } from "../../IconTrend";
import PriceChange from "../../PriceChange";
import { toFixPercent } from "../../Tools";
import {
  MarketStatsTitle,
  MarketStatsItem,
  MarketStatsList,
} from "./index.styled";

export default function MarketStats({ coin }) {
  const {
    market_data: {
      market_cap,
      total_volume,
      circulating_supply,
      market_cap_rank,
      ath,
      price_change_percentage_7d,
      price_change_percentage_30d,
      price_change_percentage_1y,
    },
  } = coin;

  const price_7D = toFixPercent(price_change_percentage_7d);
  const price_30d = toFixPercent(price_change_percentage_30d);
  const price_1Year = toFixPercent(price_change_percentage_1y);
  const symbol = coin.symbol.toUpperCase();

  return (
    <>
      <MarketStatsTitle>Market stats</MarketStatsTitle>
      <MarketStatsList>
        <MarketStatsItem>
          POPULARITY <span>{market_cap_rank}#</span>
        </MarketStatsItem>
        <MarketStatsItem>
          MARKET CAP<span>{market_cap.usd}$</span>{" "}
        </MarketStatsItem>
        <MarketStatsItem>
          TOTAL VOLUME <span> {total_volume.usd}$</span>
        </MarketStatsItem>
        <MarketStatsItem>
          CIRCULATING SUPPLY
          <span>
            {circulating_supply} {symbol}
          </span>
        </MarketStatsItem>

        <MarketStatsItem>
          ALL TIME HIGH <span>{ath.usd} $</span>
        </MarketStatsItem>

        <MarketStatsItem>
          PRICE CHANGE (7 Days):
          <PriceChange price={price_7D} />
        </MarketStatsItem>
        <MarketStatsItem>
          PRICE CHANGE (30 Days)
          <PriceChange price={price_30d} />
        </MarketStatsItem>
        <MarketStatsItem>
          PRICE CHANGE (1 Year)
          <PriceChange price={price_1Year} />
        </MarketStatsItem>
      </MarketStatsList>
    </>
  );
}
