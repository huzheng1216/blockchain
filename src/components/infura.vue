<template>
  <div style="height: 100%">
    <div v-for="m in msgs">
      <span>{{ m }}</span>
    </div>
    <el-button type="primary" @click="search" style="margin-top: 20px" :loading="loading">监听</el-button>
  </div>
</template>

<script>

const Web3 = require('web3');
//infura ws主网链接
const WS_URL = 'wss://mainnet.infura.io/ws/v3/d82f8214042f4c82994befe7d2f05f08'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msgs: ['基于Infura数据分析,触发合约进行自动化交易的程序'],
      msg: '',
      loading: false,
      web3: undefined,
    }
  },

  mounted() {
    let self = this
  },
  methods: {
    search() {
      let self = this
      self.web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/73ad8b7eac2b4f0797fa79ec0802e6d4");
      self.web3.eth.getPendingTransactions((error, result)=>{
        console.log(error)
        console.log(result)
      })
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
