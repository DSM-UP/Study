const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previoshash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previoshash = previoshash;
    this.hash = this.claculateHash();
  }

  claculateHash() {
    return SHA256(
      this.index + this.previoshash + this.timestamp + JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "/07/03/2020", "GenesisBlock", "0");
  }

  getLatesBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previoshash = this.getLatesBlock().hash;
    newBlock.hash = newBlock.claculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.claculateHash()) {
        return false;
      }

      if (currentBlock.previoshash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1, "07/04/2020", { amount: 4 }));
savjeeCoin.addBlock(new Block(2, "07/05/2020", { amount: 10 }));

console.log("value is right?  =>  " + savjeeCoin.isChainValid());
//console.log(JSON.stringify(savjeeCoin, null, 4));

savjeeCoin.chain[1].data = { amount: 100 };
savjeeCoin.chain[1].hash = savjeeCoin.chain[1].claculateHash();
console.log("value is right?  =>  " + savjeeCoin.isChainValid());
