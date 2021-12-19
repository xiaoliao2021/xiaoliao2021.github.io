<template>
  <div class="top-nav">
    <div class="menu-wrapper">
      <a-menu mode="horizontal" theme="dark">
        <a-menu-item>首页</a-menu-item>
        <a-sub-menu>
          <template #title>分类</template>
          <template v-for="item in catalogue.children" :key="item.name">
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
        <a-menu-item>留言板</a-menu-item>
        <a-menu-item>关于</a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { inject, reactive, watch } from "vue";
import SubMenu from "./SubMenu.vue";

export default {
  name: "HeaderNav",
  components: {
    "sub-menu": SubMenu,
  },
  setup() {
    const noteTree = inject("noteTree");
    // watch(
    //   noteTree,
    //   (val) => {
    //     console.log("note>>", val);
    //   },
    //   {
    //     deep: true,
    //   }
    // );
    return { noteTree };
  },
  methods: {
    dfs(item, map) {
      if (!item || !map) return;
      item.name = map[item.name] ? map[item.name] : item.name;
      if (item.children && item.children.length > 0) {
        item.children.forEach((i) => {
          this.dfs(i, map);
        });
      }
    },
  },
  computed: {
    catalogue: function () {
      const obj = JSON.parse(JSON.stringify(this.noteTree));
      this.dfs(obj, this.noteTree.catalogue_map);
      return obj;
    },
  },
};
</script>

<style lang="scss">
.top-nav {
  width: 100%;
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
