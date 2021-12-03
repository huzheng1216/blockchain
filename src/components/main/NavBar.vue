<template>
  <div class="header">
    <div class="logo">
      <div class="user-title">
        <img class="user-logo" src="../../assets/logo.png">区块链自动化系统
      </div>
    </div>
    <div class="user-info">
      <el-button @click="link_wallet" v-if="false">
        {{ $store.state.account ? $store.state.account.replace($store.state.account.substr(5, 33), '...') : "链接钱包" }}
      </el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: 'linx',
    }
  },
  computed: {},
  methods: {
    link_wallet() {
      let self = this;
      window.ethereum.request({method: 'eth_requestAccounts'}).catch(function (reason) {
        alert(JSON.stringify(reason))
      }).then(function (accounts) {
        self.$store.commit("setWallet", accounts[0]);
        console.log('account', accounts)
      })
    }
  }
}
</script>

<style>
.el-header {
  padding: 0px;
}

.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: #2c3e50;
  font-size: 22px;
  line-height: 60px;
}

.header .logo {
  float: left;
  width: 300px;
  text-align: center;
}

.user-title {
  font-size: 20px;
  color: #fff;
}

.user-logo {
  margin-left: 20px;
}

.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
}

.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  cursor: pointer;
  color: #fff;
  vertical-align: middle;
}

.user-logo {
  position: absolute;
  left: -20px;
  top: 13px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
