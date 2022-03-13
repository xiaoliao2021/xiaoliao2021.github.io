<template>
  <template v-if="!userMsg || !userMsg.token">
    <a-form
      class="passwd-form"
      layout="inline"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item>
        <a-input
          v-model:value="formState.password"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        >
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formState.password === ''"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </template>
  <template v-else>
    {{ userMsg.token }}
  </template>
</template>

<script>
import { LockOutlined } from "@ant-design/icons-vue";
import store from "@store/index";
import { github_config } from "./../hooks/config";
import { message } from "ant-design-vue";
import note from "@utils/note";
import { encryptAES, decryptAES } from "@utils/tools";
import { reactive, computed } from "vue";
export default {
  name: "admin",
  components: {
    LockOutlined,
  },
  props: {},
  setup() {
    const formState = reactive({
      password: "",
    });
    const userMsg = computed(() => store.state.userConfig);
    const handleFinish = async (values) => {
      console.log(values, formState);
      try {
        const token = decryptAES(
          github_config.deployment_ciphertext,
          formState.password
        );
        if (token && token.length === 40) {
          note.setGitHubConfig("token", token);
          const res = await note.getUserInfo();
          if (res.code === 200) {
            message.success("验证成功");
            store.commit("setUserToken", token);
          } else {
            message.error("验证失败");
          }
        } else {
          message.error("密码错误");
        }
      } catch (err) {
        message.error("密码错误");
      }
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    return {
      userMsg,
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
};
</script>


<style lang="scss">
.passwd-form {
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  margin: 0 auto;
}
</style>
