<template>
  <div style="height: 100%">
    <h1>dexscreener数据过滤脚本</h1>
    <h1>{{ msg }}</h1>
    <div style="margin-top: 50px">
      <span style="margin-right: 20px">设置PRICE区间(K):</span>
      <el-input-number v-model="options.price[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.price[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置TXNS区间:</span>
      <el-input-number v-model="options.txns[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.txns[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置VOLUME区间(K):</span>
      <el-input-number v-model="options.volume[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.volume[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置 5M 区间(%):</span>
      <el-input-number v-model="options.m5[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.m5[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置 1H 区间(%):</span>
      <el-input-number v-model="options.h1[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.h1[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置 6H 区间(%):</span>
      <el-input-number v-model="options.h6[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.h6[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置 24H 区间(%):</span>
      <el-input-number v-model="options.h24[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.h24[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置LIQUIDITY区间(K):</span>
      <el-input-number v-model="options.liquidity[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.liquidity[1]" :step="10"></el-input-number>
    </div>
    <div style="margin-top: 20px">
      <span style="margin-right: 20px">设置MKT CAP区间(K):</span>
      <el-input-number v-model="options.mktcap[0]" :step="10"></el-input-number>
      <span>~</span>
      <el-input-number v-model="options.mktcap[1]" :step="10"></el-input-number>
    </div>
    <div></div>
    <el-button @click="filterList" style="margin-top: 20px">生成脚本</el-button>
    <h1 style="margin-top: 50px">{{ msg1 }}</h1>
    <h1>{{ msg2 }}</h1>
    <h1>{{ msg3 }}</h1>
    <h1>{{ msg4 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '设置过滤参数——>生成脚本——>打开“https://dexscreener.com/”——>按F12，选择Console——>粘贴脚本——>按回车运行',
      msg1: '脚本运行时，只需要修改options参数，就可以立即生效，不需要重新生成脚本。',
      msg2: '常用命令：',
      msg3: 'options: 查看当前过滤参数',
      msg4: 'options.price = [100, 200]:  修改价格区间',
      options: {
        price: ['100', ''],
        txns: ['15', ''],
        volume: ['50', ''],
        m5: ['-1', ''],
        h1: ['', ''],
        h6: ['', ''],
        h24: ['', ''],
        liquidity: ['', ''],
        mktcap: ['900', ''],
      }
    }
  },
  methods: {
    filterList() {

      var str = `
      let options = ${JSON.stringify(this.options)}

      function replaceKMB(val) {
        let tag = val.replaceAll(",", "").substring(0, val.length - 1)
        if (val.endsWith("M")) {
          return String(parseFloat(tag) * 1000)
        } else if (val.endsWith("B")) {
          return String(parseFloat(tag) * 1000 * 1000)
        } else if (val.endsWith("K")) {
          return tag
        } else if (val.startsWith("-")) {
          return "0"
        } else {
          return val
        }
      }

      function changeStyle(text, min, max, node) {
        if (min !== 0 || max !== 0) {
          if(min!==0 && min > parseFloat(text)){
            return false
          }
          if (max!==0 && max < parseFloat(text)) {
            return false
          }
          return true
        } else {
          return true
        }
      }

      function toDo(){
        console.log("脚本正在运行,2s刷新界面....")
        document.querySelectorAll(".css-1oo4dn7").forEach(node => {
          let show = true
          node.childNodes.forEach((item, index) => {
            let text = item.innerHTML.replace(/<[^<>]+>/g, "")
            let min = ''
            let max = ''
            if(text==="-"){

            }else{
              switch (index) {
                case 1:
                  text = text.match(/\\\$(\\\S*)/)[1]
                  min = options.price[0]
                  max = options.price[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 2:
                  min = options.txns[0]
                  max = options.txns[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 3:
                  text = replaceKMB(text.match(/\\\$(\\\S*)/)[1])
                  min = options.volume[0]
                  max = options.volume[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 4:
                  text = text.substring(0, text.length - 1)
                  min = options.m5[0]
                  max = options.m5[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 5:
                  text = text.substring(0, text.length - 1)
                  min = options.h1[0]
                  max = options.h1[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 6:
                  text = text.substring(0, text.length - 1)
                  min = options.h6[0]
                  max = options.h6[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 7:
                  text = text.substring(0, text.length - 1)
                  min = options.h24[0]
                  max = options.h24[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 8:
                  text = replaceKMB(text.match(/\\\$(\\\S*)/)[1])
                  min = options.liquidity[0]
                  max = options.liquidity[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
                case 9:
                  text = replaceKMB(text.match(/\\\$(\\\S*)/)[1])
                  min = options.mktcap[0]
                  max = options.mktcap[1]
                  show = show && changeStyle(text, min, max, node)
                  break;
              }
             }
          })
          if (show) {
            node.removeAttribute('style');
          } else {
            node.setAttribute('style', 'display: none;');
          }
        })
      }

      if(this.timer){
        clearInterval(timer)
        this.timer = setInterval(toDo, 2000)
      }else{
        this.timer = setInterval(toDo, 2000)
      }
      `

      console.log(str)
      //如果需要回调：
      this.$copyText(str).then( e => {
        alert('复制成功')
        console.log(e)
      }, function (e) {
        alert('复制失败')
        console.log(e)
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
