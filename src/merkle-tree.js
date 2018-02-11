const crypto = require('crypto');

function sha256(buffer) {
  const hash = crypto.createHash('sha256');
  hash.update(buffer);
  return hash.digest('hex');
}

function run() {
  let input = 'abcd';
  console.log(JSON.stringify(buildMerkleTree(input), null, 2));

  console.log(
    proof('2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6', [
      [true, '18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4'],
      [false, '62af5c3cb8da3e4f25061e829ebeea5c7513c54949115b1acc225930a90154da'],
    ])
  );
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

function createMerkleRoot(childNodes) {
  if (childNodes.length === 1) return childNodes[0];

  let nodes = [];
  for (let i = 0; i < childNodes.length; i += 2) {
    let left = childNodes[i];
    let right = childNodes[i + 1];

    let hash = sha256(left.key + (right ? right.key : ''));
    nodes.push({ key: hash, left, right });
  }

  return createMerkleRoot(nodes);
}

function proof(questionHash, validations) {
  let root = questionHash;
  for (let [onLeft, hash] of validations) {
    if (onLeft) root = sha256(root + hash);
    else root = sha256(hash + root);
  }
  return root;
}
