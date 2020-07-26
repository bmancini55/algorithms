import { expect } from "chai";
import { encodeWif, decodeWif } from "../../src/bitcoin/wif";
import { Network } from "../../src/bitcoin/network";

describe("WIF", () => {
	const pk = Buffer.from(
		"0c28fca386c7a227600b2fe50b7cae11ec86d3bf1fbe471be89827e19d72aa1d",
		"hex"
	);

	describe(".encodeWif()", () => {
		it("mainnet uncompressed", () => {
			const actual = encodeWif(pk, false, Network.Mainnet);
			const expected =
				"5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ";
			expect(actual).to.equal(expected);
		});

		it("mainnet compressed", () => {
			const actual = encodeWif(pk, true, Network.Mainnet);
			const expected =
				"KwdMAjGmerYanjeui5SHS7JkmpZvVipYvB2LJGU1ZxJwYvP98617";
			expect(actual).to.equal(expected);
		});
	});

	describe(".decodeWif()", () => {
		it("mainnet uncompressed", () => {
			const result = decodeWif(
				"5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ"
			);
			expect(result.privkey.toString("hex")).to.equal(
				"0c28fca386c7a227600b2fe50b7cae11ec86d3bf1fbe471be89827e19d72aa1d"
			);
			expect(result.compressed).to.equal(false);
			expect(result.network).to.equal(Network.Mainnet);
		});

		it("mainnet compressed", () => {
			const result = decodeWif(
				"KwdMAjGmerYanjeui5SHS7JkmpZvVipYvB2LJGU1ZxJwYvP98617"
			);
			expect(result.privkey.toString("hex")).to.equal(
				"0c28fca386c7a227600b2fe50b7cae11ec86d3bf1fbe471be89827e19d72aa1d"
			);
			expect(result.compressed).to.equal(true);
			expect(result.network).to.equal(Network.Mainnet);
		});
	});
});
