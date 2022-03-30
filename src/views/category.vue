
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
      <template #description>
        <a-tag
          color="#2db7f5"
          v-for="item in children"
          :key="item.name"
          @click="currentCategory = item.name"
        >
          {{
            catalogue_map[item["name"]]
              ? catalogue_map[item["name"]]
              : item["name"]
          }}</a-tag
        >
        <a-list item-layout="horizontal" :data-source="listData">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <template #title>
                  <a href="https://www.antdv.com/">{{
                    item.name.substring(0, item.name.indexOf("."))
                  }}</a>
                </template>
                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
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
    const filesTree = computed(() => store.state.filesTree);
    console.log(filesTree);
    const children = ref(null);
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
    const listData = computed(() => {
      let stack = [filesTree.value];
      let find = false;
      const list = [];
      while (stack.length) {
        const pop = stack.pop();
        if (find && pop.name.indexOf(".") != -1) {
          list.push(pop);
        }
        if (
          pop["name"] === props["currentCategory"] ||
          catalogue_map[pop["name"]] === props["currentCategory"]
        ) {
          find = true;
          stack = [];
        }
        pop?.children?.forEach((element) => {
          stack.push(element);
        });
      }
      return list;
    });
    const data = [
      {
        title: "Ant Design Title 1",
      },
      {
        title: "Ant Design Title 2",
      },
      {
        title: "Ant Design Title 3",
      },
      {
        title: "Ant Design Title 4",
      },
    ];
    return {
      noteTree,
      breadcrumbData,
      children,
      catalogue_map,
      data,
      listData,
    };
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
