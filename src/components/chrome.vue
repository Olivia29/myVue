<template>
  <div class="container">
     <!-- @handle-scroll="triggerRefreshOrLoad"  -->
     <div @click="triggerRefreshOrLoad">click_reload</div>
    <vue-scroll :ops="ops" ref="vs">
        <div class="content" v-for= "item in itemArray" :key="item" :id="'d' + item" >
        <span>{{item}}</span>
        </div>
    </vue-scroll>
    <!-- <div @click="handleLBD"> loading</div> -->
  </div>
</template>

<script>
import vuescroll from "vuescroll";
export default {
  components: {
    vuescroll
  },
  data() {
    return {
      itemArray: 20,
      itemAmount: 8,
      refresh: 1,
      ops: {
        vuescroll: {
          mode: "slide",
          sizeStrategy: "percent",
          pullRefresh: {
            enable: true,
             tips: {
              deactive: "下拉刷新",
              active: "Release to Load",
              start: "Loading...",
              beforeDeactive: "刷新成功"
            }
          },
          pushLoad: {
            enable: true,
            tips: {
              deactive: "Push to Load",
              active: "Release to Load",
              start: "Loading...",
              beforeDeactive: "Load Successfully!"
            }
          }
        }
      }
    };
  },
  methods: {
    triggerRefreshOrLoad() {
      this.$refs.vs.triggerRefreshOrLoad("refresh");
    },
  }
};
</script>
<style scoped>
#parent {
  width: 400px;
  height: 100%;
  float: left;
}
.content {
  width: 400px;
  height: 50px;
  margin: 10px 0;
  background-color: #cecece;
  text-align: center;
}
</style>
