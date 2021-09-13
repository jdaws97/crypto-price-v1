import React, { useState, useEffect } from "react";
import CoinGecko from "coingecko-api";
import { Wrapper, Content } from "./Price.style";

const coinGeckoClient = new CoinGecko();

const Price = ({ search, state }) => {
  const [price, setPrice] = useState("");

  const fetchCoins = async () => {
    const params = {
      order: CoinGecko.ORDER.MARKET_CAP_DESC,
    };
    const resultAPI = await coinGeckoClient.coins.all({
      params,
      per_page: [250],
    });
    const resultAPIData = resultAPI.data;
    const coinListLowerCase = resultAPIData.map((e) => {
      e.name = e.name.toLowerCase();
      return e;
    });

    const findSpecificCoin = coinListLowerCase.filter(
      (e) => e.name === search.toLowerCase()
    );
    const cleanSpecificCoin = findSpecificCoin.find((e) => e);
    const specificCoinPrice = cleanSpecificCoin.market_data.current_price.usd;
    console.log(cleanSpecificCoin);

    //console.log(findCoin);
    return setPrice(specificCoinPrice);
  };

  return (
    useEffect(() => {
      fetchCoins();
    }, [state]),
    (
      <Wrapper>
        <h1>{search} data</h1>
        <Content>
          <h2>Price: ${price}</h2>
        </Content>
      </Wrapper>
    )
  );
};
export default Price;
