<template>
  <div class="l">
    <files-card title="Vue首屏加载速度优化，提升80%以上" :text="text">
      <template #top-action>
        <a-button>Click Me</a-button>
        <a-button>Test Button</a-button>
      </template>
      <template #footer>
        <a-button type="primary">Hello</a-button>
      </template>
    </files-card>
  </div>
</template>

<script>
import { reactive, provide, ref, computed } from "vue";
import FilesCard from "@components/FilesCard.vue";
export default {
  name: 'index',
  components: {
    FilesCard,
  },
  props: {
    msg: String
  },
  setup() {
    const text = '### 123'
    return reactive({
      text,
    });
  }
}
</script>


<style lang="scss">
.l {
  width: auto;
  height: auto;
}
</style>
