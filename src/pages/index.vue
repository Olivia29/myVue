<template>
   <div class="container">
     <header>
        <img :src="images.search"  alt="" srcset="">
        <input type="text" placeholder="搜索课程专家"  @click="routerTo('search')">
        <span>取消</span>
     </header>
     <div class="swiper">
        <swiper :options="swiperOption" v-if="slides.length>1" ref="mySwiper">
            <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item.imgUrl" @click="bannerJump(item.url,item.name)"></swiper-slide>
        </swiper>
         <div class="swiper-pagination"></div> 
     </div>
     <nav>
       <div class="moduleBox">
         <div class="title">
            <div>
              <img :src="images.liveicon" alt="">
              <span>直播预告</span>
            </div>
            <img :src="images.moreicon" alt="" >
         </div>
         <ul>
           <li  v-for="(item, index) in recomCourseList" :key="index" v-if="index<2" class="liveLi">
             <div class="liveLeft">
                <h4 v-text="item.name"></h4>
                <p>{{item.expertName}}<span v-text="item.hospitalName"></span></p>
                <p class="time">2018年3月23日 12:00-14:00</p>
             </div>
             <img :src="images.liveon" alt="">
           </li>
         </ul>
       </div>
       <div class="moduleBox">
         <div class="title">
            <div>
              <img :src="images.recommend" alt="">
              <span>精选推荐</span>
            </div>
            <img :src="images.moreicon" alt="" >
         </div>
         <ul>
           <li  v-for="(item, index) in recomCourseList" :key="index" v-if="index<2" class="recommend">
             <div class="liveTop">
               <div class="topLeft">
                 <h4 v-text="item.name"></h4>
                 <p>{{item.expertName}}<span v-text="item.hospitalName"></span></p>
               </div>
                <img :src="item.imgUrl||images.defaultImg"  alt="" srcset="">
             </div>
             <div class="liveBottom">
                   <span class="free" v-if='item.isFree == "10"'>免费</span>
                    <span class="money" v-if='item.isFree == "20"' v-text="item.price"></span>
                  <span class="studyNum">已有{{item.studyCourseCount}}人学习</span>
              </div>
           </li>
         </ul>
         <div class="bottomTab">
            <div class="lookAll">
              <img :src="images.all" alt="">
              查看全部
            </div>
            <div class="change">
              <img :src="images.fill" alt="">
              换一换
            </div>
         </div>
       </div>
     </nav>
  </div>

</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getBanner, recomCourse } from "@/api";
import "swiper/dist/css/swiper.min.css";
import utils from "@/util";

