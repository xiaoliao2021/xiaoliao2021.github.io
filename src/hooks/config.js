import { reactive } from "vue";
import { decryptAES } from "@utils/tools";
const dataAES = {
  read_only_ciphertext:
    "nbrQ3EO7u+6g8SWPc6X5NTZvS5kccFvGnaYlO9hzGpyzIUUJhc7dzmJcOQtFDd8+", //只读令牌密文
  read_only_key: "myblog_demo", //只读令牌秘钥
  deployment_ciphertext:
    "icM7o2Up7ZDP73FJdAdGtRwtC7kEDI5UYeYwVmYwlpZMj2YC1NM9IKFJFVSEOgRg", //部署令牌密文
};
const github = reactive({
  login: "",
  repo: "myblog_demo", //项目名称
  ref: "notes", //项目分支
  note_root_path: "note_root", //笔记目录
  read_only_auth: decryptAES(
    dataAES.read_only_ciphertext,
    dataAES.read_only_key
  ),
});

export { github };
