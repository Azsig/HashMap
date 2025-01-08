import {Node, LinkedLIst} from "./linkedList.js";


let hashMap = () => {
  let capacity = 16;
  let loadfactor = 0.75;
  let buckets = []
  
  function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode;
  }

  let tryExpand = () => {
    let bucketsLoadFactor = countEntry()/capacity;
    console.log(bucketsLoadFactor);
    if(bucketsLoadFactor < loadfactor){
      return;
    }
    capacity = capacity*2;
  }

  function countEntry (){
    let count = 0
    for( let i=0; i < capacity;i++){
      if ( buckets[i]){
        count += LinkedLIst(buckets[i]).size()
      }
    }
    return count;
  }
  
  let set = (key, value) => {
    tryExpand();
    let data = {key:key, value: value};
    let bucketNum = hash(key)%capacity;
    if(buckets[bucketNum]){
      let linkedListNum = LinkedLIst(buckets[bucketNum]).find(key);
      if(linkedListNum){
        data = LinkedLIst(buckets[bucketNum]).at(linkedListNum)
        data.data.value = value;
        return 
      }
      else{
        LinkedLIst(buckets[bucketNum]).append(data);
        return 
      }
    }
    buckets[bucketNum] = Node(data);
    return 
  }


  function get(key){
    let bucketNum = hash(key)%capacity;
    let data = LinkedLIst(buckets[bucketNum])
    if(data.find(key)){
      return data.at(data.find(key)).data.value
    }
    return null
  }

  function has(key){
    let bucketNum = hash(key)%capacity;
    let linkedListNum = LinkedLIst(buckets[bucketNum]).find(key);
    if(linkedListNum){
      return true
    }
    return false
  }

  function remove(key){
    let bucketNum = hash(key)%capacity;
    let bucketSize = LinkedLIst(buckets[bucketNum]).size()
    let linkedListNum = LinkedLIst(buckets[bucketNum]).find(key);
    if(linkedListNum){
      if(linkedListNum == bucketSize){
        LinkedLIst(buckets[bucketNum]).pop();
      }
      else if(linkedListNum == 0){
        buckets[bucketNum] = buckets[bucketNum].next;
      }
      else{
        let nextData = LinkedLIst(buckets[bucketNum]).at(linkedListNum).next;
        for (let i = bucketSize; i > linkedListNum; i--){
          LinkedLIst(buckets[bucketNum]).pop()
        }
        LinkedLIst(buckets[bucketNum]).tail().next = nextData
      }
      return true
    }
    return false
  }
  function length(){
    length = 0;
    for(let i = 0; i < capacity; i++){
      if(buckets[i]){
        length += LinkedLIst(buckets[i]).size()
      }
    }
    return length
  }

  function clear(){
    buckets = [];
    return buckets;
  }

  function keys(){
    let array = [];
    for (let i = 0; i < capacity; i++){
      if(buckets[i]){
        let Data = buckets[i];
        while(Data){
          array.push(Data.data.key);
          Data = Data.next
        }
      }
    }
    return array;
  }

  let value = () => {
    let array = [];
    for ( let i = 0; i < capacity; i++){
      if(buckets[i]){
        let Data = buckets[i]
        while(Data){
          array.push(Data.data.value);
          Data = Data.next
        }
      }
    }
    return array;
  }

  let entries = () =>{
    let array = [];
    for ( let i = 0; i < capacity; i++){
      if(buckets[i]){
        let Data = buckets[i]
        while(Data){
          let arrayIn = []
          arrayIn.push(Data.data.key);
          arrayIn.push(Data.data.value);
          array.push(arrayIn);
          Data = Data.next
        }
      }
    }
    return array;
  }

  function loadlevel(){
    return loadfactor*capacity
  }

  return{loadlevel, set, get, has, remove, length, clear, keys, value, entries, buckets}

}

export {hashMap};





 