import search from "@/assets/images/page1@2x.png";
import moreicon from "@/assets/images/dengdeng@2x.png";
import liveicon from "@/assets/images/group_4@2x.png";
import liveon from "@/assets/images/group_6@2x.png";
import recommend from "@/assets/images/page_1@2x.png";
import defaultImg from "@/assets/images/default.png";
import all from "@/assets/images/all@2x.png";
import fill from "@/assets/images/fill@2x.png";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      images: {
        search: search,
        moreicon: moreicon,
        liveicon: liveicon,
        liveon: liveon,
        recommend: recommend,
        defaultImg: defaultImg,
        all: all,
        fill: fill
      },
      uid: this.global.uid,
      slides: {},
      recomCourseList: {},
      swiperOption: {
        loop: true,
        // autoplay:true,
        speed: 900,
        notNextTick: true,
        debugger: true,
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        slidesPerView: 1.1,
        autoplayDisableOnInteraction: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    
    var self = this;
    let data = {
      uid: this.global.uid,
      token: this.global.token,
      maid: this.global.maid,
      device: this.global.device
    };
    getBanner(data).then(res => {
      self.slides = res.content.banner;
    });

    //精选推荐
    // let data2 = {
    //   uid: this.global.uid,
    //   token: this.global.token,
    //   maid: this.global.maid,
    //   device: this.global.device
    // };
    recomCourse(data).then(res => {
      self.recomCourseList = res.content.courses;
    });
  },
  methods: {
     routerTo(name) {
        utils.routerTo(this, name)
    },
    bannerJump(baurl, banname) {
      dsBridge.call(
        "pushBanner",
        JSON.stringify({ url: baurl, name: banname })
      );
      console.log(banname);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-bottom: 2rem;
  // height: 100%;
  header {
    height: 2.2rem;
    width: 100%;
    padding: 0.3rem 0.625rem;
    box-sizing: border-box;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.75rem;
      height: 0.75rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 1.275rem;
      margin: auto 0;
    }
    input {
      width: 88%;
      padding: 0.35rem 1.725rem;
      box-sizing: border-box;
      height: 100%;
      display: block;
      font-size: 0.75rem;
      background-color: #f6f7fb;
      border-radius: 10px;
    }
    span {
      font-size: 0.8rem;
    }
  }

  .swiper {
    margin: 0.4rem auto;
    width: 100%;
    height: 8.5rem;
    overflow: hidden;

    .swiper-slide {
      width: 90% !important;
      margin: 0 !important;
      height: 7.5rem;
      &.swiper-slide-active {
        img {
          margin-top: 0;
          width: 90%;
          height: 7.5rem;
        }
      }
      img {
        display: block;
        margin: 0 auto;
        width: 90%;
        height: 90%;
        vertical-align: middle;
        -webkit-transition: all 1s ease 0s;
        -moz-transition: all 1s ease 0s;
        -ms-transition: all 1s ease 0s;
        -o-transition: all 1s ease 0s;
        transition: all 1s ease 0s;
      }
    }
  }
  nav {
    padding: 0.625rem;
    // margin-bottom: 2rem;
    .moduleBox {
      background-color: #fff;
      padding: 0 0.625rem;
      border-radius: 10px;
      margin-bottom: 0.625rem;
      .title {
        padding: 0.95rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        > div {
          display: flex;
          align-items: center;
          flex-direction: row;
          img {
            width: 0.9rem;
            height: 0.9rem;
            margin-right: 0.6rem;
          }
          span {
            font-size: 0.85rem;
            color: #1c1c1c;
            font-weight: bold;
          }
        }
      }
      ul .liveLi {
        border-top: 1px solid #ebebeb;
        padding: 0.65rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .liveLeft {
          width: 75%;
          h4 {
            font-size: 0.8rem;
            color: #484848;
          }
          p {
            font-size: 0.65rem;
            color: #484848;
            margin: 0.6rem 0 0.525rem;
            span {
              color: #969696;
              margin-left: 0.4rem;
            }
          }
          p.time {
            font-size: 0.5rem;
            color: #969696;
            margin: 0;
          }
        }
        > img {
          width: 3.05rem;
          height: 1.25rem;
          align-self: flex-end;
        }
      }
      ul .recommend {
        border-top: 1px solid #ebebeb;
        padding: 0.65rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .liveTop {
          display: flex;
          justify-content: space-between;
          > div {
            width: 60%;
            h4 {
              font-size: 0.8rem;
              color: #484848;
            }
            p {
              font-size: 0.65rem;
              color: #484848;
              margin: 0.6rem 0 0.525rem;
              span {
                color: #969696;
                margin-left: 0.4rem;
              }
            }
          }
          img {
            width: 5.75rem;
            height: 3.75rem;
          }
        }
        .liveBottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .free {
            font-size: 0.75rem;
            color: #41cd8c;
          }
          .money {
            font-size: 0.75rem;
            color: #ff6161;
          }
          .studyNum {
            font-size: 0.5rem;
            color: #969696;
          }
        }
      }
      .bottomTab {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        padding: 0.75rem 0;
         border-top: 1px solid #ebebeb;
        div {
         
          display: flex;
          align-items: center;
          flex-direction: row;
          font-size: 0.65rem;
          color: #b2b2b2;
          img{
            width: .6rem;
            height: .6rem;
            margin-right: .25rem;
          }
        }
      }
    }
  }
}
</style>
