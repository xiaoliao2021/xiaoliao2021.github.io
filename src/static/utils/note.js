import github from "@utils/github";

const github_config = {};

function getTree(res_data, callback) {
  res_data.forEach((item) => {
    if (item.type == "dir" && item.name == github_config.note_root_path) {
      github.getTree(
        github_config.login,
        github_config.repo,
        github_config.branch,
        item.sha,
        (res) => {
          if (res.code === 200) {
            callback({
              code: 200,
              data: createTree(res.data),
            });
          } else {
            console.log(res);
            callback(res);
          }
        }
      );
    }
  });
}
function createTree(obj) {
  let trees = obj.tree;
  let tree_map = {};
  let root_node = {
    name: github_config.note_root_path,
    path: github_config.note_root_path,
    sha: obj.sha,
    children: [],
  };
  tree_map[github_config.note_root_path] = root_node;
  trees.forEach((item) => {
    let { path, sha, type } = item;
    // 跳过忽视文件
    if (path.indexOf(".gitignore") != -1) return;
    let path_split = path.split("/");
    // 新节点
    let new_node = {
      name: path_split[path_split.length - 1],
      path: `${github_config.note_root_path}/${path}`,
      sha: sha,
      children: "tree" === type ? [] : undefined,
    };
    //找最后一个"/"的索引
    let index = path.lastIndexOf("/");
    // 获取父节点的key
    let pre_key =
      index === -1 ? github_config.note_root_path : path.substr(0, index);
    tree_map[pre_key].children.push(new_node); //父节点添加当前节点
    tree_map[path] = new_node; //存入当前节点
  });
  return root_node;
}
export default {
  setGitHubConfig(k, v) {
    github_config[k] = v;
    if (k === "token") {
      github.setToken(v);
    }
  },
  async getCatalogue(callback) {
    github.getRepo(
      github_config.login,
      github_config.repo,
      github_config.branch,
      (res) => {
        if (res.code === 200) {
          getTree(res.data, callback);
        } else {
          console.log(res);
          callback(res);
        }
      }
    );
  },
};
