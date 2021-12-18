<template>
  <svg viewBox="0 0 400 200">
    <text x="-20%" y="50%">{{ github.repo }}</text>
  </svg>
</template>

<script>
/* eslint-disable */
import { github } from "./hooks/config";
import { Octokit } from "@octokit/core";
import { createTokenAuth } from "@octokit/auth-token";
// import { encryptAES, decryptAES } from "./utils";
const read_octokit = new Octokit();
// const deployment_octokit = new Octokit();

export default {
  name: "App",
  components: {},
  mounted() {
    this.octokitSetToken(read_octokit, github.read_only_auth);
    this.init_github_config();
  },
  setup() {
    return {
      github,
    };
  },
  methods: {
    octokitSetToken(octokit, token) {
      const auth = createTokenAuth(token);
      octokit.hook.wrap("request", auth.hook);
      octokit.auth = auth;
    },
    async init_github_config() {
      const data = await read_octokit.request("GET /user");
      github.login = data.data.login;
      this.get_note_category();
    },
    async get_note_category() {
      const data = await read_octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
          owner: github.login,
          repo: github.repo,
          path: "",
          ref: github.ref,
        }
      );

      for (var i = 0; i < data.data.length; i++) {
        var item = data.data[i];
        if (item.type == "dir" && item.name == github.note_root_path) {
          this.get_dir_tree(item.sha);
          break;
        }
      }
    },
    create_directory_tree(obj) {
      const trees = obj.tree;
      let pre_depth = 0;
      const root_node = {
        name: github.note_root_path,
        path: github.note_root_path,
        sha: obj.sha,
        children: [],
      };
      const stack = new Array(); //栈
      stack.push(root_node); //根节点入栈
      let pre_node = root_node; //父节点
      let last_node = null; //上一个节点
      trees.forEach((item) => {
        const { path, sha, type } = item;
        // 跳过忽视文件
        if (path.indexOf(".gitignore") != -1) return;
        // 分割路径
        const path_split = path.split("/");
        // 路径深度
        const path_depth = path_split.length;
        // 新节点
        const new_node = {
          name: path_split[path_depth - 1],
          path: `${github.note_root_path}/${path}`,
          sha: sha,
          children: "tree" === type ? [] : undefined,
        };
        if (path_depth == pre_depth + 1) {
          //不需要切换父节点
          pre_node.children.push(new_node); // 添加子节点
        } else if (path_depth > pre_depth + 1) {
          // 进入下一级子目录
          pre_node = last_node; // 上一个节点作为当前的父节点
          pre_node.children.push(new_node); // 添加子节点
          stack.push(pre_node); //父节点入栈
          pre_depth++; // 目录深度更新
        } else {
          // 循环退出目录
          while (pre_depth > path_depth - 1) {
            stack.pop();
            pre_depth--;
          }
          // 重新获取父节点
          pre_node = stack[stack.length - 1];
          pre_node.children.push(new_node); // 添加子节点
        }
        last_node = new_node; //更新上一个节点
      });

      return root_node;
    },
    async get_dir_tree(tree_sha) {
      const data = await read_octokit.request(
        "GET /repos/{owner}/{repo}/git/trees/{tree_sha}",
        {
          owner: github.login,
          repo: github.repo,
          tree_sha: tree_sha,
          ref: github.ref,
          recursive: true,
        }
      );
      const root_node = this.create_directory_tree(data.data);
      console.log(root_node);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Homemade+Apple&family=Sacramento&display=swap");

#app,
body,
html {
  font-family: "Bangers", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-family: "Bangers", cursive;
}

.hello-text {
  border: 1px solid black;
}

svg {
  width: 100%;
  height: 300px;
  margin: auto;
}

svg text {
  text-transform: uppercase;
  animation: stroke 5s infinite alternate;
  letter-spacing: 10px;
  font-size: 100px;
}
@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 0.2;
  }
  50% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 0.5;
  }
  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 1;
  }
  90%,
  100% {
    fill: rgba(72, 138, 204, 1);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}
</style>
