// Initial object with some existing nodes
let out = {
  source: [
    { id: 1, name: "initialNode" }
  ]
};

// Function to add a node if it doesn't already exist in the array
function addNode(out, newNode) {
  // Check if the node already exists based on some unique property, for example, 'id'
  let exists = out.source.some(node => node.id === newNode.id);

  if (!exists) {
    out.source.push(newNode);
    console.log(`Node with id ${newNode.id} added.`);
  } else {
    console.log(`Node with id ${newNode.id} already exists.`);
  }
}

// Example nodes to add
let node1 = { id: 2, name: "secondNode" };
let node2 = { id: 1, name: "duplicateNode" };

// Adding nodes
addNode(out, node1); // Should add the node
addNode(out, node2); // Should not add the node (duplicate)

// Verifying the result
console.log(out.source);
