const Node = (Data = null)=>{
    let data = Data;
    let next = null

    return{data, next};
}

function LinkedLIst (Head) {
    let NodeData = Head
    let head = () => {
        return NodeData;
    }
    function size(){
        let countNum = 0; 
        let node = NodeData;
        while (node) {
            countNum++;
            node = node.next
        }
        return countNum;
    }
    let append = (value) => {
        let node = NodeData
        while(node.next != null){
            node = node.next
        }
        node.next = Node(value);
    }
    let prepend = (value) =>{
        let newHead = Node(value);
        newHead.next = NodeData
        NodeData = newHead;
        return NodeData
    }
    function at(index){
        let count = 0; 
        let node = NodeData;
        while (node) {
            if(count == index){
                return node;
            }
            count++;
            node = node.next
        }
        return 'index out of range'
    }
    function tail(){
        let node = NodeData;
        let data;
        while (node) {
            data = node
            node = node.next
        }
        return data
    }

    let contain = (value)=>{
        let count = 0; 
        let node = NodeData;
        while (node) {
            if(value == node.data.key){
                return true;
            }
            count++;
            node = node.next
        }
        return false
    }

    let find = (value) =>{
        let count = 0; 
        let node = NodeData;
        while (node) {
            if(value == node.data.key){
                return count;
            }
            count++;
            node = node.next
        }
        return null
    }

    function pop(){
        let node = LinkedLIst(NodeData);
        let index = node.size();
        let last = node.at(index - 2);
        last.next = null
        return NodeData
    }
    function toString(){
        let text = '';
        let node = NodeData;
        while (node) {
            text += node.data;
            if(node.next == null){
                break;
            }
            text += ' -> '
            node = node.next
        }
        return text
    }
    return {head, NodeData, size, append, prepend, at, tail, pop, toString, find, contain}
}
let data = {k:1, y:3};
let a = Node(data);
LinkedLIst(a).append(data)
LinkedLIst(a).append(data)
if(a.data){
    console.log('a')
}
console.log(LinkedLIst(a).tail().next);

export{Node, LinkedLIst}
