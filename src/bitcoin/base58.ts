const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

export function encodeBase58(buf: Buffer): string {
	let num = BigInt("0x" + buf.toString("hex"));

	let prefix = "";
	for (let i = 0; i < buf.length; i++) {
		if (buf[i] === 0x00) prefix += "1";
		else break;
	}

	let result = "";
	while (num > 0n) {
		result = alphabet[Number(num % 58n)] + result;
		num /= 58n;
	}

	return prefix + result;
}

export function decodeBase58(val: string): Buffer {
	let prefix = 0;
	for (let i = 0; i < val.length; i++) {
		if (val[i] === "1") prefix += 1;
		else break;
	}

	let num: bigint = 0n;
	for (let i = 0; i < val.length; i++) {
		num *= 58n;
		num += BigInt(alphabet.indexOf(val[i]));
	}

	let hex = num.toString(16);
	if (hex.length % 2 === 1) hex = "0" + hex;

	return Buffer.from("00".repeat(prefix) + hex, "hex");
}
