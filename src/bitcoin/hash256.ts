import { sha256 } from "./sha256";

export function hash256(buf: Buffer): Buffer {
	return sha256(sha256(buf));
}
