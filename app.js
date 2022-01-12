axios
  .get("https://api.cryptonator.com/api/full/btc-usd")
  .then((res) => {
    console.log(res.data.ticker.price);
  })
  .catch((err) => {
    console.log("ERROR!", err);
  });

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd");
    console.log(res.data.ticker.price);
  } catch (e) {
    console.log("ERROR!", e);
  }
};


// setting headers with Axios
//https://icanhazdadjoke.com/api
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(res);
};
