import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinInfo, getCoinPrice } from "../API";
import { Box } from "../Box";

import { Chart } from "../Chart";
import Container from "../Container";
import TimeChartButtons from "../TimeChartButtons";
import MarketStats from "./MarketStats";
import { Span, Price, Title } from "./index.styled";

import Navigation from "./Navigation";
import Header from "../Header";
import Description from "./Description";
import Loader from "../Loader";

export default function CoinInfo() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [price, setPrice] = useState(null);
  const [time, setTime] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getCoinInfo(id)
      .then((coin) => setCoin(coin))
      .catch(console.error)
      .finally(() => setLoading(false));

    return;
  }, []);

  useEffect(() => {
    console.log("Changed Time");
    setLoading(true);

    getCoinPrice(id, time)
      .then((price) => {
        setPrice(price.prices);
      })
      .catch(console.error)
      .finally(setLoading(false));

    return;
  }, [coin, time]);
  if (loading) {
    return <Loader />;
  }
  if (!coin || !price) {
    return <Loader />;
  }

  const {
    name,
    image,
    symbol,
    description,
    market_data: { current_price },
  } = coin;

  return (
    <Box as="main">
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Box
          as="section"
          id="Market"
          p="200px 0 "
          display="flex"
          justifyContent="space-around"
        >
          <Box flex={1}>
            <Title>
              {name} <Span>{symbol.toUpperCase()}</Span>
            </Title>
            <Price>
              Current price:<span>{current_price.usd}$</span>
            </Price>
            <img src={image.large} alt={name} />
          </Box>
          <Box borderLeft="1px solid var(--light-grey)" p="40px 0" flex={2}>
            <MarketStats coin={coin} />
          </Box>
        </Box>
        <Box
          as="section"
          p="100px 150px"
          id="Chart"
          display="flex"
          flexDirection="column"
        >
          <Chart prices={price} name={name} time={time} />
          <TimeChartButtons setTime={setTime} />
        </Box>

        <Box as="section" id="Description"></Box>
        <Description text={description.en} />
      </Container>
    </Box>
  );
}
