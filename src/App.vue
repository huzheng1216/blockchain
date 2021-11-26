<template>
  <div id="app" style="height: 100%;width: 100%">
    <el-container style="height: 100%;width: 100%">
      <el-header>
        <vHead></vHead>
      </el-header>
      <el-container style="height: 100%;width: 100%">
        <el-aside width="200px">
          <vSide></vSide>
        </el-aside>
        <el-main>
          <transition name="move" mode="out-in">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import store from './store'
import vHead from './components/main/NavBar.vue'
import vSide from './components/main/SideBar.vue'

export default {
  store,
  name: 'App',
  components: {
    vHead, vSide
  },
  creat() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
*{margin:0;padding:0;}
html,body,#app,.wrapper{
  width:100%;
  height:100%!important;
  overflow-x: hidden;
  overflow-y: auto;
}
body{
  height: initial;
}

input:-webkit-autofill {
  -webkit-box-shadow:0 0 0 1000px white inset !important;
}
body{
  font-family:"Helvetica Neue",Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}
</style>
