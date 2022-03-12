<template>
  <template v-if="3 > 0">
    <a-form
      class="passwd-form"
      layout="inline"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item>
        <a-input v-model:value="formState.password" type="password" placeholder="请输入密码">
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
        >登录</a-button>
      </a-form-item>
    </a-form>
  </template>
</template>

<script>
import { LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
export default {
  name: 'admin',
  components: {
    LockOutlined,
  },
  props: {
    msg: String
  },
  setup() {
    const formState = reactive({
      password: '',
    });

    const handleFinish = values => {
      console.log(values, formState);
    };

    const handleFinishFailed = errors => {
      console.log(errors);
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  }
}
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
