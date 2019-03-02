<template>
  <div id="app">
    <transition :name='transitionName'>
            <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName:'slide-left'
    }
  },
  watch: {
    '$route'(to,from){
        let isBack = this.$route.isBack;
        if(isBack){
          this.transitionName = 'slide-right'
        }
        else{
          if(to.path=='/index'){
             this.transitionName = 'slide-right'
          }
          else{
             this.transitionName = 'slide-left'
          }
        }
    }
  },
}
</script>

<style>
   @import './style/global.scss';
   .child-view {
     position: absolute;
     width: 100%;
     transition: all .8s ease;
     top: 0px;
     left: 0px;
}

.slide-left-enter,
 .slide-right-leave-active {
     opacity:0;
    -webkit-transform: translate(100%, 0) scale(0.8);
    transform: translate(100%, 0) scale(0.8);
    transition: all 0.8s ease-in;
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0) scale(0.8);
    transform: translate(-100% 0) scale(0.8);
    transition: all 0.8s ease-in;
}

</style>
