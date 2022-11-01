function priceOfProducts(saltBeefPrice, saltBeefRequest, riceRequest) {
	const totalBeefPrice = saltBeefPrice * saltBeefRequest;
	const ricePrice = Math.round(saltBeefPrice / 3 * 100) / 100;
	const totalRicePrice = ricePrice * riceRequest;
	const totalPrice = totalBeefPrice + totalRicePrice;

	return totalPrice;
}

module.exports = priceOfProducts;