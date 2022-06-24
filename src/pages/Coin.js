import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CryptoContext from "../contexts/CurrencyContext";
import { getSingleCoin } from "../utils/api";
import CoinSidebar from "../components/CoinSidebar";
import CoinInfo from "../components/CoinInfo";
import ResponsiveContainer from "../components/shared/ResponsiveContainer";

const Coin = () => {
  const { coinId } = useParams();

  const [coin, setCoin] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { currency, symbol } = useContext(CryptoContext);

  useEffect(() => {
    axios.get(getSingleCoin(coinId)).then((res) => {
      setCoin(res.data);
      setLoaded(true);
    });
  }, [coinId]);

  useEffect(() => {
    document.title = `${coinId
      .split("-")
      .join(" ")
      .toUpperCase()} | Crypto Tracker`;
  }, [coinId]);

  return (
    <ResponsiveContainer>
      {loaded && (
        <CoinSidebar coin={coin} currency={currency} symbol={symbol} />
      )}
      {loaded && <CoinInfo coin={coin} currency={currency} symbol={symbol} />}
    </ResponsiveContainer>
  );
};

export default Coin;
