import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Button, IconButton } from "./components/shared/Button";
import Select from "./components/shared/Select";
import CurrencyContext from "./contexts/CurrencyContext";
import Coin from "./pages/Coin";

const lightTheme = {
  mode: "ligth",
};

const darkTheme = {
  mode: "dark",
};

const currencySymbols = {
  usd: "$",
  inr: "₹",
  eur: "€",
  gbp: "₤",
};

const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const [currency, setCurrency] = useState("usd");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  useEffect(() => {
    setCurrencySymbol(currencySymbols[currency]);
  }, [currency]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header setTheme={setTheme}>
        <Header.Logo to="/">CT</Header.Logo>
        <Header.Content>
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </Select>
          <Button>LOGIN</Button>
          <IconButton
            onClick={() =>
              setTheme((prevState) =>
                prevState === darkTheme ? lightTheme : darkTheme
              )
            }
          >
            {theme === darkTheme ? <RiSunLine /> : <RiMoonLine />}
          </IconButton>
        </Header.Content>
      </Header>
      <div style={{ height: "50px" }}></div>
      <CurrencyContext.Provider
        value={{ currency: currency, symbol: currencySymbol }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:coinId" element={<Coin />} />
        </Routes>
      </CurrencyContext.Provider>
    </ThemeProvider>
  );
};

export default App;
