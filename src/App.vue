<template>
  <div id="app">
      <router-view></router-view>
       <ul class="linkStyle">
          <li class='item-cn'
            :class="{'item-cn-active': selectIndex==item.id}"
            v-for="item in nav"
            @click="routerLink(item.path)"
            :key="item.id">
            {{item.title}}
          </li>
      </ul>
  </div>
</template>

<script>
import { find } from "lodash";
export default {
  data() {
    return {
      nav: [
        { title: "教育", path: "/", id: 1 },
        { title: "乔丹", path: "/airJordon", id: 2 },
        { title: "克罗心", path: "/chrome", id: 3 },
        { title: "纪梵希", path: "/givenchy", id: 4 }
      ]
    };
  },
  methods: {
    routerLink(path) {
      this.$router.replace(path);
    }
  },
  computed: {
    selectIndex() {
      const cont = find(this.nav, data => data.path === this.$route.path);
      return cont.id;
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  height: 100%;
  width: 100%;
  .linkStyle {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    height: 2.2rem;
    align-items: center;
    justify-content: space-around;
    background: #fff;

    li {
      list-style-type: none;
      font-size: 1rem;
    }
    .item-cn {
      color: #1c2438;
      font-weight: 800;
    }
    .item-cn-active {
      color: #2d8cf0;
    }
  }
}
</style>
