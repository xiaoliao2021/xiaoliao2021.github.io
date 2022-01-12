<template>
  <Header :avatar="userMsg.avatar_url" :bio="userMsg.bio"/>
  {{ userMsg }}
</template>

<script>
import { github_config } from "./hooks/config.js";
import Header from "@components/Header.vue";
import note from "@utils/note";
import { reactive, provide, ref, computed } from "vue";
import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
import hljs from "highlight.js";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import store from './store/index'
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

export default {
  name: "App",
  components: {
    Header,
    VMdEditor,
    VMdPreview,
  },
  setup() {
    Object.keys(github_config).forEach((key) => {
      note.setGitHubConfig(key, github_config[key]);
    });

    const noteTree = computed(() => store.state.noteTree);
    const userMsg = computed(() => store.state.userConfig);

    provide("noteTree", noteTree);
    return reactive({ 
      noteTree,
      userMsg,
    });
  },
  mounted() {
    store.dispatch('getUserInfo')
    store.dispatch('getCatalogue')
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
    }
  },
};
</script>

<style lang="scss">
#app,
body,
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
