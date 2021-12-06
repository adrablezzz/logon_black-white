<template>
<div id="rain-fall" ref="fall">
  <!-- <div class="rain"></div> -->
</div>
</template>

<script>
export default {
  name: 'rainFall',
  mounted() {
    //  this.rainFall()
    let fall = this.$refs.fall;
    function rainFall() {
      setTimeout(() => {
        let el = document.createElement('div');
        el.setAttribute('class', 'rain');
        el.style.left = parseInt(Math.random()*100) + 'px';
        fall.appendChild(el);
        setTimeout(() => {
          fall.removeChild(el);
        },800)
        rainFall();
      },20)
    }
    rainFall()
  },
}
</script>

<style scoped>
#rain-fall {
  width: 100vw;
  height: 100vh;
  /* background-color: #bfa; */
  position: relative;
}
.rain {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 50px;
  width: 5px;
  height: 5px;
  background: radial-gradient(#8fd4fc, #52b1f2, #0599fc);
  border-radius: 999em;
  transform: rotateY(45deg);
  animation: rainDrop 0.8s infinite;
  z-index: 9999;
}
@keyframes rainDrop {
  0% {top:5%;}
  10% {top:10%;}
  20% {top:20%;}
  30% {top:30%;}
  40% {top:40%;}
  50% {top:50%;}
  60% {top:60%;}
  70% {top:70%;}
  80% {top:80%;}
  90% {top:90%;}
  100% {top:95%;}
}
</style>