import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";

import CurrencyContext from "../../contexts/CurrencyContext";
import { getTrendingCoins } from "../../utils/api";
import numberWithCommas from "../../utils/numberWithCommas";

import "react-alice-carousel/lib/alice-carousel.css";
import { CircularProgress } from "@mui/material";

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
  1024: {
    items: 6,
  },
};

const CarouselItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
`;

const CarouselImage = styled.img`
  max-width: 6rem;
  height: auto;
  margin-bottom: 1rem;
`;

const CarouselProfit = styled.span`
  font-weight: 700;
  color: ${({ profit }) => (profit ? "green" : "red")};
`;

const CarouselImageText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Carousel = () => {
  const { currency, symbol } = useContext(CurrencyContext);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(getTrendingCoins(currency)).then((res) => {
      setTrendingCoins(res.data);
      setLoading(false);
    });
  }, [currency]);
  const items = trendingCoins.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <CarouselItem to={`/coins/${coin.id}`}>
        <CarouselImage src={coin.image} alt={coin.name} />
        <span>
          {coin.symbol} &nbsp;{" "}
          <CarouselProfit profit={profit}>
            {profit && "+"} {coin.price_change_percentage_24h}%
          </CarouselProfit>
        </span>
        <CarouselImageText>
          {symbol}
          {numberWithCommas(coin.current_price.toFixed(2))}
        </CarouselImageText>
      </CarouselItem>
    );
  });

  return loading ? (
    <CircularProgress color="inherit" />
  ) : (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay
      items={items}
    />
  );
};

export default Carousel;
