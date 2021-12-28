<template>
  <div style="height: 100%">
    <div v-for="m in msgs">
      <span>{{ m }}</span>
    </div>
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="search" style="margin-top: 20px" :loading="loading">查询</el-button>

    <div style="margin-top: 20px">
      <span>ETH余额：{{ balance_eth }} eth</span>
    </div>
    <div style="margin-top: 20px">
      <span>默认代币：{{ defaultCommon }} </span>
    </div>
  </div>
</template>

<script>

const Web3 = require('web3');

export default {
  name: 'HelloWorld',
  data() {
    return {
      msgs: [],
      msg: '',
      loading: false,
      web3: null,
      myContract: null,
      balance_eth: 0,
      defaultCommon: '未知',
    }
  },

  mounted() {
    let self = this
    self.msgs.push('启动web3...')
    if (Web3.givenProvider) {
      self.msgs.push(`链接以太坊：主节点`);
    } else {
      self.msgs.push(`链接以太坊：infura节点`);
    }
    self.web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/73ad8b7eac2b4f0797fa79ec0802e6d4");
    self.web3.eth.getBlockNumber()
      .then(num => self.msgs.push(`区块高度：${num}`))
      .catch(err => self.msgs.push(`区块高度：获取失败`))

    // 定义合约
    self.msgs.push(`连接合约...`);
    self.myContract = new self.web3.eth.Contract(self.$store.state.WOOL.abi, self.$store.state.WOOL.address);
    self.msgs.push(`初始化完成：版本[web3 ${Web3.version}] `);
  },
  methods: {
    search() {
      let self = this;
      self.loading = true
      //查询eth
      self.web3.eth.getBalance(self.$store.state.WOOL.address)
        .then(value => console.log(value))
        .catch(err => console.log(err))
      //查询代币
      self.myContract.methods.name().call({from: self.$store.state.WOOL.address}, (err, result) => {
        if (err)
          console.log(err)
        else
          console.log(result)
      })
      // self.defaultCommon = self.myContract.defaultCommon
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iframe-class {
  width: 100%;
  height: 100%;
}
</style>
