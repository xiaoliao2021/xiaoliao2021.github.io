
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
    <a-card-meta>
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
        <a-list
          v-if="!(currentCategory?.indexOf('.') != -1)"
          item-layout="horizontal"
          :data-source="listData"
        >
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta
                description="2020-04-11"
              >
                <template #title>
                  <a @click="currentCategory = item.name">{{
                    item.name.substring(0, item.name.indexOf("."))
                  }}</a>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
        <md-editor v-else :modelValue="content" :previewOnly="true" />
      </template>
    </a-card-meta>
  </a-card>
</template>


<script>
import { reactive, provide, ref, computed } from "vue";
import FilesCard from "@components/FilesCard.vue";
import store from "@store/index";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default {
  name: "category",
  components: {
    FilesCard,
    MdEditor,
  },
  props: {
    currentCategory: String,
  },
  setup(props, emits) {
    const noteTree = computed(() => store.state.catalogueTree);
    const filesTree = computed(() => store.state.filesTree);
    const fileContentMap = computed(() => store.state.fileContentMap);
    const showFile = ref(null);
    const content = computed(() => fileContentMap.value[showFile.value?.sha]);
    // console.log(noteTree, filesTree);
    
    const children = ref(null);
    const catalogue_map = noteTree.value.catalogue_map;
    const breadcrumbData = computed(() => {
      const stack = [filesTree.value];
      while (stack.length) {
        const pop = stack.pop();
        if (
          pop["name"] === props["currentCategory"] ||
          catalogue_map[pop["name"]] === props["currentCategory"]
        ) {
          if (pop["name"].indexOf(".") != -1) {
            showFile.value = pop;
          }
          children.value = [];
          pop.children?.forEach((element) => {
            if (element["name"].indexOf(".") == -1) {
              children.value.push(element);
            }
          });
          return pop.path.split("/").map((item) => {
            return {
              label: catalogue_map[item] ? catalogue_map[item] : item,
              name: item,
            };
          });
        }
        pop.children?.forEach((element) => {
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
          store.dispatch("getFileContent", pop.sha);
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
      content,
      breadcrumbData,
      fileContentMap,
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
