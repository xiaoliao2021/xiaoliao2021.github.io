<template>
  <a-sub-menu :key="menuInfo.name">
    <template #title>{{ menuInfo.name }}</template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children || item.children.length === 0">
        <a-menu-item :key="item.name">
          {{ item.name }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
