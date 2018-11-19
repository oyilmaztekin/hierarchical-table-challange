import DataSet from '../mockData/DataSet'
import createTree from '../utils/createTreeFromArray'

const allNodes = []
const traverseTree = function traverseTree(tree){
    for(let i in tree){
        if(tree[i].children){
          allNodes.push(tree[i])
          traverseTree(tree[i].children)  
        }
    }

    return allNodes.sort((a,b) => a.ID - b.ID)
}

const tree = createTree(DataSet)

const reversedTree = traverseTree(tree)

export default reversedTree