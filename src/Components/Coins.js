import React, { useState, useEffect, useRef } from "react";
import CoinGecko from "coingecko-api";
import { Wrapper, Content } from "./Coins.style";
import { Image } from "./Image";

const coinGeckoClient = new CoinGecko();

const Coins = () => {
  const [coinNames, setCoinNames] = useState([]);
  const [price, setPrice] = useState([]);
  const [state, setState] = useState(false);
  const initial = useRef(true);
  const [data, setData] = useState([]);
  const fetchCoins = async () => {
    const params = {
      order: CoinGecko.ORDER.MARKET_CAP_DESC,
    };
    const resultAPI = await coinGeckoClient.coins.markets({
      params,
      per_page: [100],
    });
    const resultAPIData = resultAPI.data;
    //const coinListLowerCase = resultAPIData.map((e) => {
    // e.name = e.name.toLowerCase();
    //return e;
    // });
    const cleanAPINames = resultAPIData.map((e) => e.name);
    const cleanAPIPrices = resultAPIData.map((e) => e.current_price);
    //const findSpecificCoin = coinListLowerCase.filter(
    // (e) => e.name === search.toLowerCase()
    //);
    //const cleanSpecificCoin = findSpecificCoin.find((e) => e);
    // const specificCoinPrice = cleanSpecificCoin.market_data.current_price.usd;
    console.log(resultAPIData);

    //console.log(findCoin);
    return (
      setCoinNames(cleanAPINames),
      setPrice(cleanAPIPrices),
      setData(resultAPIData)
    );
  };

  useEffect(() => {
    fetchCoins();

    if (initial.current) {
      initial.current = false;
      return;
    }
  }, []);

  return (
    console.log(coinNames),
    (
      <Wrapper>
        <Content>
          {data.map((e) => {
            return (
              <div className="coin-list">
                <div className="name-and-logo">
                  <img src={e.image}></img>
                  <h1 key={e.id}>{e.name}</h1>
                </div>
                <h2 key={e.name}>Price: ${e.current_price}</h2>
              </div>
            );
          })}
        </Content>
      </Wrapper>
    )
  );
};

export default Coins;
