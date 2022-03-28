<template>
  <div class="top-nav">
    <div class="menu-wrapper">
      <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
        <a-menu-item key="index">首页</a-menu-item>
        <a-sub-menu
          @click="handleLastCategory"
          :style="
            ['index', 'message', 'about', 'admin'].indexOf(current[0]) == -1
              ? { backgroundColor: '#1890ff' }
              : null
          "
        >
          <template #title> 分类 </template>
          <template v-for="item in catalogue.children" :key="item.name">
            <template v-if="!item.children || item.children.length === 0">
              <a-menu-item :key="item.name">{{ item.name }}</a-menu-item>
            </template>
            <template v-else>
              <sub-menu :menu-info="item" :key="item.name" />
            </template>
          </template>
        </a-sub-menu>
        <a-menu-item key="message">留言板</a-menu-item>
        <a-menu-item key="about">关于</a-menu-item>
        <a-menu-item key="admin">后台管理</a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { inject, reactive, watch, ref, computed } from "vue";
import store from "@store/index";
import SubMenu from "./SubMenu.vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "HeaderNav",
  props: {
    current: Object,
  },
  emits: ["handleChangeMenu"],
  components: {
    "sub-menu": SubMenu,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },

  setup(props, emits) {
    const noteTree = computed(() => store.state.catalogueTree);
    // const current = computed(() => props.current || ["index"]); // ref(props.current || ["index"]);
    const current = ref(props.current || ["index"]);
    const lastCategory = ref([]);
    watch(current, (newVal, oldValue) => {
      if (
        ["index", "message", "about", "admin"].indexOf(current.value[0]) == -1
      )
        lastCategory.value = current.value;
      emits.emit("handleChangeMenu", current.value[0]);
    });
    watch(noteTree, (newVal, oldValue) => {
      if (current.value?.length && current.value[0] === "category") {
        handleLastCategory();
      }
    });
    const handleLastCategory = () => {
      if (!lastCategory.value.length && noteTree.value?.children?.length) {
        console.log(noteTree.value);
        lastCategory.value = [
          noteTree.value?.catalogue_map[noteTree.value?.children[0].name],
        ];
      }
      if (lastCategory.value.length) {
        current.value = lastCategory.value;
      }
    };
    return { noteTree, current, lastCategory, handleLastCategory };
  },

  mounted() {},
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
      // console.log(this.noteTree);
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
  margin: 0 auto !important;
  .ant-menu {
    justify-content: center;
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
.aa {
  background-color: red;
}
</style>
