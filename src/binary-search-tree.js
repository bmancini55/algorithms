
let data = [];

for(let i = 0; i < 250000; i++) {
  data[i] = i;
}

/**
 * Results in a linked list where all nodes are on the Right.
 * This is the worst case scenario for the tree which results in O(N) search.
 * As a result, we need a balanced BST. This can be accomplished a few ways:
 *
 * 1) If data is know ahead of time, we can do some ops to insert in a balanced manner
 * 2) If data is not sorted, we can use a self-blancing tree, such as a Red-Black tree
 */

function bst({ root, key }) {
  if(!root) {
    root = { key };
  }
  else if (key < root.key) {
    root.left = bst({ root: root.left, key });
  }
  else {
    root.right = bst({ root: root.right, key });
  }
  return root;
}

function arrayToBst(array) {
  let root;
  for(let datum of array) {
    root = bst({ root, key: datum });
  }
  return root;
}

//console.log(JSON.stringify(arrayToBst(data), null, 2));


////////////////////////////////////////////

/**
 * The below is hte same algorith but uses slices... which is likely slower
 * due to the array copy, but is a bit easier to consume.
 */

function sortedArrayToBstBySlice(array) {
  if(array.length === 0) {
    return;
  }

  let medianIndex = Math.floor(array.length / 2);
  let leftSlice = array.slice(0, medianIndex);
  let rightSlice = array.slice(medianIndex + 1)

  let item = array[medianIndex];
  let node = { key: item };
  node.left = sortedArrayToBstBySlice(leftSlice);
  node.right = sortedArrayToBstBySlice(rightSlice)

  return node;
}

let start = Date.now();
let node = sortedArrayToBstBySlice(data);
console.log((Date.now() - start) / 1000);


/**
 * The below creates a BST from an array in place. This works
 * by self balancing the sorted array by inserting from median position
 * of the array slices.
 */

function sortedArrayToBst(array, start = 0, end = array.length - 1) {
  if(start > end) {
    return;
  }

  let median = Math.floor(start + ((end - start) / 2));

  let item = array[median];
  let node = { key: item };
  node.left = sortedArrayToBst(array, start, median - 1);
  node.right = sortedArrayToBst(array, median + 1, end);

  return node;
}

start = Date.now();
node = sortedArrayToBst(data);
console.log((Date.now() - start) / 1000);

/**
 * Given a bst, search it
 * @param  {[type]} bst   [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
function searchBst(bst, key) {
  if(!bst) {
    return;
  }
  else if (bst.key === key) {
    return bst;
  }
  else if(key < bst.key) {
    return searchBst(bst.left, key);
  }
  else {
    return searchBst(bst.right, key);
  }
}

start = Date.now();
let result = searchBst(node, 1555);
console.log((Date.now() - start) / 1000);



/**
 * 1-d range query with k-d tree
 */

function reportSubtree(bst, start, end) {
  if(!bst) {
    return;
  }

  if(bst.key >= start && bst.key <= end)
    console.log(bst.key);

  reportSubtree(bst.left, start, end);
  reportSubtree(bst.right, start, end);

}

function rangeQuery(bst, start, end) {
  if(!bst) {
    return;
  }
  else if (bst.key >= start && bst.key <= end) {
    console.log(bst.key)
    rangeQuery(bst.right, start, end);
    rangeQuery(bst.left, start, end);
  }
  if (bst.key < start) {
    rangeQuery(bst.right, start, end);
  }
  if (bst.key > end) {
    rangeQuery(bst.left, start, end);
  }
}

console.log('Range Query');
rangeQuery(node, 1, 5);
