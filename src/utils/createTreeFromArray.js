/** A function that generates represantal tree from a flat array
 * @param {data} {Array<Object>} - flat array contains parent child relationship in unorder
 * @arg {currentNode} {Object} - Represents created node for active elements in call stack
 * @arg {currentItem} {Object} - Represents active item in array iterated
 * @arg {id} {int} - Represents id of active item in array
 * @arg {parentId} {int} - Represents parentId of active item in array
 * @returns {tree} {Array<Object>} - ordered tree
 */

const createTree = function(data) {
  const tree = [];
  const currentNode = {};

  for (let i in data) {
    let currentItem = data[i];
    let id = currentItem["ID"];
    let parentId = currentItem["parentID"];

    currentNode[id] = currentNode[id] || [];
    currentItem["children"] = currentNode[id];
    currentItem.collapse = false;

    if (parentId && parentId !== 0) {
      currentItem.child = true;

      // push the child node with their children.
      currentNode[parentId].push(currentItem);
    } else if (!currentItem.hasOwnProperty("parentID")) {
      // these nodes are will be placed the first depth of the tree
      tree.push(currentItem);
    }
  }
  return tree;
};

export default createTree;
