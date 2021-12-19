<template>
  <Header />
</template>

<script>
/* eslint-disable */
import { github_config } from "./hooks/config.js";
import github from "@utils/github.js";
import Header from "@components/Header.vue";
import note from "@utils/note";
import { reactive, provide } from "vue";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    Object.keys(github_config).forEach((key) => {
      note.setGitHubConfig(key, github_config[key]);
    });
    const noteTree = reactive({ children: [] });
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
    });
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
        // this.noteTree = res_data;
        Object.keys(res_data).forEach((key) => {
          this.noteTree[key] = res_data[key];
        });
        console.log(res_data);
      } else {
        console.log(res);
      }
    });
  },
  methods: {},
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
