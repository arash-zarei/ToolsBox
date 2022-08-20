import axios from "axios";

const getCoin = async (pageNumber) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false`
  );
  return response.data;
};

export { getCoin };
