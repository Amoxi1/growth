<template>
  <div id="app">
    <ul class="nav">
      <li><router-link to="/">test</router-link></li>  
      <li><router-link to="/info">info</router-link></li>
      <li><router-link to="/mock">mock</router-link></li>
      <li><router-link to="/goods">goods</router-link></li>
      <li><router-link to="/product">product</router-link></li>
    </ul>
    <!-- <demo></demo> -->
    <router-view/>
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
  #app{width: 800px;overflow: hidden;margin:0 auto;}
  .nav{width:100%;}
  .nav li{float: left;width: 160px;height:30px;line-height:30px;text-align: center;}
</style>
