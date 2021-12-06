<template>
  <div id="app">
    <!-- <div id="rain-fall" ref="fall"></div> -->
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'APP',
  components: {
  },
  // mounted() {
  //   let fall = this.$refs.fall;
  //   function rainFall() {
  //     setTimeout(() => {
  //       let el = document.createElement('div');
  //       el.setAttribute('class', 'rain');
  //       el.style.left = parseInt(Math.random()*35+10) + '%';
  //       fall.appendChild(el);
  //       setTimeout(() => {
  //         fall.removeChild(el);
  //       },800)
  //       rainFall();
  //     },20)
  //   }
  //   rainFall()
  // },
  
}
</script>

<style lang='scss' scope>
@import '~@/assets/css/base.css';
#app {
  position: relative;
}
#rain-fall {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: none;
} 
.rain {
  display: inline-block;
  position: absolute;
  top: 0;
  width: 5px;
  height: 5px;
  background: radial-gradient(#8fd4fc, #52b1f2, #0599fc);
  border-radius: 999em;
  transform: rotateY(45deg);
  animation: rainDrop 0.8s infinite;
  z-index: 9999;
}
@keyframes rainDrop {
  0% {top:9%;}
  10% {top:15%;}
  20% {top:27%;}
  30% {top:36%;}
  40% {top:45%;}
  50% {top:54%;}
  60% {top:63%;}
  70% {top:71%;}
  80% {top:79%;}
  90% {top:86%;}
  100% {top:90%;}
}
</style>