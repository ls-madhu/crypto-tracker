import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import numberWithCommas from "../../utils/numberWithCommas";
import Sidebar from "./Sidebar";

const CoinSidebar = ({ coin, currency, symbol }) => {
  return (
    <Sidebar>
      <Image src={coin.image.large} />
      <Heading>{coin.name}</Heading>
      <Description>{parse(coin.description.en.split(". ")[0])}</Description>
      <CoinData>
        <h3>Rank: {coin.market_cap_rank}</h3>
        <h3>
          Current Price: {symbol}
          {numberWithCommas(coin.market_data.current_price[currency])}
        </h3>
        <h3>
          {" "}
          Market Cap: {symbol}
          {numberWithCommas(coin.market_data.market_cap[currency])}
        </h3>
      </CoinData>
    </Sidebar>
  );
};

const Image = styled.img`
  max-width: 200px;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 1.2rem;
  padding: 10px 20px;
  color: var(--secondary-text-color);
  max-width: 30rem;

  a {
    color: #04f;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const CoinData = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--secondary-text-color);

  h3 {
    font-size: 1.3rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 0;
  }
`;

export default CoinSidebar;
