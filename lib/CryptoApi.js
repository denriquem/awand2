const axios = require("axios");
const colors = require("colors");

class CrytpoApi {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseURl = "https://api.nomics.com/v1/currencies/ticker";
	}

	async getPriceData(coinOption, curOption) {
		try {
			//Formtter for currency
			const formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: curOption,
			});

			const res = await axios(
				`${this.baseURl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}&per-page=100&page=1`
			);

			let output = "";

			res.data.forEach((coin) => {
				output += `Coin: ${coin.symbol.yellow} (${
					coin.name
				}) | Price: ${formatter.format(coin.price).green}\n`;
			});

			return output;
		} catch (err) {
			console.error(err);
		}
	}
}

module.exports = CrytpoApi;
