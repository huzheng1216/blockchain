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
  },
  methods: {
    search() {
      let strs = ["1帅哥21", "1明星2", "1吴亦凡3", "1电影4", "1娱乐5", "1NBA6", "1火箭7", "1帅哥2", "1明星3", "1吴亦凡4",
        "1电影5", "1娱乐6", "1NBA61", "1火箭71", "1帅哥11", "1明星21", "1吴亦凡13", "1电影14", "1娱乐15", "1NBA116",
        "整点", "执行", "javascript", "setTimeout", "setInterval", "循环执行", "定点执行", "CSDN博客", "技术博客", "菜鸟教程",
        "1火箭117", "1帅哥111", "1明星112", "1吴亦凡113", "电影114", "娱乐115", "NBA116", "火箭11", "wNBA116", "w火箭11"];

      let index = 0;

      function doTask(str) {
        console.log(`查询：【${str}】 位置：【${index}】`)
        document.querySelector("input").value = str
        document.querySelector("button").click()
        index++
        if (index < strs.length) {
          //延迟10-15s
          let d = Math.random() * 5 + 10;
          console.log(`延迟${d}s后执行【${index}】`);
          setTimeout(() => {
            doTask(strs[index])
          }, d * 1000);
        } else {
          index = 0
          //24小时执行一次
          setTimeout(() => {
            doTask(strs[index])
          }, 24 * 60 * 60 * 1000);
        }
      }
      doTask(strs[index])
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
