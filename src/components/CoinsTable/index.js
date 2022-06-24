import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { getCoinList } from "../../utils/api";
import CurrencyContext from "../../contexts/CurrencyContext";
import Search from "./Search";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "./Table";
import {
  CoinCardContainer,
  CoinImage,
  CoinInfoContainer,
  CoinName,
  CoinProfit,
  CoinSymbol,
} from "./CoinCard";
import numberWithCommas from "../../utils/numberWithCommas";
import Pagination from "../shared/Pagination";
import InvalidCoin from "./InvalidCoin";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
  margin-top: 6rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { currency, symbol } = useContext(CurrencyContext);

  useEffect(() => {
    setLoading(true);
    axios.get(getCoinList(currency)).then((res) => {
      setCoins(res.data);
      setFilteredCoins(res.data);
      setLoading(false);
    });
  }, [currency]);

  useEffect(() => {
    setFilteredCoins(
      coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search) ||
          coin.symbol.toLowerCase().includes(search)
      )
    );
    setPage(1);
  }, [search, coins]);

  useEffect(() => {}, [search]);

  return (
    <Container>
      <Heading>Cryptocurrency Prices by Market Capital</Heading>
      <Search
        placeholder="Search for Cryptocurrencies"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    key={head}
                    align={head === "Coin" ? "inherit" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {filteredCoins.length === 0 ? (
              <InvalidCoin>No Coins Found</InvalidCoin>
            ) : (
              <TableBody>
                {filteredCoins
                  .slice((page - 1) * 25, (page - 1) * 25 + 25)
                  .map((row) => {
                    let profit = row.price_change_percentage_24h >= 0;

                    return (
                      <TableRow
                        key={row.name}
                        onClick={() => navigate(`/coins/${row.id}`)}
                      >
                        <TableCell component="th" scope="row">
                          <CoinCardContainer>
                            <CoinImage src={row.image} alt={row.name} />
                            <CoinInfoContainer>
                              <CoinSymbol>{row.symbol}</CoinSymbol>
                              <CoinName>{row.name}</CoinName>
                            </CoinInfoContainer>
                          </CoinCardContainer>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell align="right">
                          <CoinProfit profit={profit}>
                            {profit && "+"}
                            {row.price_change_percentage_24h.toFixed(2)}%
                          </CoinProfit>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}
                          {numberWithCommas(row.market_cap)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
      <Pagination
        count={parseInt(filteredCoins.length / 25)}
        size="large"
        page={page}
        onChange={(_, page) => {
          setPage(page);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
};

export default CoinsTable;
