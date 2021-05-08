class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size); // used to store the key-value, 100 is the size of it.
    }
   
    
    add(key,value){
        let hash = this.hash(key);
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();//LL
          }
        this.table[hash] = {key, value};
    }
    hash(key){
        
        let hash = 353;
        for (let i = 0; i < key.length; i++) {
           
            hash = hash * 599 * key.charCodeAt(i) % this.table.length;
            
        }
        return hash
    }
    get(key){
        if(this.contains(key)){
            let hash = this.hash(key);
            let current = this.table[hash].head;
            while(current){
                if (Object.keys(current.value)[0] === key) return current.value[key]
                current = current.next;
            }
            return value;
        } else {
            return "Key already exists"
        }
    }
    contains(key){
        let hash = this.hash(key);
        if(this.table[hash]){
            return true;
        } else{
            return false;
        }
    }
}


find(key) {
    let hash = this.getHash(key);

    if (this.contains(key)) {

        if (this.table[hash].head) {
            let current = this.table[hash].head;
            if (Object.keys(current.value)[0] === key) {
                return current.value[key];
            }
            while (current.next) {
                current = current.next;
                if (Object.keys(current.value)[0] === key) {
                    return current.value[key];
                }
            }
        }
    }
    return null;
}