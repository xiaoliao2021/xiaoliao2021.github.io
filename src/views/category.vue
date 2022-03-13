
<template>
  {{ currentCategory }}
  <a-card hoverable style="width: auto">
    <template #cover>
      <a-breadcrumb>
        <a-breadcrumb-item>分类</a-breadcrumb-item>
        <a-breadcrumb-item>
          Linux
          <template #overlay>
            <a-menu>
              <a-menu-item> Linux </a-menu-item>
              <a-menu-item> Android </a-menu-item>
              <a-menu-item> 编程 </a-menu-item>
            </a-menu>
          </template>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Button</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <a-card-meta title="">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>


<script>
import { reactive, provide, ref, computed } from "vue";
import FilesCard from "@components/FilesCard.vue";
import store from "@store/index";
export default {
  name: "category",
  components: {
    FilesCard,
  },
  props: {
    currentCategory: String,
  },
  setup(props, emits) {
    const noteTree = computed(() => store.state.catalogueTree);
    console.log(noteTree.value);
    const breadcrumbData = computed(() => {
      
    });
    return { noteTree, breadcrumbData };
  },
  computed: {
    catalogue: function () {
      const obj = JSON.parse(JSON.stringify(this.noteTree));

      return obj;
    },
  },
};
</script>


<style lang="scss">
</style>
