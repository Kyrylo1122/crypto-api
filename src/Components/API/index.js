import axios from "axios";

export async function getCoins(page) {
  try {
    const response = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCoinInfo(coin) {
  try {
    const response = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getCoinPrice(coin, time) {
  try {
    const response = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${time}
`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
