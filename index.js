function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	return saltBeefRequest * saltBeefPrice + riceRequest * Math.round(saltBeefPrice / 3 * 100) / 100;
}

module.exports = priceOfProducts;