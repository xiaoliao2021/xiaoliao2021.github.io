
<template>
  <a-card hoverable style="width: auto">
    <template #cover>
      <a-breadcrumb>
        <template v-for="item in breadcrumbData" :key="item.name">
          <a-breadcrumb-item @click="currentCategory = item.label">
            {{ item.label }}
          </a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </template>
    <a-card-meta title="">
      <template #description
        ><a-button v-for="item in children" :key="item.name" type="primary" @click="currentCategory = item.name"
          >{{
            catalogue_map[item["name"]]
              ? catalogue_map[item["name"]]
              : item["name"]
          }}
          ai
        </a-button>
      </template>
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
    const children = ref([]);
    const catalogue_map = noteTree.value.catalogue_map;
    const breadcrumbData = computed(() => {
      const stack = [noteTree.value];
      while (stack.length) {
        const pop = stack.pop();
        if (
          pop["name"] === props["currentCategory"] ||
          catalogue_map[pop["name"]] === props["currentCategory"]
        ) {
          children.value = pop.children;
          return pop.path.split("/").map((item) => {
            return {
              label: catalogue_map[item] ? catalogue_map[item] : item,
              name: item,
            };
          });
        }
        pop.children.forEach((element) => {
          stack.push(element);
        });
      }
      return [{ label: "分类" }];
    });
    return { noteTree, breadcrumbData, children, catalogue_map };
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
