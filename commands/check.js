const KeyManager = require("../lib/KeyManager");
const CrytpoApi = require("../lib/CryptoApi");

const check = {
	async price(cmd) {
		try {
			keyManager = new KeyManager();
			const key = keyManager.getKey();

			const api = new CrytpoApi(key);

			const priceOutputData = await api.getPriceData(cmd.coin, cmd.curr);

			console.log(priceOutputData);
		} catch (error) {
			console.error(err.message.red);
		}
	},
};

module.exports = check;
