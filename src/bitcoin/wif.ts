import { Network } from "./network";
import { hash256 } from "./hash256";
import { encodeBase58, decodeBase58 } from "./base58";
import { combine } from "./buffer-util";

export function encodeWif(
	privkey: Buffer,
	compressed: boolean = false,
	network: Network = Network.Mainnet
): string {
	// prefix is either 0x80 for mainnet or 0xef for testnet
	const prefixBuf = Buffer.from([network === Network.Mainnet ? 0x80 : 0xef]);

	// add the compressed flag
	const compressedBuf = compressed ? Buffer.from([0x01]) : Buffer.alloc(0);

	// hash256 checksum is the three values
	const checksum = hash256(combine(prefixBuf, privkey, compressedBuf)).slice(
		0,
		4
	);

	// combine the data and return base58
	return encodeBase58(combine(prefixBuf, privkey, compressedBuf, checksum));
}

export function decodeWif(
	wif: string
): { privkey: Buffer; compressed: boolean; network: Network } {
	// decode from base58
	const raw = decodeBase58(wif);

	// validate checksum
	const expectedChecksum = raw.slice(raw.length - 4);
	const actualChecksum = hash256(raw.slice(0, raw.length - 4)).slice(0, 4);
	if (!actualChecksum.equals(expectedChecksum)) {
		throw new Error("Checksum failed");
	}

	// convert the prefix into the network
	const prefix = raw[0];
	const network =
		prefix === 0x80
			? Network.Mainnet
			: prefix === 0xef
			? Network.Testnet
			: undefined;

	const compressed = raw[33] === 0x01;
	const privkey = raw.slice(1, 33);

	return {
		privkey,
		compressed,
		network,
	};
}
