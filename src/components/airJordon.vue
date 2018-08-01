<template>
 <div class="container">
   <h1>jordon</h1>
    <p v-for="item in list">
      AJ
      <span v-text="item"></span>
    </p>
    <infinite-loading @infinite="onInfinite" ref="infiniteLoading"  spinner="circles" > 
         <span slot="no-more">没有更多消息了</span>
    </infinite-loading>
 </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
export default {
  components: {
    InfiniteLoading
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    onInfinite($state) {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        $state.loaded();
        if (this.list.length / 20 === 3) {
          $state.complete();
        }
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  padding-bottom: 2rem;
  h1 {
    text-align: center;
    font-size: 1rem;
  }
  p {
    line-height: 2rem;
    font-size: 1rem;
  }
}
</style>
