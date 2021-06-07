<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--    <router-link> </router-link>-->
    <!--    <router-link></router-link>-->
    <!--    <router-link to="/home">首页</router-link>-->
    <!--    <router-link to="/about">关于</router-link>-->
    <!--    <keep-alive>-->
    <!--      <router-view></router-view>-->
    <!--    </keep-alive>-->
    <!--    <router-view></router-view>-->
    <!--    <TabBar>-->
    <!--      <TabBarItem path="/home">-->
    <!--        <img slot="item-icon" src="./assets/image/tabbar/index.png">-->
    <!--        <img slot="item-icon-active" src="./assets/image/tabbar/index-a.png">-->
    <!--        <div slot="item-text">首页</div>-->
    <!--      </TabBarItem>-->
    <!--      <TabBarItem path="/car">-->
    <!--        <img slot="item-icon" src="./assets/image/tabbar/car.png">-->
    <!--        <img slot="item-icon-active" src="./assets/image/tabbar/car-a.png">-->
    <!--        <div slot="item-text">购物车</div>-->
    <!--      </TabBarItem>-->
    <!--      <TabBarItem path="/profile">-->
    <!--        <img slot="item-icon" src="./assets/image/tabbar/my.png">-->
    <!--        <img slot="item-icon-active" src="./assets/image/tabbar/my-a.png">-->
    <!--        <div slot="item-text">我的</div>-->
    <!--      </TabBarItem>-->

    <!--    </TabBar>-->
    <!--    vuex-->
    <h2> {{ $store.state.counter }}</h2>
    <button @click="btnAdd">+</button>
    <button @click="btnSub">-</button>
    <vuex></vuex>
  </div>
</template>

<script>
// import TabBar from "./components/tabbar/TabBar";
// import TabBarItem from "./components/tabbar/TabBarItem";
import Vuex from "@/components/vuex/Vuex";

export default {
  name: 'App',
  data() {
    return {
      indexIcon: './assets/image/tabbar/index.png',
      carIcon: '',
      myIcon: '',
      ifActive: true,
      counter: 0
    }
  },
  components: {
    // TabBar,
    // TabBarItem
    Vuex
  },
  methods: {
    btnAdd() {
      this.$store.commit('increment')
    },
    btnSub() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
@import "assets/css/base.css";


/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

/*.active {*/
/*  color: red;*/
/*}*/
</style>
