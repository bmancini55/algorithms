const crypto = require('crypto');

function sha256(buffer) {
  const hash = crypto.createHash('sha256');
  hash.update(buffer);
  return hash.digest('hex');
}

function run() {
  let input = 'abcde';
  console.log(buildMerkleTree(input));
}

run();

function buildMerkleTree(chunks) {
  let leaves = createMerkleLeaves(chunks);
  return createMerkleRoot(leaves);
}

function createMerkleLeaves(chunks) {
  let nodes = [];
  for (let chunk of chunks) {
    let hash = sha256(chunk);
    nodes.push({ key: hash, chunk, left: undefined, right: undefined });
  }
  return nodes;
}

function createMerkleRoot(leaves) {
  if (leaves.length === 1) return leaves[0];

  let newNodes = [];
  for (let i = 0; i < leaves.length; i += 2) {
    let left = leaves[i];
    let right = leaves[i + 1];

    let hash = sha256(left.key + (right ? right.key : ''));
    newNodes.push({ key: hash, left, right });
  }

  return createMerkleRoot(newNodes);
}
