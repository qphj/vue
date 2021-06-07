<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!ifActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active:ifActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      // ifActive: true
    }
  },
  computed: {
    ifActive() {
      return this.$route.path.includes(this.path);
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }

}
</script>

<style scoped>
.tab-bar-item {
  font-size: 14px;
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: #246fa1;
}
</style>