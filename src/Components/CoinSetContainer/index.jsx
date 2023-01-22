import { useEffect, useState, useMemo } from "react";
import TableCoinSet from "../TableCoinSet";
import { getCoins } from "../API";
import React from "react";
import { LoadMoreBtn } from "./index.styled";
import Loader from "../Loader";

export default function CoinSetContainer() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCoins(page)
      .then((coins) => setCoins((prevCoins) => [...prevCoins, ...coins]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [page]);
  if (loading) {
    return <Loader />;
  }
  // if (!coins.length) {
  //   return;
  // }
  return (
    <section className="CoinSetContainer">
      <TableCoinSet coins={coins} />
      <LoadMoreBtn
        type="button"
        onClick={() => {
          setPage((currentPage) => currentPage + 1);
        }}
      >
        Load more
      </LoadMoreBtn>
    </section>
  );
}
