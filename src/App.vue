<template>
  <div id="app">      
   <el-row class='tac' :gutter="20">
      <el-col :span="4">
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo">
          <router-link to="/">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>test</span>
              </template>
            </el-submenu>
          </router-link>
          <router-link to="/info">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">info</span>
          </el-menu-item>
          </router-link>
          <router-link to="/mock">
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">mock</span>
            </el-menu-item>
          </router-link>
          <router-link to="/goods">
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">goods</span>
            </el-menu-item>
          </router-link>
          <router-link to="/product">
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">product</span>
            </el-menu-item>
          </router-link>
          <router-link to="/todolist">
            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span slot="title">todoList</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    <el-col :span="20">

    <router-view/>
    </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
  name: 'app',
  components:{}
}
</script>

<style>
  *{padding: 0;margin: 0;}
  ul,li,ol{list-style: none;}
  a{text-decoration: none;}
 
</style>
