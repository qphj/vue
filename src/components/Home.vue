<template>
  <div>
    <h2>我是首页内容</h2>
    <router-link to="/home/message">message</router-link>
    <router-link to="/home/news">news</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/message',
      test: '111'
    }
  },
  mounted() {
    console.log("mounted" + this.path + "---" + this.test)
    this.$router.push(this.path);
  },
  activated() {
    console.log("activated" + this.path + "---" + this.test)
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave " + this.$route.path)
    this.path = this.$route.path;
    this.test = 222;
    next();
  }
}
</script>

<style scoped>

</style>