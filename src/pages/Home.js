import React, { useEffect } from "react";

import Banner from "../components/Banner";
import CoinsTable from "../components/CoinsTable";

const Home = () => {
  useEffect(() => {
    document.title = "Crypto Tracker";
  }, []);

  return (
    <>
      <Banner>
        <Banner.Heading>Crypto Tracker</Banner.Heading>
        <Banner.SubHeading>
          Price tracking website for Cryptocurrencies
        </Banner.SubHeading>
        <Banner.Carousel />
      </Banner>
      <CoinsTable />
    </>
  );
};

export default Home;
