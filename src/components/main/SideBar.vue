<template>
  <el-row style="height: 100%;">
    <el-col :span="24" style="height: 100%;">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        style="height: 100%;"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>脚本</span>
          </template>
          <el-menu-item-group>
            <template slot="title">NFT脚本</template>
            <el-menu-item index="1-1">guildfi官网</el-menu-item>
            <el-menu-item index="1-2">dexscreener</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">代币脚本</template>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>工具箱</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">账户信息查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        data() {
            return {
            }
        },

        computed: {
        },

        created() {

        },

        methods: {
          handleSelect(key, keyPath) {
            console.log(key)
            let _ = this
            switch (key) {
              case '1-2':
                _.$router.push({path: '/dexscreener'})
                break
              case '2-1':
                _.$router.push({path: '/utilBox'})
                break
            }
          }
        }
    }
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        min-height: 400px;
    }
</style>
