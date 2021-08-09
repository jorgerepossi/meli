


const getPrice = (param) => {
  let priceToString = String(param);
  let priceSplit = priceToString.split(".");
  return Number(priceSplit[0]);
};
const getSplitResult = (param) => {
  let priceToString = String(param);
  let priceSplit = priceToString.split(".");
  return Number(priceSplit[1]) > 0 ? Number(priceSplit[1]) : 0;
};


module.exports = {
 
  getPrice,
  getSplitResult
};

