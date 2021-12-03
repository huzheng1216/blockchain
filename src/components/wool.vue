<template>
  <div style="height: 100%">
    <h1>{{ msg }}</h1>
    <div style="margin-top: 50px">
      <span style="margin-right: 20px">输入钱包/合约地址:</span>
      <el-input v-model="options.params[0]" placeholder="请输入内容" style="margin-top: 10px;width: 500px"></el-input>
    </div>
    <div style="margin-top: 30px">
      <span style="margin-right: 20px">选择网络:</span>
      <el-select v-model="url" placeholder="请选择">
        <el-option
          v-for="item in netOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-button type="primary" @click="search" style="margin-top: 20px" :loading="loading">查询</el-button>

    <div style="margin-top: 20px">
      <span>余额：{{ balance }} eth</span>
    </div>
  </div>
</template>

<script>

const Web3 = require('web3');

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
      web3: null,
    }
  },

  mounted() {
    let self = this
    if (typeof self.web3 !== 'undefined') {
      self.web3 = new Web3(self.web3.currentProvider);
    } else {
      self.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/73ad8b7eac2b4f0797fa79ec0802e6d4"));
    }
    // 定义合约
    var myContract = new self.web3.eth.Contract(self.$store.state.WOOL.state.abi, self.$store.state.WOOL.state.address, {
      from: currentAccount, // default from address
      gasPrice: '10000000000' // default gas price in wei, 10 gwei in this case
    });
  },
  methods: {
    search() {
      if (this.options.params[0].length < 1) {
        this.$message("请输入钱包地址....")
        return
      }

      let self = this;
      self.loading = true
      this.$axios.post(self.url, this.options)
        .then(res => {
          self.loading = false
          self.$message({
            message: '请求成功',
            type: 'success'
          });
          self.balance = Number(res.data.result) / 1e18
        })
        .catch(err => {
          self.loading = false
          self.$message({
            message: err,
            type: 'error'
          });
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
