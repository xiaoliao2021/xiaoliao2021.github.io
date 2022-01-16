<template>
  <div class="files-card" :style="{width: width}">
    <div class="top">
      <span class="title">{{title}}</span>
      <div class="operation" v-if="$slots['top-action']">
        <slot name="top-action" />
      </div>
    </div>
    <div class="text">
      <p>{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}{{ text }}</p>
    </div>
    <!-- <div class="divider"></div> -->
    <div class="footer">
      <div>post by @{{footer.name}} {{ footer.time}}</div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  components: {
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    // height: {
    //   type: String,
    //   default: 'auto'
    // },
    title: {
      type: [String, Number],
      default: 'No Title'
    },
    text: {
      type: String,
      default: 'There needs somthing in it...'
    },
    footer: {
      type: Object,
      default: {
        name: '小廖',
        time: '2022/1/15/ 16:58:20'
      }
    }
  },
  setup(){

    return {

    }
  }
}
</script>

<style lang="scss">
.files-card {
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 0 7px white;
  display: flex;
  flex-direction: column;
  &:hover {
    // transform: translate3d(1px, 1px, 1px);
    box-shadow: 0 0 10px white;
  }

  .top {
    padding: 20px 20px 0 20px;
    font-size: 24px;
    font-weight: 700;
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    .title {
      max-width: 80%;
    }
  }
  .text {
    padding: 20px;
  }
  
  .divider {
    width: 95%;
    border: 1px solid rgba(128, 128, 128, 0.377);
    align-self: center;
  }

  .footer {
    padding: 10px 10px 10px 20px;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
