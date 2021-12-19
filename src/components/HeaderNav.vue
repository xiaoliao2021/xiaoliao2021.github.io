<template>
  <div class="top-nav">
    <div class="menu-wrapper">
      <a-menu mode="horizontal">
        <a-menu-item>首页</a-menu-item>
        <a-menu-item>分类</a-menu-item>
        <a-menu-item>留言板</a-menu-item>
        <a-menu-item>关于</a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"
export default {
  name: 'HeaderNav',
  setup() {
  }
}
</script>

<style lang="scss">
.top-nav {
  width:100%;
  height: 50px;
  position: absolute;
  z-index: 5;
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  .ant-menu {
    margin: 0 auto !important;
    background: rgba(40, 42, 44, 0.6) !important;
    color: white !important;
  }
  .ant-menu-horizontal {
    border-bottom: unset !important;
  }
  .ant-menu-item {
    &:hover {
      color: unset !important;
    }
  }
}
</style>