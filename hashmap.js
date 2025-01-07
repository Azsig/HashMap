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
    let bucketsLoadFactor = countEntry()/buckets.length;
    if(bucketsLoadFactor < loadfactor){
      return;
    }
    capacity = capacity*2;
    let newBucket = new Array(capacity).fill("");
    for(let i = 0; i < buckets.length; i++){
      if (buckets[i] != ""){
        newBucket[i] = buckets[i];
      }
    }
    buckets = newBucket
  }

  function countEntry (){
    let count = 0
    for( let i=0; i < buckets.length;i++){
      if ( buckets[i] != ""){
        count++;
      }
    }
    return count;
  }
  
  let set = (key, value) => {
    tryExpand();
    let data = {key:key, value: value};
    bucketNum = hash(key)%capacity;
    if(buckets[bucketNum] != ""){
      if(buckets[bucketNum].data.key == key){
        buckets[bucketNum].data.value = value;
      }
      else{
        buckets[bucketNum] = Node(buckets[bucketNum]);
        LinkedLIst(buckets[bucketNum]).append(data);
      }
    }
    buckets[bucketNum] = Node(data);
  }
  function get(key){
    let bucketNum = hash(key)%capacity;
    
    if(buckets[bucketNum].data.key == key){
      return buckets[bucketNum].data.value;
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
  


}




 