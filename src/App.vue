<template>
  <Header />
  <a-cascader
    v-model:value="value"
    :options="options_c"
    :display-render="displayRender"
    expand-trigger="hover"
    placeholder="选择笔记"
    @change="onChange"
  >
  </a-cascader>
  <!-- <v-md-preview :text="content"></v-md-preview> -->
  <v-md-editor v-model="content" height="400px"></v-md-editor>
</template>

<script>
/* eslint-disable */
import { github_config } from "./hooks/config.js";
import github from "@utils/github.js";
import Header from "@components/Header.vue";
import note from "@utils/note";
import { reactive, provide, ref } from "vue";
import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
import hljs from "highlight.js";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
];

export default {
  name: "App",
  components: {
    Header,
    VMdEditor,
    VMdPreview,
  },
  setup() {
    const displayRender = ({ labels }) => {
      return labels[labels.length - 1];
    };
    Object.keys(github_config).forEach((key) => {
      note.setGitHubConfig(key, github_config[key]);
    });
    const noteTree = reactive({ children: [], catalogue_map: {} });
    const userMsg = reactive({
      avatar_url: null,
      bio: null,
      company: null,
      name: null,
      url: null,
    });
    provide("noteTree", noteTree);
    return reactive({
      noteTree,
      userMsg,
      content: ref(""),
      value: ref([]),
      options,
      displayRender,
    });
  },
  computed: {
    options_c: function () {
      const temp = JSON.parse(JSON.stringify(this.options));
      this.dfs(temp);
      return temp.children;
    },
  },
  mounted() {
    github.getUser(github_config.login, (res) => {
      const res_data = res.data;
      if (res.code === 200) {
        this.userMsg.avatar_url = res_data.avatar_url;
        this.userMsg.name = res_data.name;
        this.userMsg.bio = res_data.bio;
        this.userMsg.company = res_data.company;
        this.userMsg.url = res_data.url;
      } else {
        console.log(res);
      }
    });
    note.getCatalogue((res) => {
      const res_data = res.data;
      if (res.code === 200) {
        this.options = res_data.root_node;
        Object.keys(res_data.root_catalogue).forEach((key) => {
          this.noteTree[key] = res_data.root_catalogue[key];
        });
      } else if (res.code === 201) {
        Object.keys(res_data).forEach((key) => {
          this.noteTree[key] = res_data[key];
        });
      } else {
        console.log(res);
      }
    });
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
    onChange(value, selectedOptions) {
      console.log(selectedOptions[selectedOptions.length - 1]);
      const sha = selectedOptions[selectedOptions.length - 1].sha;
      note.getContent(sha, (res) => {
        const res_data = res.data;
        if (res.code === 200) {
          this.content = res_data.content;
        } else {
          console.log(res);
        }
      });
    },
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
