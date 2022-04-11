<template>
  <Header
    :avatar="userMsg.avatar_url"
    :bio="userMsg.bio"
    :current="[activeKey]"
    @handleChangeMenu="handleChangeMenu"
  />
  <div class="content">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="index" tab="index">
        <Index />
      </a-tab-pane>
      <a-tab-pane key="category" tab="category">
        <Category :currentCategory="currentCategory" />
      </a-tab-pane>
      <a-tab-pane key="message" tab="message">留言板</a-tab-pane>
      <a-tab-pane key="about" tab="about">关于</a-tab-pane>
      <a-tab-pane key="admin" tab="about"><Admin /> </a-tab-pane>
      <template #renderTabBar></template>
    </a-tabs>
  </div>
  <div class="bottom">bottom</div>
</template>



<script>
import { github_config } from "./hooks/config.js";
import Header from "@components/Header.vue";
import note from "@utils/note";
import { reactive, provide, ref, computed } from "vue";
import store from "@store/index";
import FilesCard from "@components/FilesCard.vue";
import Index from "@views/index.vue";
import Category from "@views/category.vue";
import Admin from "@views/admin.vue";
export default {
  name: "App",
  components: {
    Header,
    FilesCard,
    Index,
    Admin,
    Category,
  },
  setup() {
    Object.keys(github_config).forEach((key) => {
      note.setGitHubConfig(key, github_config[key]);
    });

    // const noteTree = computed(() => store.state.catalogueTree);
    const userMsg = computed(() => store.state.userConfig);
    const currentCategory = ref("");
    const text = ` 一、对于第三方js库的优化，分离打包       生产环境是内网的话，就把资源放内网，通过静态文件引入，会比node_modules和外网CDN的打包加载快很多。如果有外网的话，可以通过CDN方式引入，因为不用占用访问外网的带宽，不仅可以为您节省流量，还能通过CDN加速，获得更快的访问速度。但是要注意下，如果你引用的CDN 资源存在于第三方服务器，在安全性上并不完全可控。        目前采用引入依赖包生产环境的js文件方式加载，直接通过window可以访问暴露出的全局变量，不必通过import引入，Vue.use去注册        在webpack的dev开发配置文件中, 加入如下参数，可以分离打包第三方资源包，key为依赖包名称，value是源码抛出来的全局变量。如下图所示，可以看到打包后vue相关资源包已经排除在外了。对于一些其他的工具库，尽量采用按需引入的方式。`;
    // provide("noteTree", noteTree);
    return reactive({
      // noteTree,
      activeKey: ref("index"),
      userMsg,
      text,
      currentCategory,
    });
  },
  mounted() {
    store.dispatch("getUserInfo");
    store.dispatch("getCatalogue");
    // store.dispatch('getFileContent', "df30d39cc194f4f76f31341edb808c41dbf9b583")
  },
  methods: {
    dfs(item) {
      item.label = item.name;
      item.value = item.sha;
      if (item.children) {
        item.children.forEach((element) => {
          this.dfs(element);
        });
      }
    },
    handleChangeMenu(menu) {
      if (["index", "message", "about", "admin"].indexOf(menu) == -1) {
        this.currentCategory = menu;
        menu = "category";
      }
      this.activeKey = menu;
    },
  },
};
</script>

<style lang="scss">
@import "static/styles/common.scss";
#app,
body,
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: overlay;
  @include scrollbar-like
}

#app {
  display: flex;
  flex-direction: column;
  background-color: #4b4453;
  // background: linear-gradient(45deg, #845EC2, #00c9b7);
  // background-image: linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}
.content {
  // border: 1px solid red;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  flex-grow: 1;
}
.bottom {
  border: 1px solid red;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
